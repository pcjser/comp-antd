import { Button, Row, Space } from 'antd';
import * as React from 'react';
import { OperationPanelProps } from './hooks/interface';

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

  const { openAction } = autoTableContext.getInternalHooks();

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
          }
        })}
        {/* {operations.includes('create') && (
          <Button type="primary" onClick={onCreate}>
            新增
          </Button>
        )} */}
        {/* {operationExtends.map(({ label, operate, show }) => {
          return show === false ? null : (
            <Button
              onClick={() =>
                operate(search, selectedRows, (current, freshParams) =>
                  setSearch({
                    ...search,
                    ...freshParams,
                    current: current ?? search.current,
                  }),
                )
              }
            >
              {label}
            </Button>
          );
        })} */}
      </Space>
    </Row>
  );
};

OperationPanel.displayName = 'OperationPanel';

export default OperationPanel;
