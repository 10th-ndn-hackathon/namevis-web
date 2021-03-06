const { js, web, merge } = require("@yoursunny/xo-config");

module.exports = merge(js, web, {
  rules: {
    "import/no-unassigned-import": "off",
    "no-unused-vars": ["error", { varsIgnorePattern: "^el$" }],
  },
});
