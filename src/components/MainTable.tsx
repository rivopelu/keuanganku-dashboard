import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ITableColumnData } from "../model/res/ITable.ts";
import { Each } from "./Each.tsx";
import { Fragment, ReactNode } from "react";
import { StyleVariable } from "../constants/StyleVariable.ts";
import { Paginated } from "./Paginated.tsx";
import { IPaginatedParams } from "../model/feature/IUtilsModel.ts";
import { MainCard } from "./MainCard.tsx";

export function MainTable(props: IProps) {
  return (
    <MainCard className={"p-8"}>
      {props.topContent && (
        <div className={"w-full mb-5"}>{props.topContent}</div>
      )}

      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <Each
                of={props.columns}
                render={(item: ITableColumnData) => (
                  <TableCell align="left">
                    {item.headerTitle?.toUpperCase()}
                  </TableCell>
                )}
              />
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data &&
              props.data.map((item, i) => (
                <TableRow
                  key={i}
                  sx={{
                    background:
                      i % 2 === 0 && !props.disableMultiColor
                        ? StyleVariable.colors.primary["5"]
                        : "white",
                  }}
                >
                  {props.columns.map((c, id) => (
                    <TableCell key={id} component="th" scope="row">
                      {props.columns.map((e, index) => {
                        if (e.key === c.key) {
                          return (
                            <Fragment key={index}>
                              {item[e.value ?? ""]}
                              {e.layouts && e.layouts(item, i)}
                            </Fragment>
                          );
                        }
                      })}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {props.paginatedData && (
          <div className={"my-3"}>
            <Paginated dataPaginated={props.paginatedData} />
          </div>
        )}
      </TableContainer>
    </MainCard>
  );
}

interface IProps {
  data: any[];
  paginatedData?: IPaginatedParams;
  columns: ITableColumnData[];
  disableMultiColor?: boolean;
  topContent?: ReactNode;
}
