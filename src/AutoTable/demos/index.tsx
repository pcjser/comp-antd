import React from 'react';
import { AutoTable } from 'comp-antd';

const api = () =>
  new Promise<Array<object>>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 10,
          name: 'demo',
        },
      ]);
    }, 500);
  });

export default () => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <AutoTable tableFetch={api}>
      <AutoTable.TablePanel columns={columns} />
      {/* <AutoTable.TablePanel columns={columns} /> */}
    </AutoTable>
  );
};
