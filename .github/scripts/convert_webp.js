const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const TARGET_DIRS = [
  path.join(__dirname, '../../finance'),
  path.join(__dirname, '../../blog')
];
const IMAGE_EXTS = ['.jpg', '.jpeg', '.png'];

async function convertToWebp() {
  for (const targetDir of TARGET_DIRS) {
    if (!fs.existsSync(targetDir)) {
      console.log(`Directory not found: ${targetDir}`);
      continue;
    }

    console.log(`Scanning ${targetDir}...`);
    const items = fs.readdirSync(targetDir, { recursive: true });
    
    for (const item of items) {
      const fullPath = path.join(targetDir, item);
      const ext = path.extname(item).toLowerCase();

      if (fs.statSync(fullPath).isFile() && IMAGE_EXTS.includes(ext)) {
        const dir = path.dirname(fullPath);
        const baseName = path.basename(item, ext);
        const webpName = `${baseName}.webp`;
        const webpPath = path.join(dir, webpName);

        console.log(`Converting ${item} to WebP...`);
        
        try {
          await sharp(fullPath)
            .webp({ quality: 80 })
            .toFile(webpPath);
          
          console.log(`Successfully created ${webpName}.`);

          // Update references in .md files
          updateMarkdownReferences(dir, baseName + ext, webpName);

          // Delete original file
          fs.unlinkSync(fullPath);
          console.log(`Deleted original file ${item}.`);
        } catch (err) {
          console.error(`Error processing ${item}:`, err.message);
        }
      }
    }
  }
}

function updateMarkdownReferences(dir, oldName, newName) {
  // Search for .md files in the current directory and its parent
  const mdFiles = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
  
  for (const mdFile of mdFiles) {
    const mdPath = path.join(dir, mdFile);
    let content = fs.readFileSync(mdPath, 'utf8');
    
    // 1. Update Front Matter image: field
    // Match 'image: ./oldName' or 'image: oldName'
    const frontMatterPattern = new RegExp(`(image:\\s*(\\./)?)${oldName.replace('.', '\\.')}`, 'g');
    
    // 2. Update Markdown image references
    // Match (![alt](path/oldName)) or ([text](path/oldName)) or just (oldName)
    const escapedOldName = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const markdownPattern = new RegExp(`([(/])${escapedOldName}(\\))`, 'g');
    
    let updated = false;
    if (frontMatterPattern.test(content)) {
      content = content.replace(frontMatterPattern, `$1${newName}`);
      updated = true;
    }
    if (markdownPattern.test(content)) {
      content = content.replace(markdownPattern, `$1${newName}$2`);
      updated = true;
    }

    if (updated) {
      console.log(`Updating references in ${mdFile}...`);
      fs.writeFileSync(mdPath, content, 'utf8');
    }
  }
}

convertToWebp().catch(err => {
  console.error('Fatal error during conversion:', err);
  process.exit(1);
});
