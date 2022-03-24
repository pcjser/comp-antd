import React from 'react';
import { DateRange } from 'comp-antd';
import { Space } from 'antd';

export default () => (
  <Space>
    <DateRange format="YYYY-MM-DD" onChange={console.log} style={{ width: 400 }} />
    <DateRange format="YYYY-MM-DD" onChange={console.log} />
    <DateRange format="YYYY-MM-DD HH:mm:ss" onChange={console.log} />
  </Space>
);
