import { configureStore } from '@reduxjs/toolkit';
import makenote from './modules/makeSlice';
import theme from './modules/themeProvider';

export const store = configureStore({
    reducer: {
        makenote,
        theme,
    },
});
