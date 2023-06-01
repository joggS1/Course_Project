import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseTheme {
    toggleTheme: () => void;
    theme: Theme;
}

export const useTheme = (): UseTheme => {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        const pickedTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(pickedTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, pickedTheme);
    };
    return { theme, toggleTheme };
};
