import React, { useState, Children, cloneElement } from 'react';
import { Layout, message } from 'antd';
// import { useAsyncEffect } from 'ahooks';
// import ConditionSearchPanel from './ConditionSearchPanel';
// import AdvancedSearchPanel from './AdvancedSearchPanel';
// import OperationPanel from './OperationPanel';
import TablePanel from './TablePanel';
// import PaginationPanel from './PaginationPanel';
// import DrawerPanel from './DrawerPanel';
// import ModalPanel from './ModalPanel';

// import './index.css';

// const ExtensionPanel = ({ onComponent, ...rest }) => {
//     if (onComponent) return onComponent(rest);
//     return null;
// };

interface AutoTableProps {
  rowkey?: string;
  children?: React.ReactNode;
}

const AutoTable = ({
  children,
  //  apiMap = {},
  rowkey = 'id',
  ...rest
}: AutoTableProps) => {
  // const [pagination] = useState(
  //     children.some((item) => item.key === 'pagination')
  // );
  // const [initialCondition] = useState(
  //     children.filter((item) => item.key === 'condition')[0]?.props
  //         ?.initialValues
  // );
  // const [search, setSearch] = useState(
  //     pagination
  //         ? { pageSize: 10, current: 1, ...initialCondition }
  //         : { ...initialCondition }
  // );
  // const [tableData, setTableData] = useState({});
  // const [operate, setOperate] = useState(null); // 用户触发新增/修改
  // const [record, setRecord] = useState(null); // 当前记录
  // const [selectedRows, setSelectedRows] = useState([]);
  // const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // useAsyncEffect(async () => {
  //     const data = await apiMap.table(
  //         apiMap.tableFetchBefore
  //             ? apiMap.tableFetchBefore({ ...search })
  //             : search
  //     );
  //     setTableData(
  //         apiMap.tableFetchAfter ? apiMap.tableFetchAfter(data) : data
  //     );
  // }, [search]);

  // const onClose = () => {
  //     setOperate(null);
  // };

  // const onCreate = () => {
  //     setOperate('create');
  // };

  // const submitCreate = async (values) => {
  //     await apiMap.create(
  //         apiMap.createFetchBefore
  //             ? apiMap.createFetchBefore({ ...values })
  //             : values
  //     );
  //     message.success('创建成功');
  //     setSearch(pagination ? { ...search, current: 1 } : { ...search });
  //     onClose();
  // };

  // const onDelete = async (_record) => {
  //     let params = {};
  //     params[rowKey] = _record[rowKey];
  //     await apiMap.delete(
  //         apiMap.deleteFetchBefore
  //             ? apiMap.deleteFetchBefore({ ...params })
  //             : params
  //     );
  //     message.success('删除成功');
  //     setSearch(pagination ? { ...search, current: 1 } : { ...search });
  // };

  // const onRetrieve = async (_record) => {
  //     let params = {};
  //     params[rowKey] = _record[rowKey];
  //     let data = await apiMap.retrieve(
  //         apiMap.retrieveFetchBefore
  //             ? apiMap.retrieveFetchBefore({ ...params })
  //             : params
  //     );
  //     if (apiMap.retrieveFetchAfter) data = apiMap.retrieveFetchAfter(data);
  //     setRecord({ ..._record, ...data });
  //     setOperate('retrieve');
  // };

  // const onUpdate = async (_record) => {
  //     const params = {};
  //     params[rowKey] = _record[rowKey];
  //     let data = await apiMap.retrieve(
  //         apiMap.retrieveFetchBefore
  //             ? apiMap.retrieveFetchBefore({ ...params })
  //             : params
  //     );
  //     if (apiMap.retrieveFetchAfter) data = apiMap.retrieveFetchAfter(data);
  //     setRecord({ ..._record, ...data });
  //     setOperate('update');
  // };

  // const submitUpdate = async (values) => {
  //     const params = {};
  //     params[rowKey] = record[rowKey];
  //     let data = { ...params, ...values };
  //     await apiMap.update(
  //         apiMap.updateFetchBefore
  //             ? apiMap.updateFetchBefore({ ...data })
  //             : data
  //     );
  //     message.success('更新成功');
  //     setSearch({ ...search });
  //     onClose();
  // };

  return (
    <div>
      {Children.map(children, (child) => {
        return child
          ? cloneElement(child as React.ReactElement, {
              rowkey,
              // search,
              // apiMap,
              // setSearch,
              // tableData,
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
              ...rest,
            })
          : null;
      })}
    </div>
  );
};

// ProTable.ConditionSearchPanel = (props) => (
//     <ConditionSearchPanel key="condition" {...props} />
// );
// ProTable.AdvancedSearchPanel = (props) => (
//     <AdvancedSearchPanel key="advanced" {...props} />
// );
// ProTable.OperationPanel = (props) => (
//     <OperationPanel key="operation" {...props} />
// );
AutoTable.TablePanel = (props: object) => <TablePanel key="table" {...props} />;
// ProTable.PaginationPanel = (props) => (
//     <PaginationPanel key="pagination" {...props} />
// );
// ProTable.DrawerPanel = (props) => <DrawerPanel key="drawer" {...props} />;
// ProTable.ModalPanel = (props) => <ModalPanel key="modal" {...props} />;
// ProTable.ExtensionPanel = (props) => (
//     <ExtensionPanel key="extension" {...props} />
// );

export default AutoTable;
