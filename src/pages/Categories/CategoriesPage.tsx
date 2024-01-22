import { PageContainerDashboard } from "../../components/PageContainerDashboard.tsx";
import { useTranslation } from "react-i18next";
import { useBreadcrumb } from "../../hooks/useBreadcrumb.ts";
import { useEffect, useState } from "react";
import { ROUTES } from "../../constants/routes.ts";
import { MainTable } from "../../components/MainTable.tsx";
import {
  dummyResCategoriesList,
  IResCategoriesList,
} from "../../model/res/IResCategoriesList.ts";
import { ITableColumnData } from "../../model/res/ITable.ts";
import { InputSearch } from "../../components/InputSearch.tsx";
import { Btn } from "../../components/Btn.tsx";
import { Add } from "@mui/icons-material";
import { PopupModal } from "../../components/PopupModal.tsx";
import { InputText } from "../../components/InputText.tsx";
import { InputTextarea } from "../../components/InputTextarea.tsx";
import { IReqCreateCategory } from "../../model/req/IReqCreateCategory.ts";
import { useFormik } from "formik";
import * as yup from "yup";

export function CategoriesPage() {
  const { t } = useTranslation();
  const breadcrumb = useBreadcrumb();

  const [dataList] = useState<IResCategoriesList[]>(dummyResCategoriesList);
  const [showModalNew, setShowModalNew] = useState<boolean>(true);

  const initStateCreate: IReqCreateCategory = {
    name: "",
    description: "",
  };

  const validationScheme = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: initStateCreate,
    validationSchema: validationScheme,
    onSubmit: (e) => {
      console.log(e);
    },
  });

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

  function onClosePopupNew() {
    setShowModalNew(false);
    setTimeout(() => {
      formik.setFieldTouched("name", false);
      formik.setFieldError("name", undefined);
      formik.setFieldTouched("description", false);
      formik.setFieldError("description", undefined);
    }, 500);
  }
  function topContent() {
    return (
      <div className={"w-full flex items-center justify-between"}>
        <InputSearch />
      </div>
    );
  }

  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]);

  function modalComponent() {
    return (
      <div>
        <h1
          className={
            "flex text-2xl font-semibold uppercase mb-7 text-center w-full justify-center"
          }
        >
          {t("add_new_category")}
        </h1>
        <div className={"grid gap-4"}>
          <InputText
            label={t("category_name")}
            required={true}
            placeholder={t("insert_category_name")}
            name={"name"}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            errorMessage={formik.touched.name && formik.errors.name}
          />
          <InputTextarea
            name={"description"}
            label={t("description")}
            required={true}
            placeholder={t("insert_category_description")}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.description}
            errorMessage={
              formik.touched.description && formik.errors.description
            }
          />
        </div>
      </div>
    );
  }
  return (
    <PageContainerDashboard>
      <PopupModal
        isOpen={showModalNew}
        components={modalComponent()}
        onCancel={onClosePopupNew}
        onClose={onClosePopupNew}
        onSubmit={formik.handleSubmit}
      />
      <div className={"grid gap-6"}>
        <div className={"flex items-center justify-between py-3"}>
          <h1 className={"font-semibold text-2xl"}>
            {t("categories").toUpperCase()}
          </h1>
          <Btn
            fitWidth
            startIcon={<Add />}
            onClick={() => setShowModalNew(true)}
          >
            {t("add_category")}
          </Btn>
        </div>
        <MainTable
          paginatedData={{ page: 0, total_data: 100, size: 20 }}
          topContent={topContent()}
          columns={columns}
          data={dataList}
        />
      </div>
    </PageContainerDashboard>
  );
}
