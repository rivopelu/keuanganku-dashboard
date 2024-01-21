import { Home, SvgIconComponent } from "@mui/icons-material";
import { ROUTES } from "./routes.ts";

export const navbarDataMenu: INavbarData[] = [
  {
    title: "home",
    icons: Home,
    path: ROUTES.ROOT,
  },
];

export interface INavbarData {
  title: string;
  icons: SvgIconComponent;
  path: string;
  children?: IChildrenNavbarData[];
}

interface IChildrenNavbarData {
  title: string;
  path: string;
}