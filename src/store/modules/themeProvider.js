import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isDarkMode : false,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme : (state, action) => {
            state.isDarkMode = !state.isDarkMode
            console.log(state.isDarkMode)
        }
    },
});


export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;