import React from 'react';
import { MapSelect } from 'comp-antd';
import { Form, Button, Space } from 'antd';

const DATA = [
  {
    label: 'Jack',
    value: 'Jack',
  },
  {
    label: 'Lucy',
    value: 'Lucy',
  },
  {
    label: 'Rose',
    value: 'Rose',
  },
  {
    label: 'Windy',
    value: 'Windy',
  },
];

export default () => {
  const [form] = Form.useForm();

  return (
    <Form form={form}>
      <Form.Item name="uname" label="姓名">
        <MapSelect data={DATA} style={{ width: 200 }} />
      </Form.Item>
      <Space>
        <Button
          type="default"
          onClick={() =>
            form.setFieldsValue({
              uname: 'Lucy',
            })
          }
        >
          赋值
        </Button>
        <Button type="primary" onClick={() => console.log(form.getFieldValue('uname'))}>
          取值
        </Button>
        <Button type="dashed" onClick={() => form.resetFields()}>
          重置
        </Button>
      </Space>
    </Form>
  );
};
