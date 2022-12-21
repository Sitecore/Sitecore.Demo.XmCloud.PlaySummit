import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const TYPES = ['session', 'speaker', 'vendor', 'sponsor', 'article'];
const type = process.argv[2];

if (!TYPES.includes(type)) {
  console.error('invalid crawler code type');
  process.exit(1);
} else {
  fs.readFile(`${path.dirname(fileURLToPath(import.meta.url))}/${type}.mjs`)
    .then((content) =>
      content
        .toString('utf8')
        .replace(/(\r\n|\r|\n)/g, ' ')
        .replaceAll('\\', '\\\\')
        .replaceAll('"', '\\"')
        .replace('export { extract };', '')
    )
    .then(console.log)
    .then(() => {
      process.exit(0);
    });
}
