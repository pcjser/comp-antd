import { Pagination } from 'antd';
import * as React from 'react';
import AutoTableContext from './AutoTableContext';

const PaginationPanel = ({}) => {
  const autoTableContext = React.useContext(AutoTableContext);

  const { pagination, condition, setCondition } = autoTableContext.getInternalHooks();

  React.useEffect(() => {
    console.log('PaginationPanel', condition, pagination);

    // form.setFieldsValue(record);
    setCondition(pagination);
  }, []);

  return (
    <>
      {JSON.stringify(pagination)}
      <Pagination
        onChange={(current, pageSize) => setCondition({ ...condition, current, pageSize })}
        current={pagination.current}
        total={pagination.total}
        pageSize={pagination.pageSize}
        showSizeChanger
      />
    </>
  );
};

export default PaginationPanel;
