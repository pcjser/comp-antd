import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { isArray, isPromise, isString } from '@/util/dataTypes';

import { MapSelectProps } from './interface';

import 'antd/es/select/style/index';

const MapSelect: React.FC<MapSelectProps> = ({
  separator = ',',
  placeholder = '请选择',
  mode = 'default',
  dataSource,
  unique,
  showLabel,
  onChange,
  ...rest
}) => {
  const [dataMap, setDataMap] = useState<Array<{ label: string; value: string }>>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!dataSource) return console.error('MapSelect组件缺少dataSource参数');
    if (isArray(dataSource)) setDataMap(dataSource as Array<{ label: string; value: string }>);
    else if (isPromise(dataSource)) {
      if (unique && window?.sessionStorage[`map-select-${unique}`])
        return setDataMap(JSON.parse(window.sessionStorage[`map-select-${unique}`]));
      (async () => {
        setLoading(true);
        const result = await dataSource;
        setDataMap(result);
        setLoading(false);
        if (unique && window?.sessionStorage)
          window.sessionStorage[`map-select-${unique}`] = JSON.stringify(result);
      })();
    } else console.error('MapSelect组件错误的dataSource参数');
  }, [dataSource]);

  const renderText = (
    data: Array<{ label: string; value: string }> | undefined,
    showLabel: Array<string> | string,
  ) => {
    if (isString(showLabel) || mode === 'default')
      return data?.filter(({ value }) => value === showLabel)[0]?.label;
    if (isArray(showLabel) && mode === 'multiple')
      return data
        ?.filter(({ value }) => showLabel.includes(value))
        ?.map(({ label }) => label)
        ?.join(separator);
  };

  return (
    <>
      {showLabel ? (
        <div style={rest?.style} className={rest?.className}>
          {renderText(dataMap, showLabel)}
        </div>
      ) : (
        <Select
          onChange={onChange}
          placeholder={placeholder}
          loading={loading}
          mode={mode === 'multiple' ? 'multiple' : undefined}
          {...rest}
        >
          {dataMap?.map(({ label, value, ...rest }) => (
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
