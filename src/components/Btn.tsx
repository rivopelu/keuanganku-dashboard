import { Button } from "@mui/material";
import { ReactNode } from "react";
import { ButtonVariant, ColorType } from "../model/feature/IUtilsModel.ts";

export function Btn(props: IProps) {
  return (
    <Button
      onClick={props.onClick}
      sx={{
        borderRadius: 2,
        width: props.fitWidth ? undefined : "100%",
      }}
      color={props.color}
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
  variant?: ButtonVariant;
  color?: ColorType;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
  fitWidth?: boolean;
}
