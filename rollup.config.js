import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

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
      'styled-components',
    ],
    output: {
      name: 'editor',
      file: pkg.unpkg,
      format: 'umd',
      globals: {
        'react': 'React',
        'react-is': 'ReactIs',
        'react-dom': 'ReactDOM',
        '@tippyjs/react': 'Tippy',
        '@popperjs/core': 'Popper',
        'tippy.js': 'tippy',
        'styled-components': 'styled',
      },
    },
    plugins: [
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
    plugins: [resolverPlugin, dts()],
  },
]
