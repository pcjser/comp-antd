// import React, { FC, useEffect, useState } from 'react';
// import { Table, Space, Button, Popconfirm } from 'antd';

// import { TablePanelProps } from './interface';

// const TablePanel: FC<TablePanelProps> = ({
//   columns,
//   serial = true,
//   // size = 'middle',
//   // scroll = {
//   //   // y: window.innerHeight - 402,
//   //   x: 'max-content',
//   // },
//   // actions = [],
//   // actionExtends = [],
//   rowKey,
//   // selection,
//   dataSource,
//   // selectedRowKeys,
//   // setSelectedRowKeys,
//   // setSelectedRows,
//   // onRetrieve,
//   // onUpdate,
//   // onDelete,
//   // search,
//   // setSearch,
//   // pagination,
//   ...rest
// }) => {
//   const [data, setData] = useState<Array<object>>([]);

//   useEffect(() => {
//     if (serial) columns?.unshift({ title: '序号', render: (_, __, index) => index + 1 });

//     (async () => {
//       // setLoading(true);
//       const result = await dataSource;

//       setData(result);
//       // setDataMap(result);
//       // setLoading(false);
//       // if (unique && window?.sessionStorage)
//       //   window.sessionStorage[`map-select-${unique}`] = JSON.stringify(result);
//     })();
//   }, []);

//   // const actionAassemble = (record) => {
//   //   return (
//   //     <Space size={0}>
//   //       {actions.map((type) => {
//   //         switch (type.value) {
//   //           case 'retrieve':
//   //             return (
//   //               <Button type="link" key="retrieve" onClick={() => onRetrieve(record)}>
//   //                 {type.label}
//   //               </Button>
//   //             );
//   //           case 'update':
//   //             return (
//   //               <Button type="link" key="update" onClick={() => onUpdate(record)}>
//   //                 {type.label}
//   //               </Button>
//   //             );
//   //           case 'delete':
//   //             return (
//   //               <Popconfirm
//   //                 title="确定要删除此条数据？"
//   //                 key="delete"
//   //                 onConfirm={() => onDelete(record)}
//   //               >
//   //                 <Button type="link">{type.label}</Button>
//   //               </Popconfirm>
//   //             );
//   //           default:
//   //             return null;
//   //         }
//   //       })}
//   //       {actionExtends.map(({ label, action }) => (
//   //         <Button
//   //           type="link"
//   //           key={label}
//   //           onClick={() =>
//   //             action(record, (current) =>
//   //               setSearch({
//   //                 ...search,
//   //                 current: current ?? search.current,
//   //               }),
//   //             )
//   //           }
//   //         >
//   //           {label}
//   //         </Button>
//   //       ))}
//   //     </Space>
//   //   );
//   // };

//   // const handleSelectChange = (keys, rows) => {
//   //   setSelectedRows(rows);
//   //   setSelectedRowKeys(keys);
//   // };

//   // if (actions?.length > 0 || actionExtends.length > 0)
//   //   columns = [
//   //     ...columns,
//   //     {
//   //       title: '操作',
//   //       key: 'oprate',
//   //       width: 10 * actions.length,
//   //       render: actionAassemble,
//   //     },
//   //   ];

//   return (
//     <Table
//       // rowSelection={
//       //   selection && {
//       //     selectedRowKeys,
//       //     onChange: handleSelectChange,
//       //   }
//       // }
//       rowKey={rowKey}
//       columns={columns}
//       dataSource={data}
//       // loading={!Boolean(tableData?.data)}
//       pagination={false}
//       // size={size}
//       // scroll={scroll}
//       {...rest}
//     />
//   );
// };

// TablePanel.displayName = 'TablePanel';

// export default TablePanel;
