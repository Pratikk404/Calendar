import type { StorybookConfig } from '@storybook/react';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/react',
    options: {
      builder: '@storybook/builder-vite',
    },
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
