import { Button, Col, Form, Row, Space } from 'antd';
import * as React from 'react';
import AutoTableContext from './hooks/context';
import { ConditionPanelProps } from './hooks/interface';

// // const ConditionItem = ({ type, onComponent, placeholder, ...rest }) => {
// //   if (onComponent) return onComponent(rest);

// //   switch (type) {
// //     case 'select': {
// //       const { data, ...res } = rest;
// //       return (
// //         <Select placeholder={placeholder ?? '请选择'} {...res}>
// //           {data?.map(({ label, value }) => (
// //             <Select.Option value={value}>{label}</Select.Option>
// //           ))}
// //         </Select>
// //       );
// //     }
// //     default:
// //       return <Input {...rest} placeholder={placeholder ?? '请输入'} />;
// //   }
// // };

const ConditionPanel: React.FC<ConditionPanelProps> = ({
  conditions,
  col = 6,
  initialCondition,
  onSearch,
  onReset,
  ...rest
}) => {
  const autoTableContext = React.useContext(AutoTableContext);

  const [form] = Form.useForm();

  const { setCondition } = autoTableContext.getInternalHooks();

  // console.log('ConditionPanel==============================>render');
  React.useEffect(() => {
    console.log('ConditionPanel==============================>useEffect');
    if (initialCondition) {
      form.setFieldsValue(initialCondition);
      setCondition(initialCondition);
    }
  }, [initialCondition]);

  const handleSubmit = () => {
    setCondition({ ...form.getFieldsValue(), current: 1 });
    onSearch && onSearch();
  };

  const handleReset = () => {
    form.resetFields();
    form.setFieldsValue(initialCondition);
    onReset && onReset();
  };

  return (
    <Form form={form}>
      <Row gutter={col}>
        {conditions.map(({ name, label, icol = col, component }) => (
          <Col span={icol} key={name}>
            <Form.Item name={name} label={label}>
              {component}
            </Form.Item>
          </Col>
        ))}
        <Col
          offset={24 - (col + (conditions.reduce((t, v) => t + (v.icol || col), 0) % 24))}
          span={col}
          style={{ textAlign: 'right' }}
        >
          <Space>
            <Button type="primary" onClick={handleSubmit}>
              搜索
            </Button>
            <Button onClick={handleReset}>重置</Button>
          </Space>
        </Col>
      </Row>
    </Form>
  );
};

ConditionPanel.displayName = 'ConditionPanel';

export default ConditionPanel;
