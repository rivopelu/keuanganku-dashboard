import BaseActions from "../BaseActions.ts";
import { ISubheaderData } from "../../model/feature/ISubheaderData.ts";
import { Dispatch } from "redux";
import { UiSlice } from "../reducers/UiSlice.ts";

export class UiActions extends BaseActions {
  public setBreadCrumb(data?: ISubheaderData) {
    return (dispatch: Dispatch) => {
      dispatch(
        UiSlice.actions.breadcrumb({
          title: data?.title,
          breadcrumb: data?.breadcrumb,
        }),
      );
    };
  }
}
