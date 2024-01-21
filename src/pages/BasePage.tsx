import { PageTypeEnum } from "../enums/PageTypeEnums.ts";
import { Sidebar } from "../components/Sidebar.tsx";
import { TopBar } from "../components/TopBar.tsx";

export function BasePage(props: IProps) {
  if (props.type === PageTypeEnum.FULL_PAGE) {
    return <>{props.children}</>;
  } else {
    return (
      <div className={"flex"}>
        <div className={"flex w-full min-h-screen pb-14 relative"}>
          <TopBar type={props.type} />
          <Sidebar type={props.type} />
          <div className={"w-full"}>{props.children}</div>
        </div>
      </div>
    );
  }
}

interface IProps {
  children: any;
  type: PageTypeEnum;
}
