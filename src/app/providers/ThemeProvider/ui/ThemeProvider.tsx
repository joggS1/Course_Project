import type { FC, ReactNode } from 'react';
import { useMemo, useState } from 'react';

import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext
} from '../lib/ThemeContext';

const defaulThemeValue: Theme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaulThemeValue);
    const defaultProviderValue = useMemo(
        () => ({
            theme,
            setTheme
        }),
        [theme]
    );
    return (
        <ThemeContext.Provider value={defaultProviderValue}>
            {children}
        </ThemeContext.Provider>
    );
};
