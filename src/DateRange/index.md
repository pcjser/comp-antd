---
title: DateRange 时间范围选择器
nav:
  title: 组件
  path: /components
group:
  path: /components
---

# DateRange 时间范围选择器

时间选择器用于时间范围选择和单个时间选择

## 基础使用

<code src="./demos/index.tsx" />

## API

#### DateRange

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| dataSource | 下拉列表渲染的数据 | { label: string, value: string }[] \| Promise<{ label: string, value: string }[]> | - |  |
| unique | 字典唯一标识，在使用 Promise 方式获取数据时有效，设置此属性会根据`unique`值本地暂存数据，以减少数据请求 | string | - |  |
| showLabel | 通过选中的值来展示对应的 label 值，值为数组时需结合`mode=multiple`使用 | string \| string[] | - |  |
| separator | label 值展示的分割符，设置`showLabel`值且值为数组时生效 | string | `,` |  |
| mode | 设置 MapSelect 的选择模式，单选或者多选 | `multiple` \| `default` | `default` |  |
| placeholder | 选择框默认文本 | string | `请选择` |  |
| value | 指定当前选中的条目，多选时为一个数组 | string \| string[] | - |  |
| defaultValue | 指定默认选中的条目，多选时为一个数组 | string \| string[] | - |  |
| onChange | 选中 option，或 input 的 value 变化时，调用此函数 | (value, option:Option \| Option[]) => void | - |  |
