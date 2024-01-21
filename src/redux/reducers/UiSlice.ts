import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISubheaderData } from "../../model/feature/ISubheaderData.ts";

const initState: IUiSlice = {};

export const UiSlice = createSlice({
  name: "ui",
  initialState: initState,
  reducers: {
    breadcrumb: (
      state: IUiSlice,
      action: PayloadAction<ISubheaderData | undefined>,
    ) => {
      state.subheader = {
        breadcrumb: action.payload?.breadcrumb,
        title: action.payload?.title,
      };
    },
  },
});

export interface IUiSlice {
  subheader?: ISubheaderData;
}
