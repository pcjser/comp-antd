import { ConfigProvider } from 'antd';
import * as React from 'react';
import AutoTableContext from './hooks/context';
import { AutoTableInstance, AutoTableProps } from './hooks/interface';
import useAutoTable from './hooks/useAutoTable';

import zhCN from 'antd/es/locale/zh_CN';

const AutoTable: React.ForwardRefRenderFunction<AutoTableInstance, AutoTableProps> = ({
  table,
  // initialCondition,
  children,
}) =>
  // ref,
  {
    const [autoTableInstance] = useAutoTable(table);

    // const { setCondition } = (autoTableInstance as AutoTableInstance).getInternalHooks();

    // React.Children.forEach(children, child => window.console.log(child.props));

    // const initialValues =
    // (children.length ? children : [children]).filter(
    //     item => item.key === "condition"
    // )[0]?.props?.initialValues ?? {};

    // console.log(initialValues);

    React.useEffect(() => {
      // console.log("AutoTable =>>>>>>>>>>>>>>>>>>>>")
      // if (initialCondition) setCondition(initialCondition);
      // console.log(initialCondition, '99999999999999999999');
      // console.log('AutoTable');
    }, []);

    // console.log(getDataSource());

    // React.useImperativeHandle(ref, () => autoTableInstance);

    // console.log(7777);

    // React.useEffect(() => {
    //   // initialTable();
    //   // const name = 'demo';
    //   // autoTableContext.registerAutoTable(name, autoTableInstance);
    //   // return () => {
    //   //   autoTableContext.unregisterAutoTable(name);
    //   // };
    // }, []);

    return (
      <AutoTableContext.Provider value={autoTableInstance}>
        <ConfigProvider locale={zhCN}>
          {React.Children.map(children, (child) => {
            return child
              ? React.cloneElement(child as React.ReactElement, {
                  // initialCondition,
                  // search,
                  // apiMap,
                  // setSearch,
                  // dataSource,
                  // operate,
                  // record,
                  // pagination,
                  // setOperate,
                  // selectedRows,
                  // setSelectedRows,
                  // selectedRowKeys,
                  // setSelectedRowKeys,
                  // onClose,
                  // onCreate,
                  // submitCreate,
                  // onUpdate,
                  // submitUpdate,
                  // onDelete,
                  // onRetrieve,
                  // ...rest,
                })
              : null;
          })}
        </ConfigProvider>
      </AutoTableContext.Provider>
    );
  };

AutoTable.displayName = 'AutoTable';

export default AutoTable;
