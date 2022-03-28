import { SelectProps } from 'antd';

export interface MapSelectProps extends Omit<SelectProps, 'loading' | 'mode' | 'data'> {
  dataSource:
    | Array<{ label: string; value: string }>
    | Promise<Array<{ label: string; value: string }>>;
  showLabel?: string | Array<string>;
  unique?: string;
  separator?: string;
  mode?: 'multiple' | 'default';
}
