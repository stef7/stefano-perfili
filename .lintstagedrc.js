/** @type {import("lint-staged").Config} */
module.exports = {
  "*.ts?(x)": [() => "tsc"],
  "*.([tj]s?(x)|[cm][tj]s)": ["rome format --write", "rome check --apply"],
};
