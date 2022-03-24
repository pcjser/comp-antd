import React, { useState, useEffect, useRef } from 'react';
import { DatePicker } from 'antd';
import classNames from 'classnames';
import { SwapRightOutlined, CloseCircleOutlined, CalendarOutlined } from '@ant-design/icons';
import moment from 'moment';
import 'moment/locale/zh-cn';
import localeCN from 'antd/es/date-picker/locale/zh_CN';

import { DateRangeProps } from './interface';

import './index.less';

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

// const sortDateArray = (array: Array<moment.Moment | null>, format: string, asc: boolean) => {
//   const list = array.map((item) => (item ? item.format(format) : ''));
//   if (!asc) return list;
//   return list.sort((a: string, b: string) => Date.parse(a) - Date.parse(b));
// };

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
  className,
  style,
}) => {
  const pickerRef = useRef(null);
  const [picker, setPicker] = useState<'date' | 'year' | 'month'>('date');
  const [begin, setBegin] = useState<moment.Moment | null>(null);
  const [end, setEnd] = useState<moment.Moment | null>(null);
  const [showTime, setShowTime] = useState<object | boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const [barOffsetLeft, setBarOffsetLeft] = useState<number>(0);
  const [pickerWidth, setPickerWidth] = useState<number>(0);

  useEffect(() => {
    // const pickerWidth = ;
    setPickerWidth(parseInt(window?.getComputedStyle(pickerRef.current!)?.['width']));
    // console.log(pickerWidth);

    setPicker(formatToPicker(format));
    setShowTime(formatToShowTime(format));
    if (value?.[0]) setBegin(moment(value?.[0]));
    if (value?.[1]) setEnd(moment(value?.[1]));
  }, []);

  const classes = classNames(
    // 处理classname
    'date-range-picker',
    'ant-picker',
    'ant-picker-range',
    {
      ['ant-picker-focused']: focus,
    },
    className,
  );

  const handleBeginChange = (begin: moment.Moment | null) => {
    setBegin(begin);
    // onChange(sortDateArray([begin, end], format, asc));
  };

  const handleEndChange = (end: moment.Moment | null) => {
    setEnd(end);
    // onChange(sortDateArray([begin, end], format, asc));
  };

  return (
    <div
      className={classes}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={style}
      ref={pickerRef}
    >
      <DatePicker
        allowClear={false}
        style={{ padding: 0, flex: 1 }}
        showTime={showTime}
        locale={locale}
        picker={picker}
        value={begin}
        onChange={handleBeginChange}
        placeholder="请选择开始时间"
        disabled={disabled}
        format={format}
        bordered={false}
        suffixIcon={null}
        dropdownClassName="date-range-start-pop"
        getPopupContainer={(trigger) => trigger}
        onFocus={() => {
          setBarOffsetLeft(0);
        }}
      />
      <div className="ant-picker-range-separator">
        <SwapRightOutlined />
      </div>
      <DatePicker
        allowClear={false}
        style={{ padding: 0, flex: 1 }}
        showTime={showTime}
        locale={locale}
        picker={picker}
        value={end}
        onChange={handleEndChange}
        placeholder="请选择结束时间"
        disabled={strict ? !begin || disabled : disabled}
        format={format}
        bordered={false}
        disabledDate={(current) =>
          strict ? current.valueOf() - (begin as moment.Moment).valueOf() < 0 : false
        }
        suffixIcon={null}
        dropdownClassName="date-range-end-pop"
        getPopupContainer={(trigger) => trigger}
        onFocus={() => setBarOffsetLeft(32 + (pickerWidth - 76) / 2)}
      />
      <div
        className="ant-picker-active-bar"
        style={{ width: (pickerWidth - 76) / 2, position: 'absolute', left: barOffsetLeft }}
      />
      <CalendarOutlined className="ant-picker-suffix" />
      <CloseCircleOutlined className="ant-picker-clear" />
    </div>
  );
};

export default DateRange;
