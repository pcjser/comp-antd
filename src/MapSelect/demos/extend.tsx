import React from 'react';
import { MapSelect } from 'comp-antd';
import { Space } from 'antd';

const DATA = [
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

export default () => (
  <Space>
    <MapSelect
      dataSource={DATA}
      style={{ width: 200 }}
      onChange={console.log}
      placeholder="defaultValue"
      defaultValue="Lucy"
      allowClear
    />
    <MapSelect
      dataSource={DATA}
      style={{ width: 300 }}
      onChange={console.log}
      mode="multiple"
      placeholder="multiple"
      defaultValue={['Lucy', 'Jack']}
    />
    <MapSelect
      dataSource={DATA}
      style={{ width: 200 }}
      onChange={console.log}
      mode="multiple"
      placeholder="maxTagCount"
      maxTagCount={2}
    />
  </Space>
);
