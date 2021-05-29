/* eslint-disable import/no-anonymous-default-export */
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
})
