import { Button, Col, Form, Row, Space } from 'antd';
import * as React from 'react';

import AutoTableContext from './AutoTableContext';
import { ConditionPanelProps } from './interface';

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
  // search,
  // pagination,
  // setSearch,
  initialCondition,
  ...rest
  // onResetAfter,
}) => {
  console.log(rest);
  const autoTableContext = React.useContext(AutoTableContext);

  const [form] = Form.useForm();

  //   console.log(form);

  const { refresh, condition, setCondition } = autoTableContext.getInternalHooks();

  // if (initialValues) {
  //   form.setFieldsValue({ ...initialValues, ...condition });
  //   // setCondition({ ...condition, ...initialValues });
  //   //   setSearch({ ...search, ...initialValues });
  // }

  React.useEffect(() => {
    // console.log('ConditionPanel');

    if (initialCondition) {
      //   // setInitialValues(initialValues);
      form.setFieldsValue({ ...initialCondition });
      //   //   form.setFieldsValue({ ...initialValues, ...condition });
      setCondition({ ...initialCondition });
      //   //   //   setSearch({ ...search, ...initialValues });
    }
  }, [initialCondition, refresh]);

  const handleSubmit = () => {
    //   setSearch(
    //     pagination
    //       ? {
    //           ...search,
    //           ...form.getFieldsValue(),
    //           current: 1,
    //         }
    //       : {
    //           ...search,
    //           ...form.getFieldsValue(),
    //         },
    //   );
    setCondition({ ...condition, ...form.getFieldsValue() });
  };

  const handleReset = () => {
    //   form.resetFields();
    form.setFieldsValue(initialCondition ?? {});
    //   onResetAfter && onResetAfter();
  };

  return (
    <Form form={form} name="condition-form">
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
