import { Button, message, Row, Space } from 'antd';
import * as React from 'react';
import { Action, OperationPanelProps } from './hooks/interface';

import AutoTableContext from './hooks/context';

const OperationPanel: React.FC<OperationPanelProps> = ({
  operations = [],
  //   selectedRows,
  //   operationExtends = [],
  //   search,
  //   setSearch,
  //   onCreate,
  //   operateExtra,
}) => {
  const autoTableContext = React.useContext(AutoTableContext);

  const { openAction, unique, selectedRows, condition, setCondition } =
    autoTableContext.getInternalHooks();

  const handleDelete = async (operation: Action) => {
    if (operation && operation.dataSource) {
      await operation.dataSource(selectedRows.map((item) => item[unique]));
      message.success('删除成功');
      setCondition({ current: 1 });
    } else {
      message.error('请添加action.dataSource属性');
    }
  };

  const handleExport = async (operation: Action) => {
    if (operation && operation.dataSource) {
      await operation.dataSource(condition);
      message.success('导出成功');
    } else {
      message.error('请添加action.dataSource属性');
    }
  };

  return (
    <Row style={{ marginBottom: 20, justifyContent: 'end' }}>
      {/* <div>{operateExtra}</div> */}
      <Space>
        {operations.map((operation) => {
          switch (operation.action) {
            case 'create':
              return (
                <Button type="primary" key="create" onClick={() => openAction(operation, null)}>
                  {operation.label ?? '新增'}
                </Button>
              );
            case 'delete':
              return (
                <Button key="delete" onClick={() => handleDelete(operation)}>
                  {operation.label ?? '批量删除'}
                </Button>
              );
            case 'export':
              return (
                <Button key="export" onClick={() => handleExport(operation)}>
                  {operation.label ?? '导出表格'}
                </Button>
              );
            case 'extend':
              return (
                <Button
                  key={`extend-${operation.label}`}
                  onClick={() => {
                    operation.extendOperation && operation.extendOperation(selectedRows, condition);
                  }}
                >
                  {operation.label ?? '请补充action.label'}
                </Button>
              );
          }
        })}
      </Space>
    </Row>
  );
};

OperationPanel.displayName = 'OperationPanel';

export default OperationPanel;
