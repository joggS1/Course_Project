import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Outlined: Story = {
    args: {
        theme: 'clear',
        children: 'Button'
    }
};
export const OutlinedDark: Story = {
    args: {
        theme: 'clear',
        children: 'Button'
    }
};
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Primary: Story = {
    args: {
        theme: 'primary',
        children: 'Button'
    }
};
export const PrimaryDark: Story = {
    args: {
        theme: 'primary',
        children: 'Button'
    }
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
