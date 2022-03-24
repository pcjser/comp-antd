import { DatePickerProps } from 'antd';

export interface DateRangeProps
  extends Omit<DatePickerProps, 'format' | 'value' | 'onChange' | 'defaultValue'> {
  format?:
    | 'YYYY'
    | 'YYYY-MM'
    | 'YYYY-MM-DD'
    | 'YYYY-MM-DD HH'
    | 'YYYY-MM-DD HH:mm'
    | 'YYYY-MM-DD HH:mm:ss';
  value?: Array<string>;
  defaultValue?: Array<string>;
  onChange?: (range: Array<string>) => void;
  asc?: boolean;
  strict?: boolean;
}
