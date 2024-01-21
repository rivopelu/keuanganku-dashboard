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
import { InputSearch } from "../components/InputSearch.tsx";
import { Btn } from "../components/Btn.tsx";

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

  function topContent() {
    return (
      <div className={"w-full flex items-center justify-between"}>
        <InputSearch />
      </div>
    );
  }

  return (
    <PageContainerDashboard>
      <div className={"grid gap-6"}>
        <div className={"flex items-center justify-between py-3"}>
          <h1 className={"font-semibold text-2xl"}>
            {t("categories").toUpperCase()}
          </h1>
          <Btn>Add Category</Btn>
        </div>
        <MainTable
          topContent={topContent()}
          paginatedData={{ page: 0, total_data: 122, size: 20 }}
          columns={columns}
          data={dataList}
        />
      </div>
    </PageContainerDashboard>
  );
}
