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

<API></API>

<!-- 除以上 API 外，倒计时按钮还支持 Button 组件（Ant Design）的所有 API 。 -->
