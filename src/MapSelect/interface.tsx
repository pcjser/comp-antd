import { SelectProps } from 'antd';

export interface MapSelectProps extends Omit<SelectProps, 'loading' | 'mode'> {
  data?: Array<{ label: string; value: string }>;
  showLabel?: string | string[];
  unique?: string;
  separator?: string;
  mode?: 'multiple' | 'default';
  fetch?: () => Promise<Array<{ label: string; value: string }>>;
}