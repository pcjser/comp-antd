import React, { useState, useEffect } from 'react';
import { Select } from 'antd';

import { MapSelectProps } from './interface';

const MapSelect: React.FC<MapSelectProps> = ({
  separator = ',',
  placeholder = '请选择',
  mode = 'default',
  data,
  unique,
  showLabel,
  fetch,
  onChange,
  ...rest
}) => {
  const [dataMap, setDataMap] = useState<Array<{ label: string; value: string }>>();
  const [loading, setLoading] = useState<boolean>(false);

  const newMode = mode === 'multiple' ? 'multiple' : undefined;

  useEffect(() => {
    if (!fetch || data) return;
    if (unique && window?.sessionStorage && window.sessionStorage[`map-select-${unique}`])
      return setDataMap(JSON.parse(window.sessionStorage[`map-select-${unique}`]));
    (async () => {
      setLoading(true);
      const result = await fetch();
      setDataMap(result);
      setLoading(false);
      if (unique && window?.sessionStorage)
        window.sessionStorage[`map-select-${unique}`] = JSON.stringify(result);
    })();
  }, [data, fetch]);

  const renderText = (
    data: Array<{ label: string; value: string }>,
    showLabel: Array<string> | string,
  ) => {
    if (typeof showLabel === 'string')
      return data.filter(({ value }) => value === showLabel)[0]?.label;
    if (Array.isArray(showLabel) && mode === 'multiple')
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
        <Select
          onChange={onChange}
          placeholder={placeholder}
          loading={loading}
          mode={newMode}
          {...rest}
        >
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

MapSelect.displayName = 'MapSelect';

export default MapSelect;
