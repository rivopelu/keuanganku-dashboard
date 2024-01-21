import { useAppDispatch } from "../redux/store.ts";
import { useEffect, useState } from "react";
import {
  IBreadcrumbData,
  ISubheaderData,
} from "../model/feature/ISubheaderData.ts";
import { UiActions } from "../redux/actions/UiActions.ts";

export const useBreadcrumb = () => {
  const [listBread, setListBread] = useState<IBreadcrumbData[] | undefined>(
    undefined,
  );
  const dispatch = useAppDispatch();
  const layoutActions = new UiActions();
  const dataSubHeader: ISubheaderData = {
    breadcrumb: listBread,
  };
  useEffect(() => {
    if (dataSubHeader) {
      dispatch(layoutActions.setBreadCrumb(dataSubHeader));
    }
  }, [listBread]);

  const setData = (data: IBreadcrumbData[]) => {
    if (data) {
      setListBread(data);
    } else {
      setListBread(undefined);
    }
  };
  return {
    setData,
  };
};
