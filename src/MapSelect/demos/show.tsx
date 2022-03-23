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
