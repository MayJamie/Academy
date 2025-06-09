/** @format */

declare module '@mui/material/styles' {
    interface Palette {
        white: {
            main: string;
        };
        black: {
            main: string;
        };
    }
    // allow configuration using `createTheme`
    interface PaletteOptions {
        white?: {
            main?: string;
        };
        black?: {
            main?: string;
        };
    }
}
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        white: true;
        black: true;
    }
}

export {};
