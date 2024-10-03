import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  html: {
    title: "DistroWiz",
    favicon: "./public/favicon/tux.png"
  },
  plugins: [pluginReact()],
});
