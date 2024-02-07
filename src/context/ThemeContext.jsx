import React from 'react';
export const ThemeContext = React.createContext();

const getInitialTheme = () => {
    return 'dark';
    };

    export const ThemeProvider = ({ initialTheme, children }) => {
    const [theme, setTheme] = React.useState(getInitialTheme);

    const checkTheme = (existing) => {
        const root = window.document.documentElement;
        const isDark = existing === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(existing);

        localStorage.setItem('current-theme', existing);
    };

    if (initialTheme) {
        checkTheme(initialTheme);
    }

    React.useEffect(() => {
        checkTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
