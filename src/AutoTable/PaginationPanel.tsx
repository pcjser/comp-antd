import * as React from 'react';
import { Pagination } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import AutoTableContext from './AutoTableContext';

const PaginationPanel = ({}) => {
  const autoTableContext = React.useContext(AutoTableContext);

  const { pagination, condition, setCondition } = autoTableContext.getInternalHooks();

  React.useEffect(() => {
    console.log('PaginationPanel');

    // form.setFieldsValue(record);
  }, []);

  return (
    <Pagination
      locale={zh_CN}
      onChange={(current, pageSize) => setCondition({ ...condition, current, pageSize })}
      current={pagination.current}
      total={pagination.total}
    />
  );
};

export default PaginationPanel;
