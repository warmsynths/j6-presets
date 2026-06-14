import csv
from pathlib import Path
import json
import re

csv_path = Path('src/Roland J-6 Preset Sounds Ver1.0 (RAW).xlsx - Sheet1.csv')
js_path = Path('src/presets-data.js')

with csv_path.open(newline='', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile)
    rows = list(reader)

# Header is on row index 5
header = rows[5]
if 'Preset' not in header:
    raise ValueError('CSV header row not found')

# Normalize headers to safe JSON keys and preserve duplicates.
def sanitize_header(name: str) -> str:
    value = name.strip()
    if not value:
        return 'blank'
    value = value.replace('/', '_').replace('%', 'pct').replace('+', 'plus')
    value = re.sub(r'[^0-9A-Za-z_]+', '_', value)
    value = re.sub(r'_+', '_', value)
    value = value.strip('_').lower()
    return value or 'blank'

keys = []
seen = {}
for column in header:
    key = sanitize_header(column)
    count = seen.get(key, 0)
    unique_key = key if count == 0 else f'{key}_{count + 1}'
    seen[key] = count + 1
    keys.append(unique_key)

items = []
for row in rows[6:]:
    if len(row) <= 24:
        continue
    notes = row[24].strip()
    if not notes:
        continue

    record = {}
    for idx, key in enumerate(keys):
        record[key] = row[idx].strip() if idx < len(row) else ''

    record['bankPatch'] = record.get('preset', record.get('preset_2', '')).replace(' - ', '-').replace(' -', '-').replace('- ', '-')
    record['soundNameCategory'] = notes.split(':')[0].strip()
    record['notesDescription'] = notes
    record['waveformOscType'] = ' + '.join(
        part for part in [
            record.get('saw'),
            record.get('sub'),
            record.get('pwm'),
            record.get('pulse'),
            record.get('lfo')
        ]
        if part and part.lower() != 'x'
    ) or 'Unknown'
    record['filterFreq'] = record.get('freq', '')
    record['resonance'] = record.get('res', '')
    record['envMod'] = record.get('env', '')
    record['attack'] = record.get('a', '')
    record['decay'] = record.get('d', '')
    record['sustain'] = record.get('s_control_range', '')
    record['release'] = record.get('r', '')
    record['chorus'] = record.get('blank_3', '')
    record['delayReverb'] = record.get('delay', '')

    items.append(record)

js_content = 'export const presetsData = ' + json.dumps(items, indent=2) + ';
'
js_path.write_text(js_content, encoding='utf-8')
print(f'Wrote {len(items)} presets to {js_path}')
