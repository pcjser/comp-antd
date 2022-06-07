import React, { useEffect, useState } from 'react';
import { Table, Space, Button, Popconfirm } from 'antd';
import useAutoTable from './useAutoTable';
import { AutoTableInstance, AutoTableProps } from './interface';

import AutoTableContext from './AutoTableContext';

const TablePanel = ({ columns, dataSource, serial, actions, ...rest }) => {
  const autoTableContext = React.useContext(AutoTableContext);

  // console.log(dataSource)
  const [loading, setLoading] = useState(false);

  const [autoTableInstance] = useAutoTable();

  const { getTableList, setTableList, handleRetrieve, setModalStatus } =
    autoTableContext.getInternalHooks();

  const actionAassemble = (record) => {
    return (
      <Space>
        {actions.map((type) => {
          switch (type.value) {
            case 'retrieve':
              return (
                <Button
                  type="link"
                  key="retrieve"
                  onClick={() => {
                    handleRetrieve(record);
                    setModalStatus(true);
                  }}
                >
                  {type.label}
                </Button>
              );
            // case 'update':
            //   return (
            //     <Button type="link" key="update" onClick={() => onUpdate(record)}>
            //       {type.label}
            //     </Button>
            //   );
            // case 'delete':
            //   return (
            //     <Popconfirm
            //       title="确定要删除此条数据？"
            //       key="delete"
            //       onConfirm={() => onDelete(record)}
            //     >
            //       <Button type="link">{type.label}</Button>
            //     </Popconfirm>
            //   );
            default:
              return null;
          }
        })}
        {/* {actionExtends.map(({ label, action }) => (
          <Button
            type="link"
            key={label}
            onClick={() =>
              action(record, (current) =>
                setSearch({
                  ...search,
                  current: current ?? search.current,
                }),
              )
            }
          >
            {label}
          </Button>
        ))} */}
      </Space>
    );
  };

  useEffect(() => {
    if (serial) columns?.unshift({ title: '序号', render: (_, __, index) => index + 1 });
    //   console.log(actions, '=======================');

    // if (actions?.length > 0)
    columns?.push({
      title: '操作',
      key: 'oprate',
      // width: 10 * actions.length,
      render: actionAassemble,
    });

    (async () => {
      setLoading(true);
      const data = await dataSource();
      setLoading(false);
      setTableList(data);
    })();
  }, []);

  return (
    // <div>
    //   <Table columns={columns} dataSource={getDataSource()} />
    //   7777777
    //   <div onClick={() => setDataSource([{ id: 2, name: 'ddddd' }])}>修改</div>
    // </div>
    // <AutoTableContext.Consumer>
    <Table
      // rowSelection={
      //   selection && {
      //     selectedRowKeys,
      //     onChange: handleSelectChange,
      //   }
      // }
      // rowKey={rowKey}
      columns={columns}
      dataSource={getTableList()}
      loading={loading}
      pagination={false}
      // size={size}
      // scroll={scroll}
      {...rest}
    />
    // </AutoTableContext.Consumer>
  );
  // }

  // return (
  //   <div>
  //     <Table columns={columns} dataSource={context.getDataSource()} />
  //  <div onClick={() => context.setDataSource([{ id: 2, name: 'ddddd' }])}>修改</div>
  //   </div>
  // );    7777777
  //
};

export default TablePanel;

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
