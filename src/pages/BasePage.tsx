import { PageTypeEnum } from "../enums/PageTypeEnums.ts";

export function BasePage(props: IProps) {
  if (props.type === PageTypeEnum.FULL_PAGE) {
    return <>{props.children}</>;
  } else {
    return (
      <div className={"flex"}>
        <div className={"flex w-full min-h-screen pb-14 relative"}>
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