/* eslint-disable import/no-anonymous-default-export */
import { defineConfig } from 'vite'

export default defineConfig({
  base: 'editor',
  plugins: [],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
})
