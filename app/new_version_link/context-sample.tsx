'use client';
import { createContext, useState, useContext, useEffect } from 'react';
import React from 'react';

interface darkModeType {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const DarkModeContext = createContext({} as darkModeType);

export default function DarkMode({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(false);
    function toggleDarkMode() {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        const body = document.body;
        if (darkMode) {
            body.setAttribute('theme-mode', 'dark');
        } else {
            body.removeAttribute('theme-mode');
        }
    }, [darkMode]);
    return (
        <DarkModeContext.Provider
            value={{ darkMode: darkMode, toggleDarkMode: toggleDarkMode }}
        >
            {children}
        </DarkModeContext.Provider>
    );
}

export function useDarkMode() {
    return useContext(DarkModeContext);
}
