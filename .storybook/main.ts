import type { StorybookConfig } from '@storybook/react-webpack5';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { readFileSync } from 'fs';
import { loadCsf } from '@storybook/csf-tools';
const STORY_ROOT = 'src/stories/';
const config: StorybookConfig = {
  //@ts-ignore
  storyIndexers: (indexers) => {
    const indexer = async (fileName, compilationOptions) => {
      const parseFilePath = (path: string) => {
        const relativePath = path.split(STORY_ROOT)[1];
        const paths = relativePath.split('/') || [];
        paths.pop();

        return paths;
      };
      const code = readFileSync(fileName, { encoding: 'utf-8' });

      const makeTitle = (title) => {
        const dirs = parseFilePath(fileName);
        const dir = dirs.reduce((prev, cur) => {
          return `${cur}/${prev}`;
        });

        if (dir) {
          return `${dir}/${title}`;
        } else {
          return title;
        }
      };

      return loadCsf(code, {
        ...compilationOptions,
        makeTitle,
        fileName,
      }).parse();
    };

    return [
      {
        test: /\.(md|html|ts|js|jsx|tsx)$/,
        indexer,
      },
      ...(indexers || []),
    ];
  },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-react-native-web',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config?.resolve,
        plugins: [
          ...(config?.resolve?.plugins || []),
          new TsconfigPathsPlugin({}),
        ],
      },
    };
  },
};
export default config;
