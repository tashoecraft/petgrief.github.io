// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-js": () => import("./../../../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-guidelines-js": () => import("./../../../src/pages/guidelines.js" /* webpackChunkName: "component---src-pages-guidelines-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-links-js": () => import("./../../../src/pages/links.js" /* webpackChunkName: "component---src-pages-links-js" */),
  "component---src-pages-memorial-js": () => import("./../../../src/pages/memorial.js" /* webpackChunkName: "component---src-pages-memorial-js" */),
  "component---src-pages-register-js": () => import("./../../../src/pages/register.js" /* webpackChunkName: "component---src-pages-register-js" */)
}

