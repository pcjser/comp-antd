import React, { useEffect } from 'react';
import { AutoTable, MapSelect } from 'comp-antd';
import { Input } from 'antd';

const getData = () =>
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
  const conditions = [
    {
      name: 'date',
      label: '案源生效时间',
      component: <Input />,
    },
    {
      name: 'factor',
      label: '相关要素',
      component: (
        <MapSelect
          dataSource={[
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
          ]}
        />
      ),
    },
  ];

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

  const [table] = AutoTable.useTable();
  console.log(table);
  useEffect(() => {
    table.initialTable();
  }, []);

  return (
    <AutoTable table={table}>
      {/* <AutoTable.SearchPanel conditions={conditions} />
      <AutoTable.TablePanel columns={columns} dataSource={getData()} rowKey="id" /> */}
    </AutoTable>
  );
};
