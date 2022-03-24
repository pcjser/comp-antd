import React, { useState, useRef } from 'react';
import { DatePicker } from 'antd';
import classNames from 'classnames';
import { SwapRightOutlined, CloseCircleFilled, CalendarOutlined } from '@ant-design/icons';
import moment from 'moment';
import 'moment/locale/zh-cn';
import localeCN from 'antd/es/date-picker/locale/zh_CN';

import { DateRangeProps } from './interface';

import 'antd/es/date-picker/style/index';
import './index.less';

const getPickerType = (picker: string) => {
  switch (picker) {
    case 'year':
    case 'month':
      return picker;
    default:
      return 'date';
  }
};

const getShowTime = (picker: string) => {
  switch (picker) {
    case 'hour':
      return { format: 'HH' };
    case 'minute':
      return { format: 'HH:mm' };
    case 'second':
      return { format: 'HH:mm:ss' };
    default:
      return false;
  }
};

const pickerToFormat = (picker: string, separator: string) => {
  switch (picker) {
    case 'year':
      return 'YYYY';
    case 'month':
      return `YYYY${separator}MM`;
    case 'date':
      return `YYYY${separator}MM${separator}DD`;
    case 'hour':
      return `YYYY${separator}MM${separator}DD HH`;
    case 'minute':
      return `YYYY${separator}MM${separator}DD HH:mm`;
    default:
      return `YYYY${separator}MM${separator}DD HH:mm:ss`;
  }
};

const DateRange: React.FC<DateRangeProps> = ({
  locale = localeCN,
  picker = 'second',
  separator = '-',
  onChange = () => {},
  value,
  defaultValue,
  disabled,
  className,
  style,
}) => {
  const pickerRef = useRef(null);
  const beginRef = useRef(null);
  const endRef = useRef(null);
  const clearRef = useRef(null);

  const [focus, setFocus] = useState<boolean>(false);
  const [barOffsetLeft, setBarOffsetLeft] = useState<number>(0);
  const [lock, setLock] = useState<boolean>(false);
  const [begin, setBegin] = useState<moment.Moment | null>(
    value || defaultValue ? moment((value || defaultValue)?.[0]) : null,
  );
  const [beginOpen, setBeginOpen] = useState<boolean>(false);
  const [end, setEnd] = useState<moment.Moment | null>(
    value || defaultValue ? moment((value || defaultValue)?.[1]) : null,
  );
  const [endOpen, setEndOpen] = useState<boolean>(false);

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

  const getPickerWidth = () =>
    pickerRef.current ? parseInt(window?.getComputedStyle(pickerRef.current!)?.['width']) : 0;

  const handleBeginChange = (begin: moment.Moment | null) => {
    setBegin(begin);
    setBeginOpen(false);

    if (!lock) {
      setLock(true);
      (endRef.current as unknown as HTMLInputElement)?.focus();
      setBarOffsetLeft(32 + (getPickerWidth() - 76) / 2);
      setEndOpen(true);
    } else {
      setLock(false);
      onChange([
        begin?.format(pickerToFormat(picker, separator)) as string,
        end?.format(pickerToFormat(picker, separator)) as string,
      ]);
    }
  };

  const handleEndChange = (end: moment.Moment | null) => {
    setEnd(end);
    setEndOpen(false);

    if (!lock) {
      setLock(true);
      (beginRef.current as unknown as HTMLInputElement)?.focus();
      setBarOffsetLeft(0);
      setBeginOpen(true);
    } else {
      setLock(false);
      onChange([
        begin?.format(pickerToFormat(picker, separator)) as string,
        end?.format(pickerToFormat(picker, separator)) as string,
      ]);
    }
  };

  const handleBeginClick = () => {
    setLock(false);
    setBarOffsetLeft(0);
    setBeginOpen(true);
    setEndOpen(false);
  };

  const handleEndClick = () => {
    setLock(false);
    setBarOffsetLeft(32 + (getPickerWidth() - 76) / 2);
    setBeginOpen(false);
    setEndOpen(true);
  };

  const handleClear = () => {
    // console.log(focus);
    // e.stopPropagation();
    setBegin(null);
    setEnd(null);
    onChange(undefined);

    // console.log(
    //   window.getComputedStyle(pickerRef.current.querySelector('.ant-picker-active-bar'))['bottom'],
    // );

    // endRef.current as unknown as HTMLInputElement)?.isFocus()

    // console.log(endRef.current, document.activeElement);
    // if (focus) {
    //   if (barOffsetLeft >= 32 + (getPickerWidth() - 76) / 2)
    //     (endRef.current as unknown as HTMLInputElement)?.focus();
    //   else (beginRef.current as unknown as HTMLInputElement)?.focus();
    // } else {
    // }
  };

  return (
    <div
      className={classes}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      onMouseEnter={(e) => {
        if (e.target === pickerRef.current && end && begin)
          (clearRef.current as unknown as HTMLInputElement).style.opacity = '1';
      }}
      onMouseLeave={() => {
        (clearRef.current as unknown as HTMLInputElement).style.opacity = '0';
      }}
      style={style}
      ref={pickerRef}
    >
      <DatePicker
        allowClear={false}
        style={{ padding: 0, flex: 1 }}
        bordered={false}
        suffixIcon={null}
        dropdownClassName="date-range-start-pop"
        getPopupContainer={(trigger) => trigger}
        onClick={handleBeginClick}
        onBlur={() => {
          setBeginOpen(false);
          if (!begin) {
            setEnd(null);
            onChange(undefined);
          }
        }}
        placeholder="开始时间"
        locale={locale}
        disabled={disabled}
        picker={getPickerType(picker)}
        showTime={getShowTime(picker)}
        value={begin}
        onChange={handleBeginChange}
        onOk={handleBeginChange}
        open={beginOpen}
        format={pickerToFormat(picker, separator)}
        ref={beginRef}
        disabledDate={(current) => current?.valueOf() > (end as moment.Moment)?.valueOf()}
      />
      <div className="ant-picker-range-separator">
        <SwapRightOutlined />
      </div>
      <DatePicker
        allowClear={false}
        style={{ padding: 0, flex: 1 }}
        bordered={false}
        suffixIcon={null}
        dropdownClassName="date-range-end-pop"
        getPopupContainer={(trigger) => trigger}
        onClick={handleEndClick}
        onBlur={() => {
          setEndOpen(false);
          if (!end) {
            setBegin(null);
            onChange(undefined);
          }
        }}
        placeholder="结束时间"
        locale={locale}
        disabled={disabled}
        picker={getPickerType(picker)}
        showTime={getShowTime(picker)}
        value={end}
        onChange={handleEndChange}
        onOk={handleEndChange}
        open={endOpen}
        ref={endRef}
        format={pickerToFormat(picker, separator)}
        disabledDate={(current) => current?.valueOf() < (begin as moment.Moment)?.valueOf()}
      />
      <div
        className="ant-picker-active-bar"
        style={{ width: (getPickerWidth() - 76) / 2, position: 'absolute', left: barOffsetLeft }}
      />
      <CalendarOutlined className="ant-picker-suffix" />
      <CloseCircleFilled
        className="picker-clear"
        ref={clearRef}
        onFocusCapture={() => console.log(focus)}
        onClickCapture={() => console.log(focus)}
        onFocus={(e) => e.stopPropagation()}
        onClick={handleClear}
      />
    </div>
  );
};

export default DateRange;
