import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook';

import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '/'
    },
    argTypes: {}
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        type: 'primary',
        children: 'text'
    }
};

export const Secondary: Story = {
    args: {
        type: 'secondary',
        children: 'text'
    }
};
export const PrimaryDark: Story = {
    args: {
        type: 'primary',
        children: 'text'
    }
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark: Story = {
    args: {
        type: 'secondary',
        children: 'text'
    }
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]


