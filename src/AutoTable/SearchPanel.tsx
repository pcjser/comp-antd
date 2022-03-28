import React, { FC } from 'react';
import { Form, Row, Col, Space, Button, Select, Input } from 'antd';

import { SearchPanelProps } from './interface';

// const ConditionItem = ({ type, onComponent, placeholder, ...rest }) => {
//   if (onComponent) return onComponent(rest);

//   switch (type) {
//     case 'select': {
//       const { data, ...res } = rest;
//       return (
//         <Select placeholder={placeholder ?? '请选择'} {...res}>
//           {data?.map(({ label, value }) => (
//             <Select.Option value={value}>{label}</Select.Option>
//           ))}
//         </Select>
//       );
//     }
//     default:
//       return <Input {...rest} placeholder={placeholder ?? '请输入'} />;
//   }
// };

const SearchPanel: FC<SearchPanelProps> = ({
  conditions,
  col = 6,
  // search,
  // pagination,
  // setSearch,
  // initialValues,
  // onResetAfter,
}) => {
  const [form] = Form.useForm();

  console.log(form);

  // useEffect(() => {
  //   if (initialValues) {
  //     form.setFieldsValue(initialValues);
  //     setSearch({ ...search, ...initialValues });
  //   }
  // }, [initialValues]);

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
  };

  const handleReset = () => {
    //   form.resetFields();
    //   if (initialValues) form.setFieldsValue(initialValues);
    //   onResetAfter && onResetAfter();
  };

  return (
    <Form form={form} name="search-form">
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

SearchPanel.displayName = 'SearchPanel';

export default SearchPanel;
