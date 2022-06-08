import React from 'react';
import AutoTable from './AutoTable';
import { AutoTableInstance, AutoTableProps } from './interface';

import ConditionPanel from './ConditionPanel';
import ModalPanel from './ModalPanel';
import TablePanel from './TablePanel';
import PaginationPanel from './PaginationPanel';

import useAutoTable from './useAutoTable';

// const AutoTable = () => (
//   <div>7777</div>
// )

const InternalAutoTable = React.forwardRef<AutoTableInstance, AutoTableProps>(AutoTable) as <
  Values = any,
>(
  props: React.PropsWithChildren<AutoTableProps<Values>> & {
    ref?: React.Ref<AutoTableInstance<Values>>;
  },
) => React.ReactElement;

type InternalAutoTableType = typeof InternalAutoTable;

interface RefAutoTableType extends InternalAutoTableType {
  useAutoTable: typeof useAutoTable;
}

const RefAutoTable: RefAutoTableType = InternalAutoTable as RefAutoTableType;

RefAutoTable.TablePanel = TablePanel;
// RefAutoTable.ConditionPanel = (props) => {console.log(props); return <ConditionPanel pkey="condition" {...props} />};
RefAutoTable.ConditionPanel = ConditionPanel;
RefAutoTable.ModalPanel = ModalPanel;
RefAutoTable.PaginationPanel = PaginationPanel;

RefAutoTable.useAutoTable = useAutoTable;

export default RefAutoTable;

// import React, { Children, cloneElement, FC, useState, ReactElement } from 'react';
// import { Layout, message } from 'antd';
// // import { Table, Space, Button, Popconfirm, TableProps } from 'antd';
// // import { ColumnProps, ColumnsType } from 'antd/lib/table';
// // import { useAsyncEffect } from 'ahooks';

// import { AutoTableProps } from './interface';
// import useTable, { AutoTableInstance } from './hooks/useTable';

// import SearchPanel from './SearchPanel';
// // import AdvancedSearchPanel from './AdvancedSearchPanel';
// // import OperationPanel from './OperationPanel';
// import TablePanel from './TablePanel';
// // import PaginationPanel from './PaginationPanel';
// // import DrawerPanel from './DrawerPanel';
// // import ModalPanel from './ModalPanel';

// // import './index.css';

// // const ExtensionPanel = ({ onComponent, ...rest }) => {
// //     if (onComponent) return onComponent(rest);
// //     return null;
// // };

// const InternalTable = ({
//   // tableFetchAfter = (data) => data,
//   // rowKey = 'id',
//   table,
//   children,
// }: AutoTableProps) =>
//   // ref,
//   {
//     // const [wrapTable] = useTable(table);

//     // React.useImperativeHandle(ref, () => wrapTable);
//     // const [pagination] = useState(children?.some((item) => item?.key === 'pagination'));
//     // const [initialCondition] = useState(
//     //   children?.filter((item) => item.key === 'condition')[0]?.props?.initialValues,
//     // // );
//     // const [search, setSearch] = useState<object>(
//     //   // pagination ? { pageSize: 10, current: 1, ...initialCondition } : { ...initialCondition },
//     //   {},
//     // );
//     // const [dataSource, setDataSource] = useState<Array<object>>([]);
//     // const [operate, setOperate] = useState(null); // 用户触发新增/修改
//     // const [record, setRecord] = useState(null); // 当前记录
//     // const [selectedRows, setSelectedRows] = useState([]);
//     // const [selectedRowKeys, setSelectedRowKeys] = useState([]);

//     // useEffect(() => {
//     //   if (tableFetch)
//     //     (async () => {
//     //       const data = await tableFetch(search);
//     //       setDataSource(tableFetchAfter(data));
//     //     })();
//     // }, [search]);

//     // const onClose = () => {
//     //     setOperate(null);
//     // };

//     // const onCreate = () => {
//     //     setOperate('create');
//     // };

//     // const submitCreate = async (values) => {
//     //     await apiMap.create(
//     //         apiMap.createFetchBefore
//     //             ? apiMap.createFetchBefore({ ...values })
//     //             : values
//     //     );
//     //     message.success('创建成功');
//     //     setSearch(pagination ? { ...search, current: 1 } : { ...search });
//     //     onClose();
//     // };

