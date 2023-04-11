const { createSlice } = require("@reduxjs/toolkit");

const appSlice = createSlice({
    name: "sidebarSlice",
    initialState: {
        isMenuOpened: true,
    },
    reducers: {
        toggleMenu: (state, action) => {
            state.isMenuOpened = !state.isMenuOpened;
        },
        closeSidebar: (state, action) => {
            state.isMenuOpened = false;
        },
    },
});

export const { toggleMenu, closeSidebar } = appSlice.actions;

export default appSlice.reducer;
