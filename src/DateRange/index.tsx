import React, { useState, useRef, useMemo, FC, useEffect } from 'react';
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

const DateRange: FC<DateRangeProps> = ({
  locale = localeCN,
  picker = 'date',
  separator = '-',
  disabled = false,
  onChange,
  value,
  defaultValue,
  placeholder,
  className,
  style,
}) => {
  const pickerRef = useRef(null);
  const clearRef = useRef(null);

  const [focus, setFocus] = useState<boolean>(false);
  const [barOffsetLeft, setBarOffsetLeft] = useState<number>(0);
  const [begin, setBegin] = useState<moment.Moment | null>(
    defaultValue ? moment(defaultValue?.[0]) : null,
  );
  const [end, setEnd] = useState<moment.Moment | null>(
    defaultValue ? moment(defaultValue?.[1]) : null,
  );
  const [time, setTime] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (value) setBegin(moment(value?.[0]));
    if (value) setEnd(moment(value?.[1]));
  }, [value]);

  const result = useMemo(() => {
    if (!begin || !end) return undefined;
    return [
      begin.format(pickerToFormat(picker, separator)) as string,
      end.format(pickerToFormat(picker, separator)) as string,
    ];
  }, [begin, end]);

  const classes = classNames(
    // 处理classname
    'date-range-picker',
    'ant-picker',
    'ant-picker-range',
    {
      ['ant-picker-focused']: focus,
      ['ant-picker-disabled']: disabled,
    },
    className,
  );

  const getPickerWidth = () => (pickerRef.current ? (pickerRef.current as any).offsetWidth : 0);

  const handleBeginChange = (begin: moment.Moment | null) => {
    setBegin(begin);
    if (!end) {
      setBarOffsetLeft(32 + (getPickerWidth() - 76) / 2);
    }
  };

  const handleEndChange = (end: moment.Moment | null) => {
    setEnd(end);
    if (!begin) {
      setBarOffsetLeft(0);
    }
  };

  const handleClear = () => {
    if (clearRef.current) (clearRef.current as any).style.opacity = '0';
    setBegin(null);
    setEnd(null);
  };

  const handlePickerFocus = () => {
    if (!focus) setFocus(true);
    if (time) {
      clearTimeout(time);
      setTime(undefined);
    }
  };

  const handlePickerBlur = () => {
    if (time) {
      clearTimeout(time);
      setTime(undefined);
    }

    setTime(
      setTimeout(() => {
        setFocus(false);
        if (!begin || !end) {
          handleClear();
        }
        onChange && onChange(result);
      }, 100),
    );
  };

  return (
    <div
      className={classes}
      onFocus={handlePickerFocus}
      onBlur={handlePickerBlur}
      onMouseEnter={(e) => {
        if (e.target === pickerRef.current && clearRef.current)
          (clearRef.current as any).style.opacity = '1';
      }}
      onMouseLeave={() => {
        if (clearRef.current) (clearRef.current as any).style.opacity = '0';
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
        onFocus={() => setBarOffsetLeft(0)}
        placeholder={placeholder?.[0] || '开始时间'}
        locale={locale}
        disabled={disabled}
        picker={getPickerType(picker)}
        showTime={getShowTime(picker)}
        value={begin}
        onChange={handleBeginChange}
        onOk={handleBeginChange}
        format={pickerToFormat(picker, separator)}
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
        onFocus={() => setBarOffsetLeft(32 + (getPickerWidth() - 76) / 2)}
        placeholder={placeholder?.[1] || '结束时间'}
        locale={locale}
        disabled={disabled}
        picker={getPickerType(picker)}
        showTime={getShowTime(picker)}
        value={end}
        onChange={handleEndChange}
        onOk={handleEndChange}
        format={pickerToFormat(picker, separator)}
        disabledDate={(current) => current?.valueOf() < (begin as moment.Moment)?.valueOf()}
      />
      <div
        className="ant-picker-active-bar"
        style={{ width: (getPickerWidth() - 76) / 2, position: 'absolute', left: barOffsetLeft }}
      />
      <CalendarOutlined className="ant-picker-suffix" />
      {begin && end && (
        <CloseCircleFilled
          className="picker-clear"
          ref={clearRef}
          onFocus={(e) => e.stopPropagation()}
          onClick={handleClear}
        />
      )}
    </div>
  );
};

export default DateRange;
