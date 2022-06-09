import { Pagination, Row } from 'antd';
import * as React from 'react';
import AutoTableContext from './hooks/context';
import { PaginationPanelProps } from './hooks/interface';

const PaginationPanel: React.FC<PaginationPanelProps> = ({
  defaultCurrent = 1,
  defaultPageSize = 10,
  disabled,
  hideOnSinglePage,
  pageSizeOptions,
  showSizeChanger,
  responsive,
  showQuickJumper,
  showTotal,
  simple,
  size = 'default',
}) => {
  const autoTableContext = React.useContext(AutoTableContext);

  const { pagination, setPagination, setCondition } = autoTableContext.getInternalHooks();

  React.useEffect(() => {
    // console.log('PaginationPanel');
    setPagination({ current: defaultCurrent, pageSize: defaultPageSize });
    setCondition({ current: defaultCurrent, pageSize: defaultPageSize });
  }, []);

  return (
    <Row justify="end" style={{ marginTop: 20, marginBottom: 20 }}>
      <Pagination
        onChange={(current, pageSize) => setCondition({ current, pageSize })}
        showTitle={false}
        disabled={disabled}
        hideOnSinglePage={hideOnSinglePage}
        pageSizeOptions={pageSizeOptions}
        showSizeChanger={showSizeChanger}
        responsive={responsive}
        showQuickJumper={showQuickJumper}
        showTotal={showTotal}
        simple={simple}
        size={size}
        {...pagination}
      />
    </Row>
  );
};

export default PaginationPanel;
