const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find built CSS and JS
const cssFile = glob.sync('dist/assets/*.css')[0].replace('dist/', '');
const jsFile = glob.sync('dist/assets/*.js')[0].replace('dist/', '');

// List your static HTML files
const staticPages = [
  'dist/404.html',
  'dist/about.html',
  'dist/login.html',
  'dist/morse.html'
];

staticPages.forEach(page => {
  let html = fs.readFileSync(page, 'utf8');
  // Inject CSS
  html = html.replace(
    '</head>',
    `<link rel="stylesheet" href="/${cssFile}">\n</head>`
  );
  // Inject JS
  html = html.replace(
    '</body>',
    `<script type="module" src="/${jsFile}"></script>\n</body>`
  );
  fs.writeFileSync(page, html, 'utf8');
  console.log(`Injected assets into ${page}`);
});