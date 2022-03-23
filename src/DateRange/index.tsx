import React, { useState, useEffect } from 'react';
import { DatePicker, DatePickerProps } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import localeCN from 'antd/es/date-picker/locale/zh_CN';

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

const formatToPicker = (format: string) => {
  switch (format) {
    case 'YYYY':
      return 'year';
    case 'YYYY-MM':
      return 'month';
    default:
      return 'date';
  }
};

const sortDateArray = (array: Array<moment.Moment | null>, format: string, asc: boolean) => {
  const list = array.map((item) => (item ? item.format(format) : ''));
  if (!asc) return list;
  return list.sort((a: string, b: string) => Date.parse(a) - Date.parse(b));
};

const formatToShowTime = (format: string) =>
  format.split(' ')[1]
    ? {
        format: format.split(' ')[1],
      }
    : false;

const DateRange: React.FC<DateRangeProps> = ({
  format = 'YYYY-MM-DD',
  locale = localeCN,
  onChange = () => {},
  disabled = false,
  strict = false,
  asc = true,
  value,
}) => {
  const [picker, setPicker] = useState<'date' | 'year' | 'month'>('date');
  const [begin, setBegin] = useState<moment.Moment | null>(null);
  const [end, setEnd] = useState<moment.Moment | null>(null);
  const [showTime, setShowTime] = useState<object | boolean>(false);

  useEffect(() => {
    setPicker(formatToPicker(format));
    setShowTime(formatToShowTime(format));
    if (value?.[0]) setBegin(moment(value?.[0]));
    if (value?.[1]) setEnd(moment(value?.[1]));
  }, []);

  const handleBeginChange = (begin: moment.Moment | null) => {
    setBegin(begin);
    onChange(sortDateArray([begin, end], format, asc));
  };

  const handleEndChange = (end: moment.Moment | null) => {
    setEnd(end);
    onChange(sortDateArray([begin, end], format, asc));
  };

  return (
    <div>
      <DatePicker
        showTime={showTime}
        locale={locale}
        picker={picker}
        value={begin}
        onChange={handleBeginChange}
        placeholder="请选择开始时间"
        disabled={disabled}
        format={format}
        bordered={false}
      />
      <span style={{ margin: '0 5px' }}>-</span>
      <DatePicker
        showTime={showTime}
        locale={locale}
        picker={picker}
        value={end}
        onChange={handleEndChange}
        placeholder="请选择结束时间"
        disabled={strict ? !begin || disabled : disabled}
        format={format}
        disabledDate={(current) =>
          strict ? current.valueOf() - (begin as moment.Moment).valueOf() < 0 : false
        }
      />
    </div>
  );
};

export default DateRange;
