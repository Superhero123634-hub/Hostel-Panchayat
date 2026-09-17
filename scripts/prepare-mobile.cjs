const fs = require('node:fs');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '..');
const webRoot = path.join(projectRoot, 'www');

fs.rmSync(webRoot, { recursive: true, force: true });
fs.mkdirSync(webRoot, { recursive: true });

const sourceHtml = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf8');
const mobileHtml = sourceHtml.replace('<html lang="en">', '<html lang="en" data-platform="mobile">');
fs.writeFileSync(path.join(webRoot, 'index.html'), mobileHtml);
fs.copyFileSync(path.join(projectRoot, 'logo.png'), path.join(webRoot, 'logo.png'));

fs.cpSync(path.join(projectRoot, 'songs'), path.join(webRoot, 'songs'), { recursive: true });