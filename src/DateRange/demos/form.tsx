import React from 'react';
import { DateRange } from 'comp-antd';
import { Form, Button, Space } from 'antd';

export default () => {
  const [form] = Form.useForm();

  return (
    <Form form={form}>
      <Form.Item name="time" label="时间">
        <DateRange />
      </Form.Item>
      <Space>
        <Button
          type="default"
          onClick={() =>
            form.setFieldsValue({
              time: ['2021-12-05', '2022-03-12'],
            })
          }
        >
          赋值
        </Button>
        <Button type="primary" onClick={() => console.log(form.getFieldValue('time'))}>
          取值
        </Button>
        <Button type="dashed" onClick={() => form.resetFields()}>
          重置
        </Button>
      </Space>
    </Form>
  );
};
