import { InputAdornment, TextField } from "@mui/material";
import { HTMLInputTypeAttribute, ReactNode } from "react";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";

export function InputTextarea(props: IProps) {
  return (
    <TextField
      sx={{ width: "100%" }}
      label={props.label}
      size={"small"}
      type={props.type || "text"}
      name={props.name}
      id={props.name}
      required={props.required}
      value={props.value}
      onBlur={props.onBlur}
      onChange={props.onChange}
      placeholder={props.placeholder}
      helperText={props.errorMessage}
      error={!!props.errorMessage}
      multiline
      rows={4}
      InputProps={{
        sx: {
          borderRadius: 2,
        },
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
  name?: string;
  onChange?: OutlinedInputProps["onChange"];
  onBlur?: OutlinedInputProps["onBlur"];
  value?: any;
  required?: boolean;
  errorMessage?: any;
}
