import { Button } from "@mui/material";
import { ReactNode } from "react";

export function Btn(props: IProps) {
  return (
    <Button
      sx={{
        borderRadius: 2,
      }}
      className={"btn"}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      variant={props.variant || "contained"}
    >
      {props.children}
    </Button>
  );
}

interface IProps {
  children: any;
  variant?: "text" | "outlined" | "contained";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}
