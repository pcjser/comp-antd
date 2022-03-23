import React from 'react';
import { MapSelect } from 'comp-antd';
import { Space } from 'antd';

const DATA1 = [
  {
    label: 'Jack-Label',
    value: 'Jack',
  },
  {
    label: 'Lucy-Label',
    value: 'Lucy',
  },
  {
    label: 'Rose-Label',
    value: 'Rose',
  },
  {
    label: 'Windy-Label',
    value: 'Windy',
  },
];

const DATA2 = [
  {
    label: 'Disabled-Label',
    value: 'Disabled',
    disabled: true,
  },
  {
    label: 'ClassName-Label',
    value: 'ClassName',
    className: 'my-option',
  },
  {
    label: 'Base-Label',
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
