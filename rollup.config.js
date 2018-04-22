import commonjs from "rollup-plugin-commonjs";
import re from "rollup-plugin-re";
export default {
	input: ["a.js", "b.js"],
  output: {
    format: "amd",
    dir: "dist"
  },
	plugins: [
    re({
      patterns: [
        {
          test: /Promise\.resolve\(require(\((["'])(?:\\\2|[^\n])*?\2\))\)/g,
          replace: "import$1"
        }
      ]
    }),
    commonjs()
  ],
  experimentalDynamicImport: true,
  experimentalCodeSplitting: true
};
