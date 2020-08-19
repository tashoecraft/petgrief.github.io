const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/melanie/Desktop/Development/petgrief.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/melanie/Desktop/Development/petgrief.github.io/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/melanie/Desktop/Development/petgrief.github.io/src/pages/index.js"))),
  "component---src-pages-links-js": hot(preferDefault(require("/Users/melanie/Desktop/Development/petgrief.github.io/src/pages/links.js"))),
  "component---src-pages-memorial-js": hot(preferDefault(require("/Users/melanie/Desktop/Development/petgrief.github.io/src/pages/memorial.js"))),
  "component---src-pages-register-js": hot(preferDefault(require("/Users/melanie/Desktop/Development/petgrief.github.io/src/pages/register.js")))
}

