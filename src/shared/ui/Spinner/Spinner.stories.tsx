import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook';

import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
    title: 'shared/Spinner',
    component: Spinner,
    tags: ['autodocs'],

    argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Ligth: Story = {};

export const Dark: Story = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
