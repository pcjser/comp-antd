import React from 'react';
import { DateRange } from 'comp-antd';
import { Space } from 'antd';

export default () => (
  <Space direction="vertical">
    <DateRange disabled />
    <DateRange picker="year" placeholder={['起始年份', '终止年份']} />
    <DateRange separator="/" />
    <DateRange defaultValue={['2021-12-05', '2022-03-12']} />
  </Space>
);
