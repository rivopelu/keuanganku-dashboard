import { PageTypeEnum } from "../enums/PageTypeEnums.ts";
import { StyleVariable } from "../constants/StyleVariable.ts";
import { BreadcrumbComponents } from "./BreadcrumbComponents.tsx";

export function TopBar(props: IProps) {
  return (
    <>
      <div
        className={"w-full fixed flex  duration-200  top-0 left-0 z-[600]"}
        style={{
          height: StyleVariable.sizing.topBarHeight,
        }}
      >
        {props.type === PageTypeEnum.PRIMARY && (
          <div style={{ minWidth: StyleVariable.sizing.sidebarWidth }}></div>
        )}
        <div className={"w-full  bg-white flex duration-200   flex-col"}>
          <div className={"w-full border-b h-full "}>
            <div className={"px-16 flex items-center justify-between h-full"}>
              <div
                className={"h-full w-full  flex  justify-center items-center"}
              >
                <div
                  className={"w-full h-full  flex justify-between items-center"}
                >
                  <div
                    className={
                      "text-xl duration-200 font-semibold uppercase  text-system-body"
                    }
                  >
                    <BreadcrumbComponents />
                  </div>
                  <div>
                    <div className={"flex items-center gap-2"}>
                      ADMIN GANTENG
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface IProps {
  type: PageTypeEnum;
}
