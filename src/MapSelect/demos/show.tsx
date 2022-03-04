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
    <MapSelect data={DATA} style={{ width: 200 }} showLabel="Rose" />
    <MapSelect
      data={DATA}
      style={{ width: 200 }}
      mode="multiple"
      showLabel={['Jack', 'Windy']}
      separator=" | "
    />
  </Space>
);
