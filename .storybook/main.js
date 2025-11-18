

import { fileURLToPath, URL } from 'node:url';

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  },
  "core": {
    "disableTelemetry": true
  },
  async viteFinal(config) {
    // Remove vueDevTools and vite-plugin-inspect
    if (config.plugins) {
      config.plugins = config.plugins.filter(plugin => {
        if (!plugin) return false;
        const name = typeof plugin === 'object' && plugin.name ? plugin.name : '';
        return !name.includes('vite-plugin-vue-devtools') &&
          !name.includes('vite-plugin-inspect') &&
          !name.includes('inspect');
      });
    }

    // Add custom alias
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': fileURLToPath(new URL('../src', import.meta.url))
    };

    return config;
  }
};

export default config;
