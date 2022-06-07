import React, { useEffect, useState } from 'react';
import { Modal, Input, Button, Popconfirm, Form } from 'antd';
import useAutoTable from './useAutoTable';
import { AutoTableInstance, AutoTableProps } from './interface';

import type { AutoTableContextProps } from './AutoTableContext';
import AutoTableContext from './AutoTableContext';

const ModalPanel = ({ formItems }) => {
  const autoTableContext = React.useContext(AutoTableContext);

  // console.log(dataSource)
  // const [loading, setLoading] = useState(false);

  // const [autoTableInstance] = useAutoTable();

  // console.log(autoTableInstance);

  const { setModalStatus, showModal, record } = autoTableContext.getInternalHooks();

  console.log(showModal);
  // const actionAassemble = (record) => {
  //   return (
  //     <Space>
  //       {actions.map((type) => {
  //         switch (type.value) {
  //           case 'retrieve':
  //             return (
  //               <Button type="link" key="retrieve" onClick={console.log}>
  //                 {type.label}
  //               </Button>
  //             );
  //           // case 'update':
  //           //   return (
  //           //     <Button type="link" key="update" onClick={() => onUpdate(record)}>
  //           //       {type.label}
  //           //     </Button>
  //           //   );
  //           // case 'delete':
  //           //   return (
  //           //     <Popconfirm
  //           //       title="确定要删除此条数据？"
  //           //       key="delete"
  //           //       onConfirm={() => onDelete(record)}
  //           //     >
  //           //       <Button type="link">{type.label}</Button>
  //           //     </Popconfirm>
  //           //   );
  //           default:
  //             return null;
  //         }
  //       })}
  //       {/* {actionExtends.map(({ label, action }) => (
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
  //       ))} */}
  //     </Space>
  //   );
  // };

  // useEffect(() => {
  //   if (serial) columns?.unshift({ title: '序号', render: (_, __, index) => index + 1 });
  //   //   console.log(actions, '=======================');

  //   // if (actions?.length > 0)
  //   columns?.push({
  //     title: '操作',
  //     key: 'oprate',
  //     // width: 10 * actions.length,
  //     render: actionAassemble,
  //   });

  //   (async () => {
  //     setLoading(true);
  //     const data = await dataSource();
  //     setLoading(false);
  //     setTableList(data);
  //   })();
  // }, []);

  // console.log(showModal)

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(record);
  }, [record]);

  return (
    <>
      <Modal visible={showModal} onCancel={() => setModalStatus(false)}>
        <Form form={form}>{formItems}</Form>
      </Modal>
      {/* <div onClick={() => setModalStatus(true)}>6666</div> */}
    </>
  );
};

export default ModalPanel;
