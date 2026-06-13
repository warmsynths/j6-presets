const fs = require('fs');
const path = require('path');

const target = path.resolve(process.cwd(), 'dist');

if (!fs.existsSync(target)) {
  console.log('No dist folder to remove.');
  process.exit(0);
}

try {
  fs.rmSync(target, { recursive: true, force: true });
  console.log('Removed dist folder:', target);
} catch (err) {
  console.error('Failed to remove dist folder:', err);
  process.exit(1);
}