//     // const onDelete = async (_record) => {
//     //     let params = {};
//     //     params[rowKey] = _record[rowKey];
//     //     await apiMap.delete(
//     //         apiMap.deleteFetchBefore
//     //             ? apiMap.deleteFetchBefore({ ...params })
//     //             : params
//     //     );
//     //     message.success('删除成功');
//     //     setSearch(pagination ? { ...search, current: 1 } : { ...search });
//     // };

//     // const onRetrieve = async (_record) => {
//     //     let params = {};
//     //     params[rowKey] = _record[rowKey];
//     //     let data = await apiMap.retrieve(
//     //         apiMap.retrieveFetchBefore
//     //             ? apiMap.retrieveFetchBefore({ ...params })
//     //             : params
//     //     );
//     //     if (apiMap.retrieveFetchAfter) data = apiMap.retrieveFetchAfter(data);
//     //     setRecord({ ..._record, ...data });
//     //     setOperate('retrieve');
//     // };

//     // const onUpdate = async (_record) => {
//     //     const params = {};
//     //     params[rowKey] = _record[rowKey];
//     //     let data = await apiMap.retrieve(
//     //         apiMap.retrieveFetchBefore
//     //             ? apiMap.retrieveFetchBefore({ ...params })
//     //             : params
//     //     );
//     //     if (apiMap.retrieveFetchAfter) data = apiMap.retrieveFetchAfter(data);
//     //     setRecord({ ..._record, ...data });
//     //     setOperate('update');
//     // };

//     // const submitUpdate = async (values) => {
//     //     const params = {};
//     //     params[rowKey] = record[rowKey];
//     //     let data = { ...params, ...values };
//     //     await apiMap.update(
//     //         apiMap.updateFetchBefore
//     //             ? apiMap.updateFetchBefore({ ...data })
//     //             : data
//     //     );
//     //     message.success('更新成功');
//     //     setSearch({ ...search });
//     //     onClose();
//     // };

//     return (
//       <div>
//         {Children.map(children, (child) => {
//           return child
//             ? cloneElement(child as ReactElement, {
//                 // rowKey,
//                 // search,
//                 // apiMap,
//                 // setSearch,
//                 // dataSource,
//                 // operate,
//                 // record,
//                 // pagination,
//                 // setOperate,
//                 // selectedRows,
//                 // setSelectedRows,
//                 // selectedRowKeys,
//                 // setSelectedRowKeys,
//                 // onClose,
//                 // onCreate,
//                 // submitCreate,
//                 // onUpdate,
//                 // submitUpdate,
//                 // onDelete,
//                 // onRetrieve,
//                 // ...rest,
//               })
//             : null;
//         })}
//       </div>
//     );
//   };

// // ProTable.ConditionSearchPanel = (props) => (
// //     <ConditionSearchPanel key="condition" {...props} />
// // );
// // ProTable.AdvancedSearchPanel = (props) => (
// //     <AdvancedSearchPanel key="advanced" {...props} />
// // );
// // ProTable.OperationPanel = (props) => (
// //     <OperationPanel key="operation" {...props} />
// // );

// // AutoTable.TablePanel = (props: TablePanelProps) => <TablePanel key="table" {...props} />;
// // ProTable.PaginationPanel = (props) => (
// //     <PaginationPanel key="pagination" {...props} />
// // );
// // ProTable.DrawerPanel = (props) => <DrawerPanel key="drawer" {...props} />;
// // ProTable.ModalPanel = (props) => <ModalPanel key="modal" {...props} />;
// // ProTable.ExtensionPanel = (props) => (
// //     <ExtensionPanel key="extension" {...props} />
// // );

// // const AutoTable = React.forwardRef<AutoTableInstance, AutoTableProps>(InternalTable) as (
// //   props: React.PropsWithChildren<AutoTableProps> & { ref?: React.Ref<AutoTableInstance> },
// // ) => React.ReactElement;

// // AutoTable.SearchPanel = SearchPanel;
// // AutoTable.TablePanel = TablePanel;

// InternalTable.useTable = useTable;

// InternalTable.displayName = 'AutoTable';

// export default InternalTable;
