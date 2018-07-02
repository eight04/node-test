import {plugin as analyzer} from "rollup-plugin-analyzer";

export default {
	input: ["entry.js", "entry2.js"],
  output: {
    format: "es",
    dir: "dist"
  },
  plugins: [analyzer()],
  experimentalCodeSplitting: true
};
