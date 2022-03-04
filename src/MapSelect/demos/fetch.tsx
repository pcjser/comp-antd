import React from 'react';
import { MapSelect } from 'comp-antd';

const api = () =>
  new Promise<{ label: string; value: string }[]>((resolve) => {
    setTimeout(() => {
      resolve([
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
      ]);
    }, 500);
  });

export default () => (
  <MapSelect style={{ width: 200 }} unique="unique-demo" onChange={console.log} fetch={api} />
);
