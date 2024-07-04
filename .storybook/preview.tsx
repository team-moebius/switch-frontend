import React from 'react';
import { type Preview } from '@storybook/react';
import { ThemeContextProvider } from '../src/context/theme';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { QueryClientProvider, QueryClient } from 'react-query';
import { NavigationDecorator } from './NavigationDecorator';

const queryClient = new QueryClient();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
  decorators: [
    (Story, context) => {
      const fileName = context.parameters.fileName;
      const isScreen = fileName.includes('screens');

      if (isScreen) {
        return (
          <QueryClientProvider client={queryClient}>
            <ThemeContextProvider>
              <style>
                {`html, body, #storybook-root {
            height: 100%; #storybook-root > div {
                height: 100%;
              }}`}
              </style>
              <NavigationDecorator story={Story} />
            </ThemeContextProvider>
          </QueryClientProvider>
        );
      }
      return (
        <QueryClientProvider client={queryClient}>
          <ThemeContextProvider>
            <style>
              {`html, body, #storybook-root {
          height: 100%; }`}
            </style>
            <Story {...context} />
          </ThemeContextProvider>
        </QueryClientProvider>
      );
    },
  ],
};

export default preview;
