import React from 'react';
import { DateRange } from 'comp-antd';
import { Space } from 'antd';

export default () => (
  <Space>
    <DateRange style={{ width: 400 }} onChange={console.log} />
    {/* <DateRange onChange={console.log} /> */}
    {/* <DateRange format="YYYY-MM-DD HH:mm:ss" onChange={console.log} /> */}
  </Space>
);
