import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import url from "@rollup/plugin-url";
const cssUrl = require("postcss-url")

export default  [{
  input: 'src/index.js',
  output: [
    {
      file: './dist/easy-drawing-board.umd.js',
      format: 'umd',
      name: 'EasyDrawingBoard'
    }
  ],
  plugins: [
    terser(),
    postcss({
      modules: false,
      plugins: [cssUrl({url: 'inline'})]
    }),
    url(),
    resolve(),
    babel({ babelHelpers: 'bundled' })
  ]
}, {
  input: 'src/index.js',
  output: [
    {
      file: './dist/easy-drawing-board.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    terser(),
    postcss({
      modules: false,
      plugins: [cssUrl({url: 'inline'})]
    }),
    url(),
    resolve(),
    babel({ babelHelpers: 'bundled' })
  ]
}, {
  input: 'src/index.js',
  output: [
    {
      file: './dist/easy-drawing-board.iife.js',
      format: 'iife'
    }
  ],
  plugins: [
    terser(),
    postcss({
      modules: false,
      plugins: [cssUrl({url: 'inline'})]
    }),
    url(),
    resolve(),
    babel({ babelHelpers: 'bundled' })
  ]
}]
