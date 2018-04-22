export default {
	input: ["a.js", "b.js"],
  output: {
    format: "amd",
    dir: "dist"
  },
	plugins: [],
  experimentalDynamicImport: true,
  experimentalCodeSplitting: true
};
