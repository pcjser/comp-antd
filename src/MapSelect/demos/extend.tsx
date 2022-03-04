import React from 'react';
import { MapSelect } from 'comp-antd';
import { Space } from 'antd';

const DATA = [
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

export default () => (
  <Space>
    <MapSelect
      data={DATA}
      style={{ width: 200 }}
      onChange={console.log}
      placeholder="defaultValue"
      defaultValue="Lucy"
      allowClear
    />
    <MapSelect
      data={DATA}
      style={{ width: 200 }}
      onChange={console.log}
      mode="multiple"
      placeholder="multiple"
      defaultValue={['Lucy', 'Jack']}
    />
    <MapSelect
      data={DATA}
      style={{ width: 200 }}
      onChange={console.log}
      mode="multiple"
      placeholder="maxTagCount"
      maxTagCount={2}
    />
    <MapSelect
      data={[]}
      style={{ width: 200 }}
      onChange={console.log}
      placeholder="tags"
      mode="tags"
    />
  </Space>
);
