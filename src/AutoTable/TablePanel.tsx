import { Button, message, Popconfirm, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Action, TablePanelProps } from './hooks/interface';

import AutoTableContext from './hooks/context';

const TablePanel: React.FC<TablePanelProps> = ({
  columns,
  dataSource,
  serial,
  actions,
  unique,
  ...rest
}) => {
  const autoTableContext = React.useContext(AutoTableContext);

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Record<string, any>[]>([]);
  const { setPagination, openAction, setUnique, setCondition, condition } =
    autoTableContext.getInternalHooks();

  const actionAassemble: React.FC<Record<string, any>> = (record) => {
    const labelFilter = (action: Action | null) => {
      if (!action) return '';
      switch (action.action) {
        case 'retrieve':
          return '查看';
        case 'update':
          return '更新';
        case 'delete':
          return '删除';
      }
    };

    return (
      <Space>
        {actions?.map((action) => {
          switch (action.action) {
            case 'retrieve':
              return (
                <Button
                  type="link"
                  key="retrieve"
                  onClick={async () => {
                    if (action.dataSource) {
                      const data = await action.dataSource(record[unique]);
                      record = { ...record, ...data };
                    }
                    openAction(action, record);
                  }}
                >
                  {labelFilter(action)}
                </Button>
              );
            case 'update':
              return (
                <Button type="link" key="update" onClick={() => openAction(action, record)}>
                  {labelFilter(action)}
                </Button>
              );
            case 'delete':
              return (
                <Popconfirm
                  title="确定要删除此条数据？"
                  key="delete"
                  onConfirm={async () => {
                    if (action.dataSource) {
                      await action.dataSource(record[unique]);
                      message.success('删除成功');
                      setCondition({ current: 1 });
                    }
                  }}
                >
                  <Button type="link"> {labelFilter(action)}</Button>
                </Popconfirm>
              );
            default:
              return null;
          }
        })}
        {/* {actionExtends.map(({ label, action }) => (
          <Button
            type="link"
            key={label}
            onClick={() =>
              action(record, (current) =>
                setSearch({
                  ...search,
                  current: current ?? search.current,
                }),
              )
            }
          >
            {label}
          </Button>
        ))} */}
      </Space>
    );
  };

  // let timer = null;

  // console.log('TablePanel==============================>render');
  useEffect(() => {
    console.log('TablePanel==============================>useEffect');

    setUnique(unique);

    (async () => {
      setLoading(true);
      const data = await dataSource(condition);
      setLoading(false);
      if (data.pagination) setPagination(data.pagination);
      setData(data.data);
    })();
  }, [unique, condition]);

  // console.log('condition=======>', condition);

  if (serial)
    columns = [
      {
        title: '序号',
        width: 40,
        render: (_, record, index) => index + 1,
      },
      ...columns,
    ];
  //   console.log(actions, '=======================');

  if (actions && actions.length > 0)
    columns = [
      ...columns,
      {
        title: '操作',
        key: 'oprate',
        render: actionAassemble,
      },
    ];

  return (
    <Table
      // rowSelection={
      //   selection && {
      //     selectedRowKeys,
      //     onChange: handleSelectChange,
      //   }
      // }
      rowKey={unique}
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={false}
      // size={size}
      // scroll={scroll}
      {...rest}
    />
  );
};

TablePanel.displayName = 'TablePanel';

export default TablePanel;
