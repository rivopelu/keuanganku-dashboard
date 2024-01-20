import { InputAdornment, TextField } from "@mui/material";
import { HTMLInputTypeAttribute, ReactNode } from "react";

export function InputText(props: IProps) {
  return (
    <TextField
      sx={{ width: "100%" }}
      label={props.label}
      size={"small"}
      type={props.type || "text"}
      placeholder={props.placeholder}
      InputProps={{
        startAdornment: props.startIcon && (
          <InputAdornment position="start">{props.startIcon}</InputAdornment>
        ),
        endAdornment: props.endIcon && (
          <InputAdornment position="start">{props.endIcon}</InputAdornment>
        ),
      }}
    />
  );
}

interface IProps {
  label?: string;
  placeholder?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  type?: HTMLInputTypeAttribute;
}
