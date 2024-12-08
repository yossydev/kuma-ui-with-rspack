import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
const KumaUIWebpackPlugin = require("@kuma-ui/webpack-plugin").default;


export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: {
      plugins: [new KumaUIWebpackPlugin()]
    }
  }
});
