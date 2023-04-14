import appSlice from "./appSlice";
import cacheSearchSlice from "./cacheSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    app: appSlice,
    cacheSearchQuery: cacheSearchSlice,
  },
});

export default store;
