import fs from 'fs';
import path from 'path';

const files = [
  'src/j6-app.ts',
  'src/j6-preset-list.ts',
  'src/j6-preset-detail.ts'
];

const replacements = [
  [/#ff5d00/gi, 'var(--color-orange-primary)'],
  [/#ff5500/gi, 'var(--color-orange-glow)'],
  [/#ff7700/gi, 'var(--color-orange-light)'],
  [/#101010/gi, 'var(--bg-app-base)'],
  [/#0b0c0d/gi, 'var(--bg-app-base)'],
  [/#141416/gi, 'var(--bg-surface)'],
  [/#1e1e1e/gi, 'var(--bg-panel)'],
  [/#1c1d22/gi, 'var(--bg-list-header)'],
  [/#120201/gi, 'var(--bg-input)'],
  [/#0c0c0e/gi, 'var(--bg-element-dark)'],
  [/#24252b/gi, 'var(--bg-element-hover)'],
  [/#e2e2e4/gi, 'var(--text-primary)'],
  [/#8c8e94/gi, 'var(--text-secondary)'],
  [/#6a6b72/gi, 'var(--text-muted)'],
  [/#1f2024/gi, 'var(--border-dark)'],
  [/#2e2f34/gi, 'var(--border-medium)'],
  [/#3c3d42/gi, 'var(--border-light)'],
  [/#444\b/gi, 'var(--border-lighter)'],
  [/'Inter',\s*system-ui,\s*sans-serif/gi, 'var(--font-sans)'],
  [/'VT323',\s*monospace/gi, 'var(--font-mono)'],
  [/'Inter',\s*sans-serif/gi, 'var(--font-sans)'],
];

for (const relPath of files) {
  const absolutePath = path.join(process.cwd(), relPath);
  let content = fs.readFileSync(absolutePath, 'utf8');
  let newContent = content;
  
  for (const [regex, replacement] of replacements) {
    newContent = newContent.replace(regex, replacement);
  }
  
  if (newContent !== content) {
    fs.writeFileSync(absolutePath, newContent, 'utf8');
    console.log(`Updated ${relPath}`);
  }
}
