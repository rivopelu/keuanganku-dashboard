import { PageContainerDashboard } from "../components/PageContainerDashboard.tsx";
import { useTranslation } from "react-i18next";
import { useBreadcrumb } from "../hooks/useBreadcrumb.ts";
import { useEffect, useState } from "react";
import { ROUTES } from "../constants/routes.ts";
import { MainTable } from "../components/MainTable.tsx";
import {
  dummyResCategoriesList,
  IResCategoriesList,
} from "../model/res/IResCategoriesList.ts";
import { ITableColumnData } from "../model/res/ITable.ts";

export function CategoriesPage() {
  const { t } = useTranslation();
  const breadcrumb = useBreadcrumb();

  const [dataList] = useState<IResCategoriesList[]>(dummyResCategoriesList);

  const columns: ITableColumnData[] = [
    {
      headerTitle: t("code"),
      layouts: (e: IResCategoriesList) => <div>{e.code}</div>,
      key: "code",
    },
    {
      headerTitle: t("name"),
      value: "name",
      key: "name",
    },
    {
      headerTitle: t("total_transaction"),
      key: "total",
      layouts: (e: IResCategoriesList) => <div>{e.total_transaction}</div>,
    },
  ];

  useEffect(() => {
    console.log(dataList);
  }, [dataList]);

  useEffect(() => {
    breadcrumb.setData([
      {
        title: t("home"),
        path: ROUTES.ROOT,
      },
      {
        title: t("categories"),
      },
    ]);
  }, []);
  return (
    <PageContainerDashboard>
      <div className={"bg-white"}>
        <MainTable
          paginatedData={{ page: 0, total_data: 122, size: 20 }}
          columns={columns}
          data={dataList}
        />
      </div>
    </PageContainerDashboard>
  );
}
