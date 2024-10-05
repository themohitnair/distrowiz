import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: "DistroWiz",
    favicon: "./public/favicon/tux.png"
  },
  output: {
    distPath: {
      root: 'dist',
    },
  },
  dev: {
    assetPrefix: '.',
  },
  tools: {
    rspack: {
      output: {
        publicPath: './',
      },
    },
  },
});