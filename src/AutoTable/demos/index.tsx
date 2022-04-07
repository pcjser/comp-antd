import * as React from 'react';
import { AutoTable } from 'comp-antd';
// import { Input } from 'antd';

export default () => {
  const [table] = AutoTable.useAutoTable();

  React.useEffect(() => {
    table.initialTable();
  }, []);

  return <AutoTable table={table}></AutoTable>;
};

// // const getData = () =>
// //   new Promise<Array<object>>((resolve) => {
// //     setTimeout(() => {
// //       resolve([
// //         {
// //           id: 10,
// //           name: 'demo',
// //         },
// //       ]);
// //     }, 500);
// //   });

// // export default () => {
// //   // const conditions = [
// //   //   {
// //   //     name: 'date',
// //   //     label: '案源生效时间',
// //   //     component: <Input />,
// //   //   },
// //   //   {
// //   //     name: 'factor',
// //   //     label: '相关要素',
// //   //     component: (
// //   //       <MapSelect
// //   //         dataSource={[
// //   //           {
// //   //             label: 'Jack-Label',
// //   //             value: 'Jack',
// //   //           },
// //   //           {
// //   //             label: 'Lucy-Label',
// //   //             value: 'Lucy',
// //   //           },
// //   //           {
// //   //             label: 'Rose-Label',
// //   //             value: 'Rose',
// //   //           },
// //   //           {
// //   //             label: 'Windy-Label',
// //   //             value: 'Windy',
// //   //           },
// //   //         ]}
// //   //       />
// //   //     ),
// //   //   },
// //   // ];

// //   // const columns = [
// //   //   {
// //   //     title: '姓名',
// //   //     dataIndex: 'name',
// //   //     key: 'name',
// //   //   },
// //   //   {
// //   //     title: '年龄',
// //   //     dataIndex: 'age',
// //   //     key: 'age',
// //   //   },
// //   //   {
// //   //     title: '住址',
// //   //     dataIndex: 'address',
// //   //     key: 'address',
// //   //   },
// //   // ];

// //   // const [table] = AutoTable.useAutoTable();
// //   // console.log(table);
// //   // useEffect(() => {
// //   //   table.initialTable();
// //   // }, []);

// //   return (
// //     <AutoTable />
// //       // {/* <AutoTable.SearchPanel conditions={conditions} />
// //       // <AutoTable.TablePanel columns={columns} dataSource={getData()} rowKey="id" /> */}
// //     // </AutoTable>
// //   );
// // };
