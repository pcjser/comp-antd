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
  rowSelection,
  ...rest
}) => {
  const autoTableContext = React.useContext(AutoTableContext);

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Record<string, any>[]>([]);
  const { setPagination, openAction, setUnique, setCondition, condition, setSelectedRows } =
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
            case 'extend':
              return (
                <Button
                  type="link"
                  key={`extend-${action.label}`}
                  onClick={() => {
                    action.extendAction && action.extendAction(record, condition);
                  }}
                >
                  {action.label ?? '请补充action.label'}
                </Button>
              );
          }
        })}
      </Space>
    );
  };

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

  if (serial)
    columns = [
      {
        title: '序号',
        width: 40,
        render: (_, record, index) => index + 1,
      },
      ...columns,
    ];

  if (actions && actions.length > 0)
    columns = [
      ...columns,
      {
        title: '操作',
        key: 'oprate',
        render: actionAassemble,
      },
    ];

  let props: Record<string, any> = {};

  if (rowSelection) {
    props.rowSelection = {
      ...rowSelection,
      // selectedRowKeys,
      onChange: setSelectedRows,
    };
  }

  return (
    <Table
      rowKey={unique}
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={false}
      // size={size}
      // scroll={scroll}
      {...props}
      {...rest}
    />
  );
};

TablePanel.displayName = 'TablePanel';

export default TablePanel;
