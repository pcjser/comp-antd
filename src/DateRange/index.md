---
title: DateRange 时间范围选择器
nav:
  title: 组件
  path: /components
group:
  path: /components
---

# DateRange 时间范围选择器

时间选择器用于时间范围选择

## 范围类型

<code src="./demos/picker.tsx" title="范围类型" desc="通过设置 picker 属性，指定范围选择器类型" />

## 其它属性

<code src="./demos/other.tsx" title="其它属性" desc="" />

## 表单中使用

<code src="./demos/form.tsx" title="表单中使用" desc="支持Form组件（Ant Design）内通过form实例控制使用" />

## API

#### DateRange

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| picker | 设置选择器类型 | `year` \| `month` \| `date` \| `hour` \| `minute` \| `sevond` | `date` |  |
| separator | 时间分割符 | string | `-` |  |
| disabled | 禁用 | boolean | `false` |  |
| locale | 国际化配置 | object | CN |  |
| placeholder | 时间选择框默认为本 | string[] | `["开始时间", "结束时间"]` |  |
| value | 指定当前的时间范围 | string[] | - |  |
| defaultValue | 指定默认的时间范围 | string[] | - |  |
| onChange | 时间范围发生变化时，调用此函数 | (value: undefined \| string[]) => void | - |  |
