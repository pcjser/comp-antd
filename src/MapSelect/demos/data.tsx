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
    <MapSelect dataSource={DATA1} style={{ width: 200 }} />
    <MapSelect dataSource={DATA2} style={{ width: 200 }} onChange={console.log} />
    <MapSelect dataSource={DATA1} style={{ width: 200 }} disabled />
    <MapSelect dataSource={DATA1} style={{ width: 200 }} onChange={console.log} allowClear />
  </Space>
);
