// Write variables to get the value of the attributes of the specified link :

// href
// hreflang
// rel
// target
// type

const link = document.querySelector("#dI");
const href = link.getAttribute("href");
console.log(href);
const hreflang = link.getAttribute("hreflang");
console.log(hreflang);
const rel = link.getAttribute("rel");
console.log(rel);
const target = link.getAttribute("target");
console.log(target);
const type = link.getAttribute("type");
console.log(type);
