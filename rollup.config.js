export default {
	input: ["a.js", "b.js"],
  output: {
    format: "cjs",
    dir: "dist"
  },
	plugins: [],
  experimentalDynamicImport: true,
  experimentalCodeSplitting: true
};
