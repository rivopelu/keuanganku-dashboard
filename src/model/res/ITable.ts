export interface ITableColumnData {
  sort?: boolean;
  headerTitle?: string;
  headerClassName?: string;
  value?: string;
  key: string;
  className?: string;
  layouts?: (data?: any, index?: number) => any;
  loadingComponents?: any;
  paddingNone?: boolean;
  onSort?: (e: any) => void;
}
