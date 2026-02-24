const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const FINANCE_DIR = path.join(__dirname, '../../finance');
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
const NOW = new Date();

function archive() {
  if (!fs.existsSync(FINANCE_DIR)) {
    console.log('Finance directory not found.');
    return;
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
        if (fs.existsSync(mdPath)) {
          content = fs.readFileSync(mdPath, 'utf8');
        } else {
          // Fallback: look for any .md file
          const files = fs.readdirSync(fullPath);
          const mdFiles = files.filter(f => f.endsWith('.md'));
          if (mdFiles.length > 0) {
            content = fs.readFileSync(path.join(fullPath, mdFiles[0]), 'utf8');
          }
        }

        if (!content) {
          content = `Archive of post: ${item} (No markdown content found).`;
        }

        try {
          // Create GitHub Issue
          const title = `Archive: ${item}`;
          const isDryRun = process.env.DRY_RUN === 'true' || !process.env.GITHUB_ACTIONS;
          
          if (isDryRun) {
            console.log(`[DRY RUN] Would create issue: ${title}`);
          } else {
            // Use temporary file for body to avoid shell escaping issues with large content
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
