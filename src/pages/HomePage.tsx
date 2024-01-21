import { MainCard } from "../components/MainCard.tsx";
import { PageContainerDashboard } from "../components/PageContainerDashboard.tsx";
import { useBreadcrumb } from "../hooks/useBreadcrumb.ts";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function HomePage() {
  const { t } = useTranslation();
  const breadcrumb = useBreadcrumb();

  useEffect(() => {
    breadcrumb.setData([
      {
        title: t("home"),
      },
    ]);
  }, []);
  return (
    <PageContainerDashboard>
      <div className={"grid grid-cols-2 gap-4"}>
        <MainCard>
          <h1>HOME</h1>
        </MainCard>
        <MainCard>
          <h1>HOME</h1>
        </MainCard>
      </div>
    </PageContainerDashboard>
  );
}
