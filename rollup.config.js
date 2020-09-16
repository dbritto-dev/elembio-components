import external from "rollup-plugin-peer-deps-external";
import compiler from "@ampproject/rollup-plugin-closure-compiler";
import resolve from "@rollup/plugin-node-resolve";
import cjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

const modules = [
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
      format: "esm",
      sourcemap: true,
    },
    plugins: [external(), compiler(), terser(), typescript()],
  },
];

const web = [
  {
    input: "src/index.ts",
    output: {
      file: "dist/elembio-components.development.js",
      format: "esm",
      sourcemap: true,
    },
    plugins: [external(), compiler(), typescript()],
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/elembio-components.production.js",
      format: "esm",
      sourcemap: true,
    },
    plugins: [
      external(),
      compiler(),
      terser({ ecma: 8, safari10: true }),
      typescript(),
    ],
  },
];

const globals = [
  {
    input: "src/index.ts",
    output: {
      name: "ElembioComponents",
      file: "dist/umd/elembio-components.development.js",
      format: "umd",
      sourcemap: true,
      globals: {
        react: "React",
        "@material-ui/core": "MaterialUI",
        "@material-ui/icons": "MaterialUI",
      },
    },
    plugins: [external(), resolve(), cjs(), compiler(), typescript()],
  },
  {
    input: "src/index.ts",
    output: {
      name: "ElembioComponents",
      file: "dist/umd/elembio-components.production.js",
      format: "umd",
      sourcemap: true,
      globals: {
        react: "React",
        "@material-ui/core": "MaterialUI",
        "@material-ui/icons": "MaterialUI",
      },
    },
    plugins: [external(), resolve(), cjs(), compiler(), terser(), typescript()],
  },
];

export default () => [...modules, ...web, ...globals];
