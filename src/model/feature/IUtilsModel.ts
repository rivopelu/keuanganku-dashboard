export type ButtonVariant = "text" | "outlined" | "contained";
export type ColorType =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";

export interface ILabelValue<T> {
  label: string;
  value?: T;
  image?: string;
  active?: boolean;
}

export interface IPaginatedParams {
  page: number;
  size: number;
  total_data: number;
  sort?: string;
}
