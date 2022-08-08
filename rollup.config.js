import inject from "@rollup/plugin-inject";
module.exports = {
  input: {
    "a": "src/a.js",
  },
  output: {
    dir: "dist",
  },
  plugins: [
    inject({
      process: require.resolve("./shim/process")
    })
  ]
};
