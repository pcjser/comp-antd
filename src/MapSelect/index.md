---
title: MapSelect 字典下拉框
nav:
  title: 组件
  path: /components
group:
  path: /components
---

# MapSelect 字典下拉框

字典下拉框用于搜索条件，表单提交等枚举选择以及列表展示选中项等场景，除添加的属性外，支持 Select 原有属性

## 静态数据使用

<code src="./demos/data.tsx" title="静态数据使用" desc="Select原有属性支持直接挂载，Option原有属性放在数据项上" />

## 调用接口使用

<code src="./demos/fetch.tsx" title="调用接口使用" desc="通过唯一的unique属性可将fetch得到的数据进行浏览器session缓存" />

## 列表中展示

<code src="./demos/show.tsx" title="列表中展示" desc="通过showLabel属性，通过指定的value值展示对应的label，多个值通过separator值进行分割" />

## 表单中使用

<code src="./demos/form.tsx" title="表单中使用" desc="支持Form组件（Ant Design）内通过form实例控制使用" />

## 支持原有属性

<code src="./demos/extend.tsx" title="支持原有属性" desc="支持Select组件（Ant Design）原有属性" />

## API

#### MapSelect

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| data | 下拉列表渲染的数据 | { label: string, value: string }[] | - |  |
| fetch | 下拉列表渲染的接口，与`data`同时存在时无效 | () => Promise.resolve({ label: string, value: string }[]) | - |  |
| unique | 字典唯一标识，在使用`fetch`方式获取数据时有效，设置此属性会根据`unique`值本地暂存数据，减少数据请求 | string | - |  |
| showLabel | 通过选中的值来展示对应的 label 值，值为数组时需结合`mode=multiple`使用 | string \| string[] | - |  |
| separator | label 值展示的分割符，设置`showLabel`值且值为数组时生效 | string | `,` |  |
| mode | 设置 MapSelect 的模式为多选 | `multiple` \| `default` | `default` |  |
| placeholder | 选择框默认文本 | string | `请选择` |  |
| value | 指定当前选中的条目，多选时为一个数组 | string \| string[] | - |  |
| defaultValue | 指定默认选中的条目，多选时为一个数组 | string \| string[] | - |  |
| onChange | 选中 option，或 input 的 value 变化时，调用此函数 | (value, option:Option \| Array\<Option\>) => void | - |  |

除以上 API 外，字典下拉框还支持 Select 组件（Ant Design）其它常用 API 。
