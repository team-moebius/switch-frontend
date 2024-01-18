import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeContextProvider } from '../src/context/theme';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { QueryClientProvider, QueryCache, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

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
      return (
        <QueryClientProvider client={queryClient}>
          <ThemeContextProvider>
            <style>
              {`html, body, #storybook-root {
              height: 100%;`}
            </style>
            <Story {...context} />
            {/* <ReactQueryDevtools /> */}
          </ThemeContextProvider>
        </QueryClientProvider>
      );
    },
  ],
};

export default preview;
