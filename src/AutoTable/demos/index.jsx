import { Form, Input } from 'antd';
import { AutoTable } from 'comp-antd';
import * as React from 'react';

const getData = (params) =>
  new Promise(async (resolve) => {
    const data = await fetch('http://localhost:4567/api/v1/demo/table', {
      method: 'post',
      body: JSON.stringify(params),
    }).then((response) => response.json());
    resolve(data.data);
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

const operations = [
  {
    action: 'create',
    dataSource: (data) => {
      return new Promise(async (resolve) => {
        await fetch('http://localhost:4567/api/v1/demo/create', {
          method: 'post',
          body: JSON.stringify(data),
        }).then((response) => response.json());
        resolve();
      });
    },
  },
  {
    action: 'delete',
    dataSource: (selectedRowKeys) => {
      return new Promise(async (resolve) => {
        await fetch('http://localhost:4567/api/v1/demo/deleteBatch', {
          method: 'post',
          body: JSON.stringify(selectedRowKeys),
        }).then((response) => response.json());
        resolve();
      });
    },
  },
];

const formItems = (form, action, record) => {
  return (
    <>
      <Form.Item name="username" label="用户名">
        <Input disabled={action?.action === 'retrieve'} />
      </Form.Item>
      <Form.Item name="telephone" label="手机号">
        <Input />
      </Form.Item>
    </>
  );
};

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

  const actions = [
    {
      action: 'retrieve',
      // label: '查看',
      // title: '商品xq',
      // dataSource: (unique) => {
      //   return new Promise(async (resolve) => {
      //     const data = await fetch('http://localhost:4567/api/v1/demo/detail', {
      //       method: 'post',
      //       body: JSON.stringify({ id: unique }),
      //     }).then((response) => response.json());
      //     resolve(data.data);
      //   });
      // },
    },
    {
      action: 'update',
      dataSource: (data) => {
        return new Promise(async (resolve) => {
          await fetch('http://localhost:4567/api/v1/demo/update', {
            method: 'post',
            body: JSON.stringify(data),
          }).then((response) => response.json());
          resolve();
        });
      },
    },
    {
      action: 'delete',
      dataSource: (unique) => {
        return new Promise(async (resolve) => {
          await fetch('http://localhost:4567/api/v1/demo/delete', {
            method: 'post',
            body: JSON.stringify({ id: unique }),
          }).then((response) => response.json());
          resolve();
        });
      },
    },
    {
      action: 'extend',
      label: '打印',
      extendAction: () => {
        console.log();
        table.refreshTable();
      },
    },
  ];

  return (
    <>
      <AutoTable table={table}>
        <AutoTable.ConditionPanel conditions={conditions} />
        <AutoTable.OperationPanel operations={operations} />
        <AutoTable.TablePanel
          unique="id"
          serial
          actions={actions}
          columns={columns}
          dataSource={getData}
          rowSelection
        />
        <AutoTable.DrawerPanel formItems={formItems} />
        <AutoTable.PaginationPanel />
      </AutoTable>
      <div onClick={() => table.refreshTable()}>刷新</div>
    </>
  );
};
