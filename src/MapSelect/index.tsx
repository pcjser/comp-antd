import React, { useState, useEffect } from 'react';
import { Select, SelectProps } from 'antd';

interface MapSelectProps extends Omit<SelectProps, 'loading'> {
  data?: Array<{ label: string; value: string }>;
  showLabel?: string | string[];
  unique?: string;
  separator?: string;
  fetch?: () => Promise<Array<{ label: string; value: string }>>;
}

const MapSelect = ({
  separator = ',',
  placeholder = '请选择',
  data,
  unique,
  showLabel,
  fetch,
  onChange,
  ...rest
}: MapSelectProps) => {
  const [dataMap, setDataMap] = useState<Array<{ label: string; value: string }>>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!fetch || data) return;
    if (unique && window.sessionStorage[`map-select-${unique}`])
      return setDataMap(JSON.parse(window.sessionStorage[`map-select-${unique}`]));
    (async () => {
      setLoading(true);
      const result = await fetch();
      setDataMap(result);
      setLoading(false);
      if (unique) window.sessionStorage[`map-select-${unique}`] = JSON.stringify(result);
    })();
  }, [data, fetch]);

  const renderText = (
    data: Array<{ label: string; value: string }>,
    showLabel: Array<string> | string,
  ) => {
    if (typeof showLabel === 'string')
      return data.filter(({ value }) => value === showLabel)[0]?.value;
    if (Array.isArray(showLabel))
      return data
        .filter(({ value }) => showLabel.includes(value))
        ?.map(({ label }) => label)
        ?.join(separator);
  };

  return (
    <>
      {showLabel ? (
        <div style={rest?.style} className={rest?.className}>
          {renderText(data || dataMap || [], showLabel)}
        </div>
      ) : (
        <Select onChange={onChange} placeholder={placeholder} loading={loading} {...rest}>
          {(data || dataMap)?.map(({ label, value, ...rest }) => (
            <Select.Option key={value} value={value} {...rest}>
              {label}
            </Select.Option>
          ))}
        </Select>
      )}
    </>
  );
};

export default MapSelect;
