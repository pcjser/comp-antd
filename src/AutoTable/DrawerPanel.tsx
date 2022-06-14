import { Button, Drawer, Form, message, Space } from 'antd';
import React, { useEffect } from 'react';

import AutoTableContext from './hooks/context';
import { Action, ModalPanelProps } from './hooks/interface';

const ModalPanel: React.FC<ModalPanelProps> = ({ formItems }) => {
  const autoTableContext = React.useContext(AutoTableContext);

  const { unique, record, action, closeAction, refreshTable, setCondition } =
    autoTableContext.getInternalHooks();

  const [form] = Form.useForm();

  useEffect(() => {
    console.log('ModalPanel====================================>useEffect');
    if (action?.action === 'create') form.resetFields();
    else form.setFieldsValue(record);
  }, [record, action]);

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
      <Space style={{ display: 'flex', justifyContent: 'end' }}>
        {action.action === 'create' && (
          <Button type="primary" onClick={handleCreate}>
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
        } else {
          message.error('请添加action.dataSource属性');
        }
      })
      .catch(() => message.warning('请先完善表单内容'));
  };

  const handleCreate = () => {
    form
      .validateFields()
      .then(async (values) => {
        if (action && action.dataSource) {
          await action.dataSource(values);
          message.success('新增成功');
          setCondition({ current: 1 });
          closeAction();
        } else {
          message.error('请添加action.dataSource属性');
        }
      })
      .catch(() => message.warning('请先完善表单内容'));
  };

  return (
    <Drawer
      visible={Boolean(action)}
      title={titleFilter(action)}
      footer={footerFilter(action)}
      maskClosable={false}
      closable={false}
    >
      <Form form={form} disabled={action?.action === 'retrieve'}>
        {formItems(form, action as Action, record as Record<string, any>)}
      </Form>
    </Drawer>
  );
};

ModalPanel.displayName = 'ModalPanel';

export default ModalPanel;
