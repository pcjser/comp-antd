import { SelectProps } from 'antd';

export type dataItem = {
  label: string;
  value: string;
};

export interface MapSelectProps extends Omit<SelectProps, 'loading' | 'mode' | 'data'> {
  dataSource: Array<dataItem> | Promise<Array<dataItem>>;
  showLabel?: string | Array<string>;
  unique?: string;
  separator?: string;
  mode?: 'multiple' | 'default';
}
