/** @format */

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import type { TPropsWithChildrenDefault } from 'shared-types';
import MuiThemeProvider from './MuiThemeProvider';

const PageProvider = ({ children }: TPropsWithChildrenDefault) => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    useEffect(() => {
        setMounted(true);
        if (resolvedTheme !== 'light' && resolvedTheme !== 'dark') {
            setTheme('light');
        }
    }, [resolvedTheme, setTheme]);
    if (!mounted) {
        return null;
    }

    return (
        <MuiThemeProvider resolvedTheme={resolvedTheme as 'light' | 'dark'}>
            {children}
        </MuiThemeProvider>
    );
};

export default PageProvider;
