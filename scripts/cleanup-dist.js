const fs = require('fs');
const path = require('path');

const target = path.resolve(process.cwd(), 'dist');

if (!fs.existsSync(target)) {
  console.log('No dist folder to remove.');
  process.exit(0);
}

try {
  // Node 14.14+ supports rmSync with recursive
  if (fs.rmSync) {
    fs.rmSync(target, { recursive: true, force: true });
  } else {
    // fallback
    const rimraf = require('child_process').execSync;
    rimraf(`rmdir /s /q "${target}"`);
  }
  console.log('Removed dist folder:', target);
} catch (err) {
  console.error('Failed to remove dist folder:', err);
  process.exit(1);
}
