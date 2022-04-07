import * as React from 'react';
import { AutoTableInstance, AutoTableProps } from './interface';
import useAutoTable from './useAutoTable';
// import type { AutoTableContextProps } from './AutoTableContext';
import AutoTableContext from './AutoTableContext';

const AutoTable: React.ForwardRefRenderFunction<AutoTableInstance, AutoTableProps> = (
  { table, children },
  ref,
) => {
  // const autoTableContext: AutoTableContextProps = React.useContext(AutoTableContext);

  const [autoTableInstance] = useAutoTable(table);

  const { getDataSource } = (autoTableInstance as AutoTableInstance).getInternalHooks();

  console.log(getDataSource());

  React.useImperativeHandle(ref, () => autoTableInstance);

  React.useEffect(() => {
    // initialTable();
    //   // const name = 'demo';
    //   // autoTableContext.registerAutoTable(name, autoTableInstance);
    //   // return () => {
    //   //   autoTableContext.unregisterAutoTable(name);
    //   // };
  }, []);

  return <div>{JSON.stringify(getDataSource())}</div>;
};

export default AutoTable;
