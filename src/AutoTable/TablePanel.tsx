import React from 'react';
import { Table, Space, Button, Popconfirm, TableProps } from 'antd';

interface TablePanelProps extends Omit<TableProps<Record<string, any>>, ''> {
  serial?: boolean;
}

const TablePanel = ({
  serial = true,
  size = 'middle',
  scroll = {
    // y: window.innerHeight - 402,
    x: 'max-content',
  },
  columns = [],
  // actions = [],
  // actionExtends = [],
  // rowkey,
  // selection,
  // tableData,
  // selectedRowKeys,
  // setSelectedRowKeys,
  // setSelectedRows,
  // onRetrieve,
  // onUpdate,
  // onDelete,
  // search,
  // setSearch,
  // pagination,
  ...rest
}: TablePanelProps) => {
  // const actionAassemble = (record) => {
  //   return (
  //     <Space size={0}>
  //       {actions.map((type) => {
  //         switch (type.value) {
  //           case 'retrieve':
  //             return (
  //               <Button type="link" key="retrieve" onClick={() => onRetrieve(record)}>
  //                 {type.label}
  //               </Button>
  //             );
  //           case 'update':
  //             return (
  //               <Button type="link" key="update" onClick={() => onUpdate(record)}>
  //                 {type.label}
  //               </Button>
  //             );
  //           case 'delete':
  //             return (
  //               <Popconfirm
  //                 title="确定要删除此条数据？"
  //                 key="delete"
  //                 onConfirm={() => onDelete(record)}
  //               >
  //                 <Button type="link">{type.label}</Button>
  //               </Popconfirm>
  //             );
  //           default:
  //             return null;
  //         }
  //       })}
  //       {actionExtends.map(({ label, action }) => (
  //         <Button
  //           type="link"
  //           key={label}
  //           onClick={() =>
  //             action(record, (current) =>
  //               setSearch({
  //                 ...search,
  //                 current: current ?? search.current,
  //               }),
  //             )
  //           }
  //         >
  //           {label}
  //         </Button>
  //       ))}
  //     </Space>
  //   );
  // };

  // const handleSelectChange = (keys, rows) => {
  //   setSelectedRows(rows);
  //   setSelectedRowKeys(keys);
  // };

  // if (serial)
  //   columns = [
  //     {
  //       title: '序号',
  //       width: 60,
  //       render: (_, record, index) => index + 1,
  //     },
  //     ...columns,
  //   ];
  // if (actions?.length > 0 || actionExtends.length > 0)
  //   columns = [
  //     ...columns,
  //     {
  //       title: '操作',
  //       key: 'oprate',
  //       width: 10 * actions.length,
  //       render: actionAassemble,
  //     },
  //   ];

  return (
    <Table
      // rowSelection={
      //   selection && {
      //     selectedRowKeys,
      //     onChange: handleSelectChange,
      //   }
      // }
      // rowKey={(item) => item[rowKey]}
      columns={columns}
      // dataSource={tableData?.data}
      // loading={!Boolean(tableData?.data)}
      pagination={false}
      // size={size}
      scroll={scroll}
      {...rest}
    />
  );
};

export default TablePanel;