import React from 'react';
import { DateRange } from 'comp-antd';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical">
    <DateRange picker="year" style={{ width: 400 }} onChange={console.log} />
    <DateRange picker="month" style={{ width: 400 }} onChange={console.log} />
    <DateRange picker="date" style={{ width: 400 }} onChange={console.log} />
    <DateRange picker="hour" style={{ width: 400 }} onChange={console.log} />
    <DateRange picker="minute" style={{ width: 400 }} onChange={console.log} />
    <DateRange picker="second" style={{ width: 400 }} onChange={console.log} />
  </Space>
);
