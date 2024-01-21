import { useAppSelector } from "../redux/store.ts";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { IBreadcrumbData } from "../model/feature/ISubheaderData.ts";
import { Breadcrumbs } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const BreadcrumbComponents = () => {
  const [listBreadcrumb, setListBreadcrumb] = useState<IBreadcrumbData[]>([]);

  const Ui = useAppSelector((state) => state.Ui);
  const { t } = useTranslation();

  useEffect(() => {
    if (Ui?.subheader?.breadcrumb?.length) {
      setListBreadcrumb(Ui?.subheader?.breadcrumb);
    }
  }, [Ui?.subheader]);

  return (
    <div>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNext fontSize="inherit" />}
      >
        {listBreadcrumb.map((item, i) => {
          if (i !== listBreadcrumb.length - 1) {
            return (
              <div key={item.title} className={"text-slate-600"}>
                <Link
                  className={"hover:border-b border-gray-400"}
                  to={item.path ?? "#"}
                >
                  {t(item.title)}
                </Link>
              </div>
            );
          } else {
            return (
              <div key={item.title} className={"text-primary-main font-bold"}>
                {t(item.title)}
              </div>
            );
          }
        })}
      </Breadcrumbs>
    </div>
  );
};
