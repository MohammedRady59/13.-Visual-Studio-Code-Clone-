import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../Interface";
import { preventDuplicate, randomId, remove } from "../../utils/function";

export interface ICliked {
  filename: string;
  filecontent: string | undefined;
}
export interface IProps {
  active: string | null;
  tapOpen: IFile[];
  clicked: ICliked;
}
const initialState: IProps = {
  active: null,
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
    setClickedFile: (state, action: PayloadAction<ICliked>) => {
      state.clicked.filename = action.payload.filename;
      state.clicked.filecontent = action.payload.filecontent;
    },
    activeTap: (state, action: PayloadAction<string>) => {
      state.active = action.payload;
    },
    closeTap: (state, action: PayloadAction<IFile>) => {
      state.tapOpen = remove(state.tapOpen, action.payload);
      state.active = randomId(state.tapOpen);
      if (state.tapOpen.length > 0) {
        state.clicked = {
          filename: state.tapOpen[0].name,
          filecontent: state.tapOpen[0].content,
        };
      } else {
        state.clicked = {
          filename: "",
          filecontent: "",
        };
      }
    },
    closeAll: (state) => {
      state.tapOpen = [];
      state.active = null;
      state.clicked = {
        filename: "",
        filecontent: "",
      };
    },
  },
});
export const { setOpenFiles, setClickedFile, activeTap, closeTap, closeAll } =
  FiletreeSlice.actions;
export default FiletreeSlice.reducer;
