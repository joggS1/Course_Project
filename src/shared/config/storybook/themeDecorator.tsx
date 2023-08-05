import type { StoryFn, StoryObj } from "@storybook/react";

import type { Theme } from "@/app/providers/ThemeProvider";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

export const StyleDecorator = (story: () => StoryObj) => story()

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
        <ThemeProvider>
    <div className={`app ${theme}`}>
        <StoryComponent/>
    </div>
        </ThemeProvider>
)