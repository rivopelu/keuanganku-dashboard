import React, { useEffect, useState } from "react";
import {
  FormControl,
  MenuItem,
  Pagination,
  Select,
  Skeleton,
} from "@mui/material";
import { UtilitiesHelper } from "../helper/UtilitiesHelper.ts";
import { PaginatedSizeList } from "../constants/ConstantsData.ts";
import { IPaginatedParams } from "../model/feature/IUtilsModel.ts";

export function Paginated(props: IProps) {
  const utilsHelper = new UtilitiesHelper();

  const [page, setPage] = React.useState(props.dataPaginated.page ?? 0);
  const [size, setSize] = React.useState(props.dataPaginated.size ?? 10);
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    setTotalPage(
      utilsHelper.paginatedCalc(
        props.dataPaginated.size,
        props.dataPaginated.total_data,
      ),
    );
  }, [props.dataPaginated]);

  const handleChangePage = (_: any, num: number) => {
    setPage(num - 1);
    if (props.onChange) {
      props.onChange({
        size: size,
        page: num - 1,
        total_data: totalPage,
      });
    }
  };

  const handleChangeRowsPerPage = (event: any) => {
    setSize(parseInt(event.target.value, 10));
    setPage(0);
    if (props.onChange) {
      props.onChange({
        size: parseInt(event.target.value, 10),
        page: 0,
        total_data: totalPage,
      });
    }
  };
  if (props.isLoading) {
    return (
      <div className={"flex items-center justify-between w-full"}>
        <div className={"flex items-center gap-2"}>
          <Skeleton height={16} width={65} />
          <Skeleton height={35} width={100} />
        </div>
        <div className={"w-fit flex justify-end items-center gap-2"}>
          {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton key={i} variant={"rounded"} height={32} width={32} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className={"flex items-center justify-between"}>
        <div className={"flex items-center gap-2"}>
          <div>Show</div>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <Select
              sx={{ "& legend": { display: "none" }, "& fieldset": { top: 0 } }}
              labelId="demo-select-small"
              className={"select_pagination"}
              id="demo-select-small"
              value={size.toString()}
              label="Age"
              onChange={handleChangeRowsPerPage}
            >
              {PaginatedSizeList.map((item, i) => (
                <MenuItem key={i} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div>Total {props.dataPaginated.total_data}</div>
        </div>

        <Pagination
          count={totalPage}
          variant={"outlined"}
          color={"primary"}
          shape={"rounded"}
          showFirstButton
          defaultPage={page + 1 ?? 1}
          page={page + 1 ?? 1}
          onChange={handleChangePage}
          showLastButton
        />
      </div>
    );
  }
}

interface IProps {
  onChange?: (data: IPaginatedParams) => void;
  dataPaginated: IPaginatedParams;
  isLoading?: boolean;
}
