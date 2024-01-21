import { PageContainerDashboard } from "../components/PageContainerDashboard.tsx";
import { useTranslation } from "react-i18next";
import { useBreadcrumb } from "../hooks/useBreadcrumb.ts";
import { useEffect } from "react";
import { ROUTES } from "../constants/routes.ts";

export function CategoriesPage() {
  const { t } = useTranslation();
  const breadcrumb = useBreadcrumb();

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
        <h1>CATEGORIES</h1>
      </div>
    </PageContainerDashboard>
  );
}
