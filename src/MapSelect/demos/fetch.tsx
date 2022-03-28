import React from 'react';
import { MapSelect } from 'comp-antd';

const getData = () =>
  new Promise<{ label: string; value: string }[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          label: 'Jack-Label',
          value: 'Jack',
        },
        {
          label: 'Lucy-Label',
          value: 'Lucy-Label',
        },
        {
          label: 'Rose-Label',
          value: 'Rose',
        },
        {
          label: 'Windy-Label',
          value: 'Windy',
        },
      ]);
    }, 500);
  });

export default () => (
  <MapSelect
    style={{ width: 200 }}
    unique="unique-demo"
    onChange={console.log}
    dataSource={getData()}
  />
);
