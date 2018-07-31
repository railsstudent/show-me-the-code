const fs = require("fs-extra");
const concat = require("concat");

const folder = "show-me-the-code";
(async function build() {
  const files = [
    `./dist/${folder}/runtime.js`,
    `./dist/${folder}/polyfills.js`,
    `./dist/${folder}/main.js`
  ];
  await fs.ensureDir("elements");
  await fs.emptyDir("elements");
  await concat(files, "elements/custom-counter.js");
  await fs.copy(`./dist/${folder}/favicon.ico`, "elements/favicon.ico");
  await fs.copyFile("./src/demo.html", "elements/index.html");
})();