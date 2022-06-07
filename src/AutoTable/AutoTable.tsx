import * as React from 'react';
import { AutoTableInstance, AutoTableProps } from './interface';
import useAutoTable from './useAutoTable';
import AutoTableContext from './AutoTableContext';

const AutoTable: React.ForwardRefRenderFunction<AutoTableInstance, AutoTableProps> = (
  { table, children },
  ref,
) => {
  const [autoTableInstance] = useAutoTable(table);

  // const { getDataSource } = (autoTableInstance as AutoTableInstance).getInternalHooks();

  // console.log(getDataSource());

  // React.useImperativeHandle(ref, () => autoTableInstance);

  console.log(7777);

  React.useEffect(() => {
    // initialTable();
    // const name = 'demo';
    // autoTableContext.registerAutoTable(name, autoTableInstance);
    // return () => {
    //   autoTableContext.unregisterAutoTable(name);
    // };
  }, []);

  return (
    <AutoTableContext.Provider value={autoTableInstance}>{children}</AutoTableContext.Provider>
  );
};

export default AutoTable;
