import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeContextProvider } from '../src/context/theme';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

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
        <ThemeContextProvider>
          <style>
            {`html, body, #storybook-root {
              height: 100%;`}
          </style>
          <Story {...context} />
        </ThemeContextProvider>
      );
    },
  ],
};

export default preview;
