## 训练5

### 习题1  锻炼阅读源代码的能力
源代码阅读第一步就是要弄清楚技术选型，js项目弄清楚技术选型最快的途径就是看package.json。 题目如下：

1. 查阅react.js和Vue.js源代码，找到package.json。(提示：在github上)
2. 分析package.json中dependencies和devDependencies中所有的依赖， 通过查阅资料（提示: github和npm官网），弄清楚每个依赖的作用。
3. 列一个表格，左边是依赖名称，右边是依赖作用

备注： 和第6周作业一起交


### 习题2 手势和组件封装练习

不使用ViewPager和ScrollView， 结合学过的动画和手势知识，实现一个轮播图组件Swiper。

它会自动让其内容可以水平分页滚动。

使用的时候大概会是这样：

``` jsx

<Swiper>
  <Image ... />
  <Image ... />
</Swiper>
```

### 架构练习
根据RN APP架构(1)中的知识，架构一个APP，保持同样的命名规范。

实现一个列表+详情的页面。

![图1](1.gif)

通过ListView实现一个列表， 可滚动；点击列表项然后跳转到详情。
https://facebook.github.io/react-native/docs/listview.html

简单示意即可。
