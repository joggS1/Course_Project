import '@/app/styles/index.scss';
import type { StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (story: () => StoryObj) => <BrowserRouter>{story()}</BrowserRouter>;
