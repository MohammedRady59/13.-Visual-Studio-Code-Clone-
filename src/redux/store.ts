import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import FileTreeSlice from "./feature/FileTreeSlice";

const store = configureStore({
  reducer: {
    treeFile: FileTreeSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
