import type { Preview } from '@storybook/react';

import { Theme } from '../../src/app/providers/ThemeProvider';
import { StyleDecorator, ThemeDecorator } from '../../src/shared/config/storybook';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    }
};

export const decorators = [StyleDecorator, ThemeDecorator(Theme.LIGHT)];

export default preview;
