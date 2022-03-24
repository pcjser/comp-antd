import { DatePickerProps } from 'antd';

export interface DateRangeProps
  extends Omit<
    DatePickerProps,
    'format' | 'picker' | 'value' | 'onChange' | 'defaultValue' | 'defaultPickerValue'
  > {
  picker?: 'year' | 'month' | 'date' | 'hour' | 'minute' | 'second';
  separator?: '-' | '/';
  value?: Array<string>;
  defaultValue?: Array<string>;
  onChange?: (range: Array<string> | undefined) => void;
}
