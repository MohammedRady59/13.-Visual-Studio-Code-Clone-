import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../Interface";
import { preventDuplicate } from "../../utils/function";

export interface IProps {
  tapOpen: IFile[];
  clicked: {
    filename: string;
    filecontent: string;
  };
}
const initialState: IProps = {
  tapOpen: [],
  clicked: {
    filename: "",
    filecontent: "",
  },
};
const FiletreeSlice = createSlice({
  name: "treeFile",
  initialState,
  reducers: {
    setOpenFiles: (state, action: PayloadAction<IFile>) => {
      // state.tapOpen = [...state.tapOpen, action.payload];
      state.tapOpen = preventDuplicate(state.tapOpen, action.payload);
    },
  },
});
export const { setOpenFiles } = FiletreeSlice.actions;
export default FiletreeSlice.reducer;
