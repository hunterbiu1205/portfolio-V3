// GitHub Pages has no SPA rewrites. After the build, give each client-side
// route its own copy of index.html (served with 200, with its own canonical URL
// and title), and use index.html as 404.html so unknown URLs still load the app
// and render the NotFound page.
const fs = require('fs');
const path = require('path');

const SITE = 'https://www.hunterdong.com';
const build = path.join(__dirname, '..', 'build');
const html = fs.readFileSync(path.join(build, 'index.html'), 'utf8');

const routes = [{ path: 'archive', title: 'All Projects | Hunter Dong' }];

for (const route of routes) {
  const url = `${SITE}/${route.path}/`;
  const page = html
    .replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${route.title}"`);

  fs.mkdirSync(path.join(build, route.path), { recursive: true });
  fs.writeFileSync(path.join(build, route.path, 'index.html'), page);
}

// A 404 page must not claim to be the home page.
fs.writeFileSync(
  path.join(build, '404.html'),
  html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, '')
);
