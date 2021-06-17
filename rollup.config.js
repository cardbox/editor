import path from 'path'

import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'

import pkg from './package.json'
import { minifyConfig } from './build/minification.js'

const extensions = ['.ts', '.tsx', '.js']

const resolverPlugin = resolve({ extensions })

const babelPlugin = babel({
  babelHelpers: 'bundled',
  sourceMaps: true,
  extensions,
  exclude: /node_modules.*/,
})

const createTerser = ({ inline }) =>
  terser(
    minifyConfig({
      beautify: Boolean(process.env.BUILD_PRETTY),
      inline,
    })
  )

const postcssPlugin = postcss({
  extract: path.resolve('dist/editor.css'),
  minimize: true,
})

const input = 'src/editor/index.ts'
const external = [
  ...Object.keys(pkg.devDependencies),
  ...Object.keys(pkg.dependencies),
  ...Object.keys(pkg.peerDependencies),
]

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input,
    external: [
      'react',
      'react-dom',
      '@tippyjs/react',
      'tippy.js',
    ],
    output: {
      name: 'editor',
      file: pkg.unpkg,
      format: 'umd',
      globals: {
        'react': 'react',
        'react-dom': 'react-dom',
        '@tippyjs/react': '@tippyjs/react',
        'tippy.js': 'tippy.js',
      },
    },
    plugins: [
      postcssPlugin,
      babelPlugin,
      resolverPlugin,
      commonjs(),
      createTerser({ inline: false }),
    ],
  },
  {
    input,
    external,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'es',
      },
    ],
    plugins: [
      postcssPlugin,
      babelPlugin,
      resolverPlugin,
      commonjs(),
      createTerser({ inline: true }),
    ],
  },
  {
    input,
    external,
    output: [
      {
        file: pkg.types,
        format: 'es',
      },
    ],
    plugins: [resolverPlugin, postcssPlugin, dts()],
  },
]
