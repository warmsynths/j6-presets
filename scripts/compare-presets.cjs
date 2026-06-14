const fs = require('fs');
const path = require('path');
const csvPath = path.join(__dirname, '..', 'data', 'Roland J-6 Preset Sounds Ver1.0 (RAW).xlsx - Sheet1.csv');
const jsPath = path.join(__dirname, '..', 'src', 'presets-data.js');
const csv = fs.readFileSync(csvPath, 'utf8');
const rows = csv.split(/\r?\n/).map(line => {
  const res = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      res.push(cur);
      cur = '';
    } else {
      cur += ch;
    }
  }
  res.push(cur);
  return res;
});

// Normalize headers to safe JSON keys and preserve duplicates.
function sanitizeHeader(name) {
  let value = name.trim();
  if (!value) {
    return 'blank';
  }
  value = value.replace(/\//g, '_').replace(/%/g, 'pct').replace(/\+/g, 'plus');
  value = value.replace(/[^0-9A-Za-z_]+/g, '_');
  value = value.replace(/_+/g, '_');
  value = value.replace(/^_+|_+$/g, '').toLowerCase();
  return value || 'blank';
}

const header = rows[5];
if (!header || !header.includes('Preset')) {
  throw new Error('CSV header row not found');
}

const keys = [];
const seen = {};
for (const column of header) {
  const key = sanitizeHeader(column);
  const count = seen[key] || 0;
  const uniqueKey = count === 0 ? key : `${key}_${count + 1}`;
  seen[key] = count + 1;
  keys.push(uniqueKey);
}

const items = [];
for (let i = 6; i < rows.length; i++) {
  const row = rows[i];
  if (!row || row.length <= 24) continue;
  const notes = row[24].trim();
  if (!notes) continue;

  const record = {};
  for (let idx = 0; idx < keys.length; idx++) {
    record[keys[idx]] = idx < row.length ? row[idx].trim() : '';
  }

  const bank_patch = record['preset'] || record['preset_2'] || '';
  record['bankPatch'] = bank_patch.replace(/\s*-\s*/g, '-');
  record['soundNameCategory'] = notes.split(':')[0].trim();
  record['notesDescription'] = notes;

  const waveform_parts = [];
  for (const waveform_key of ['saw', 'sub', 'pwm', 'pulse', 'lfo']) {
    let part = record[waveform_key] || '';
    if (!part || part.toLowerCase() === 'x') {
      continue;
    }
    if (part === 'SQU') {
      part = 'Square';
    } else if (part === 'SAW') {
      part = 'Saw';
    } else if (part === 'LFO*') {
      part = 'LFO';
    } else if (/^\d+%$/.test(part)) {
      part = `Sub ${part}`;
    }
    waveform_parts.push(part);
  }
  record['waveformOscType'] = waveform_parts.length ? waveform_parts.join(' + ') : 'Unknown';

  record['filterFreq'] = record['freq'] || '';
  record['resonance'] = record['res'] || '';
  record['envMod'] = record['env'] || '';
  record['attack'] = record['a'] || '';
  record['decay'] = record['d'] || '';
  record['sustain'] = record['s_control_range'] || '';
  record['release'] = record['r'] || '';
  record['chorus'] = record['blank_3'] || '';
  record['delayReverb'] = record['delay'] || '';

  items.push(record);
}

const generated = ('export const presetsData = ' + JSON.stringify(items, null, 2) + ';\n').replace(/\r\n/g, '\n');
const current = fs.readFileSync(jsPath, 'utf8').replace(/\r\n/g, '\n');

console.log('current length normalized:', current.length);
console.log('generated length normalized:', generated.length);
console.log('equal?', current.trim() === generated.trim());

if (current.trim() !== generated.trim()) {
  const curTrim = current.trim();
  const genTrim = generated.trim();
  const limit = Math.min(curTrim.length, genTrim.length);
  for (let i = 0; i < limit; i++) {
    if (curTrim[i] !== genTrim[i]) {
      console.log(`Mismatch at index ${i}:`);
      console.log(`Current: ${JSON.stringify(curTrim.substring(i, i + 100))}`);
      console.log(`Generated: ${JSON.stringify(genTrim.substring(i, i + 100))}`);
      break;
    }
  }
}
