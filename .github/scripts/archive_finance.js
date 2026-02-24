const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const WEBSITE_ROOT = path.join(__dirname, '../../');
const FINANCE_DIR = path.join(WEBSITE_ROOT, 'finance');
const BACKUP_IMG_DIR = path.join(WEBSITE_ROOT, 'backupImg');
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
const NOW = new Date();

// Detect repo info for raw.githubusercontent.com links
let repoUrlBase = '';
try {
  const remoteUrl = execSync('git config --get remote.origin.url', { encoding: 'utf8' }).trim();
  // Match https://github.com/owner/repo.git or git@github.com:owner/repo.git
  const match = remoteUrl.match(/github\.com[:/](.+?)\/(.+?)(\.git)?$/);
  if (match) {
    repoUrlBase = `https://raw.githubusercontent.com/${match[1]}/${match[2]}/main/backupImg/`;
  }
} catch (e) {
  console.warn('Could not detect remote origin URL, images might not show up in Issue.');
}

function archive() {
  if (!fs.existsSync(FINANCE_DIR)) {
    console.log('Finance directory not found.');
    return;
  }

  if (!fs.existsSync(BACKUP_IMG_DIR)) {
    fs.mkdirSync(BACKUP_IMG_DIR, { recursive: true });
  }

  const items = fs.readdirSync(FINANCE_DIR);
  
  for (const item of items) {
    const fullPath = path.join(FINANCE_DIR, item);
    
    // Only process directories matching YYYY-MM-DD-description
    if (fs.statSync(fullPath).isDirectory() && /^\d{4}-\d{2}-\d{2}-/.test(item)) {
      const dateStr = item.substring(0, 10);
      const postDate = new Date(dateStr);
      
      if (isNaN(postDate.getTime())) {
        console.log(`Skipping ${item}: Invalid date format.`);
        continue;
      }

      if (NOW - postDate > THIRTY_DAYS_MS) {
        console.log(`Archiving ${item}...`);
        
        let content = '';
        const mdPath = path.join(fullPath, 'index.md');
        
        function readFileSyncSafe(filePath) {
          const buffer = fs.readFileSync(filePath);
          if (buffer[0] === 0xFF && buffer[1] === 0xFE) {
            return buffer.toString('utf16le');
          }
          let str = buffer.toString('utf8');
          if (str.startsWith('\uFEFF')) {
            str = str.slice(1);
          }
          if (str.includes('\u0000')) {
            return buffer.toString('utf16le');
          }
          return str;
        }

        if (fs.existsSync(mdPath)) {
          content = readFileSyncSafe(mdPath);
        } else {
          const files = fs.readdirSync(fullPath);
          const mdFiles = files.filter(f => f.endsWith('.md'));
          if (mdFiles.length > 0) {
            content = readFileSyncSafe(path.join(fullPath, mdFiles[0]));
          }
        }

        if (!content) {
          content = `Archive of post: ${item} (No markdown content found).`;
        }

        try {
          // 1. Identify and backup images
          const allFiles = fs.readdirSync(fullPath);
          const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
          const imagesInPost = allFiles.filter(f => imageExtensions.includes(path.extname(f).toLowerCase()));

          for (const img of imagesInPost) {
            const oldImgPath = path.join(fullPath, img);
            const newImgName = `${dateStr}-${img}`;
            const newImgPath = path.join(BACKUP_IMG_DIR, newImgName);
            
            console.log(`Backing up image: ${img} -> ${newImgName}`);
            fs.copyFileSync(oldImgPath, newImgPath);
            
            // 2. Update image references in Markdown
            // Replace relative path ![alt](./img.png) or ![alt](img.png)
            const relativePattern = new RegExp(`(!\\[.*?\\]\\()(\\./)?${img.replace('.', '\\.')}(\\))`, 'g');
            if (repoUrlBase) {
              content = content.replace(relativePattern, `$1${repoUrlBase}${newImgName}$3`);
            }
          }

          // Create GitHub Issue
          const title = `Archive: ${item}`;
          const isDryRun = process.env.DRY_RUN === 'true' || !process.env.GITHUB_ACTIONS;
          
          if (isDryRun) {
            console.log(`[DRY RUN] Would create issue: ${title}`);
            console.log('--- Content Preview ---');
            console.log(content.substring(0, 200) + '...');
          } else {
            const tmpFile = path.join(__dirname, 'temp_issue_body.md');
            fs.writeFileSync(tmpFile, content);
            execSync(`gh issue create --title "${title}" --body-file "${tmpFile}"`, { stdio: 'inherit' });
            fs.unlinkSync(tmpFile);
          }
          
          // Remove directory
          if (isDryRun) {
            console.log(`[DRY RUN] Would remove directory: ${fullPath}`);
          } else {
            fs.rmSync(fullPath, { recursive: true, force: true });
            console.log(`Successfully archived and removed ${item}.`);
          }
        } catch (error) {
          console.error(`Failed to archive ${item}:`, error.message);
        }
      } else {
        console.log(`Skipping ${item}: Post is less than 30 days old.`);
      }
    }
  }
}

archive();
