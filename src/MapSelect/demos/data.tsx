import React from 'react';
import { MapSelect } from 'comp-antd';
import { Space } from 'antd';

const DATA1 = [
  {
    label: 'Jack',
    value: 'Jack',
  },
  {
    label: 'Lucy',
    value: 'Lucy',
  },
  {
    label: 'Rose',
    value: 'Rose',
  },
  {
    label: 'Windy',
    value: 'Windy',
  },
];

const DATA2 = [
  {
    label: 'Disabled',
    value: 'Disabled',
    disabled: true,
  },
  {
    label: 'ClassName',
    value: 'ClassName',
    className: 'my-option',
  },
  {
    label: 'Base',
    value: 'Base',
  },
];

export default () => (
  <Space>
    <MapSelect data={DATA1} style={{ width: 200 }} />
    <MapSelect data={DATA2} style={{ width: 200 }} onChange={console.log} />
    <MapSelect data={DATA1} style={{ width: 200 }} disabled />
    <MapSelect data={DATA1} style={{ width: 200 }} onChange={console.log} allowClear />
  </Space>
);
