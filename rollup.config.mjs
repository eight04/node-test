import resolve from "@rollup/plugin-node-resolve";
import cjs from "rollup-plugin-cjs-es";
export default {
  input: ["src/a.mjs"],
  output: {
    dir: "dist",
    entryFileNames: "[name].mjs",
  },
  plugins: [
    resolve(),
    cjs({nested: true})
  ]
};
