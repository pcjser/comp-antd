import { Button, Form, message, Modal, Space } from 'antd';
import React, { useEffect } from 'react';

import AutoTableContext from './hooks/context';
import { Action, ModalPanelProps } from './hooks/interface';

const ModalPanel: React.FC<ModalPanelProps> = ({ formItems }) => {
  const autoTableContext = React.useContext(AutoTableContext);

  const { unique, record, action, closeAction, refreshTable } = autoTableContext.getInternalHooks();

  const [form] = Form.useForm();

  useEffect(() => {
    console.log('ModalPanel====================================>useEffect');

    form.setFieldsValue(record);
  }, [record]);

  const titleFilter = (action: Action | null) => {
    if (!action) return '';
    if (action.title) return action.title;
    switch (action.action) {
      case 'create':
        return '新增';
      case 'retrieve':
        return '查看';
      case 'update':
        return '更新';
    }
  };

  const footerFilter = (action: Action | null) => {
    if (!action) return null;
    return (
      <Space>
        {action.action === 'create' && (
          <Button type="primary" onClick={console.log}>
            新增
          </Button>
        )}
        {action.action === 'update' && (
          <Button type="primary" onClick={handleUpdate}>
            更新
          </Button>
        )}
        <Button onClick={closeAction}>取消</Button>
      </Space>
    );
  };

  const handleUpdate = () => {
    form
      .validateFields()
      .then(async (values) => {
        if (action && action.dataSource) {
          const params: Record<string, any> = {};
          params[unique] = (record as Record<string, any>)[unique];
          let data = { ...params, ...values };
          await action.dataSource(data);
          message.success('更新成功');
          refreshTable();
          closeAction();
        }
      })
      .catch(() => message.warning('请先完善表单内容'));
  };

  return (
    <Modal
      visible={Boolean(action)}
      title={titleFilter(action)}
      footer={footerFilter(action)}
      maskClosable={false}
      closable={false}
    >
      <Form form={form}>{formItems(form, action as Action, record as Record<string, any>)}</Form>
    </Modal>
  );
};

ModalPanel.displayName = 'ModalPanel';

export default ModalPanel;
