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
    openSidebar: (state, action) => {
      state.isMenuOpened = true;
    },
  },
});

export const { toggleMenu, closeSidebar, openSidebar } = appSlice.actions;

export default appSlice.reducer;
