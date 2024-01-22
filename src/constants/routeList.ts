import { PageTypeEnum } from "../enums/PageTypeEnums.ts";
import { LoginPage } from "../pages/LoginPage.tsx";
import { ROUTES } from "./routes.ts";
import { HomePage } from "../pages/HomePage.tsx";
import { CategoriesPage } from "../pages/Categories/CategoriesPage.tsx";

export interface IRoutesList {
  path: string;
  element: () => JSX.Element;
  type: PageTypeEnum;
}

export const RouteList: IRoutesList[] = [
  {
    element: LoginPage,
    path: ROUTES.AUTH.LOGIN(),
    type: PageTypeEnum.FULL_PAGE,
  },
  {
    element: HomePage,
    path: ROUTES.ROOT,
    type: PageTypeEnum.PRIMARY,
  },
  {
    element: CategoriesPage,
    path: ROUTES.CATEGORIES.PAGE(),
    type: PageTypeEnum.PRIMARY,
  },
];
