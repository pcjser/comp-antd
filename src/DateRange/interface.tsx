import { CSSProperties } from 'react';
import { PickerLocale } from 'antd/es/date-picker/generatePicker';

export interface DateRangeProps {
  picker?: 'year' | 'month' | 'date' | 'hour' | 'minute' | 'second';
  separator?: '-' | '/';
  value?: Array<string>;
  defaultValue?: Array<string>;
  placeholder?: Array<string>;
  onChange?: (range: Array<string> | undefined) => void;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  locale?: PickerLocale;
}
