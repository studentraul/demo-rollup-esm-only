import babel from "rollup-plugin-babel";
import ts from "rollup-plugin-typescript2";

export default {
  input: "./src/index.ts",
  output: {
    format: "esm",
    dir: "dist",
  },
  plugins: [babel(), ts()],
  preserveModules: true,
};
