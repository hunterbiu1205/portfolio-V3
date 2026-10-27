# Portfolio Website Version 3

View at: [www.hunterdong.com](https://www.hunterdong.com)


## **Description**

Loosely designed in Figma and coded in Visual Studio Code. Built with React and SCSS, deployed with GitHub Pages.

## **Scripts**

- `npm start` - run the dev server
- `npm test` - run the tests
- `npm run deploy` - build and publish `build/` to GitHub Pages

Project content (home page cards and the archive table) lives in `src/constant/projects.js`.

## **Notes**

- [x] Scroll Restoration - Most of the time all you need is to “scroll to the top” because you have a long content page, that when navigated to, stays scrolled down. This is straightforward to handle with a <ScrollToTop> component that will scroll the window up on every navigation. Checkout at:[https://v5.reactrouter.com/web/guides/scroll-restoration]
- [x] Deep links on GitHub Pages - GitHub Pages has no SPA rewrites, so `scripts/spa-fallback.js` runs after every build: it copies `index.html` to `archive/index.html` (with its own title and canonical URL) and to `404.html`, so `/archive` loads directly and unknown URLs show the in-app 404 page. Add new routes to the `routes` list in that script.
