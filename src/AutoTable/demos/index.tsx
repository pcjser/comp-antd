import { Input } from 'antd';
import { AutoTable } from 'comp-antd';
import * as React from 'react';

const getData = (params) =>
  new Promise<Array<object>>(async (resolve) => {
    const data = await fetch('http://localhost:4567/api/v1/demo/table', {
      // credentials: 'no-cors'
      method: 'post',
      body: JSON.stringify(params),
      // mode: 'cors',
    }).then((response) => response.json());
    // console.log(data);
    resolve(data.data);
    // console.log(params);
    // setTimeout(() => {
    //   resolve([
    //     {
    //       id: 10,
    //       name: 'demo',
    //     },
    //     {
    //       id: 20,
    //       name: 'HEHEH',
    //     },
    //     {
    //       id: 30,
    //       name: params.date,
    //     },
    //   ]);
    // }, 500);
  });

const columns = [
  {
    title: 'UID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: '手机号',
    dataIndex: 'telephone',
    key: 'telephone',
  },
];

const actions = [
  {
    value: 'retrieve',
    label: '查看',
  },
];

// const formItems = (
//   <>
//     <Form.Item name="name" label="姓名">
//       <Input />
//     </Form.Item>
//   </>
// );

const conditions = [
  {
    name: 'username',
    label: '用户名',
    component: <Input />,
  },
  {
    name: 'telephone',
    label: '手机号',
    component: <Input />,
  },
];

export default () => {
  const [table] = AutoTable.useAutoTable();

  // console.log(table);

  const [initialCondition, setInitialCondition] = React.useState({ username: 'aaaa' });

  React.useEffect(() => {
    // table.refreshTable();
    // setTimeout(() => {
    //   setInitialCondition({ date: 'yyyyy' });
    // }, 2000);
  }, []);

  return (
    <>
      <AutoTable table={table}>
        <AutoTable.ConditionPanel initialCondition={initialCondition} conditions={conditions} />
        <AutoTable.TablePanel
          rowKey="id"
          serial
          actions={actions}
          columns={columns}
          dataSource={getData}
        />
        {/* <AutoTable.ModalPanel formItems={formItems} /> */}
        <AutoTable.PaginationPanel />
      </AutoTable>
      <div onClick={() => table.refreshTable()}>刷新</div>
    </>
  );
};

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
