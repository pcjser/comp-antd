import React, { useState, useEffect } from 'react';
import { Select, SelectProps } from 'antd';

interface MapSelectProps extends Omit<SelectProps, ''> {
  data?: { label: string; value: string | number }[];
  unique?: string;
  fetch?: () => Promise<{ label: string; value: string | number }[]>;
}

const MapSelect = ({
  data,
  unique,
  fetch,
  placeholder = '请选择',
  onChange,
  ...rest
}: MapSelectProps) => {
  const [dataMap, setDataMap] = useState<{ label: string; value: string | number }[]>([]);

  useEffect(() => {
    if (!fetch || data) return;
    if (unique && window.sessionStorage[`map-select-${unique}`])
      return setDataMap(JSON.parse(window.sessionStorage[`map-select-${unique}`]));
    (async () => {
      const result = await fetch();
      setDataMap(result);
      if (unique) window.sessionStorage[`map-select-${unique}`] = JSON.stringify(result);
    })();
  }, [data, fetch]);

  return (
    <Select onChange={onChange} placeholder={placeholder} {...rest}>
      {data?.map(({ label, value, ...rest }) => (
        <Select.Option key={value} value={value} {...rest}>
          {label}
        </Select.Option>
      ))}
      {dataMap?.map(({ value, label, ...rest }) => (
        <Select.Option key={value} value={value} {...rest}>
          {label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default MapSelect;
