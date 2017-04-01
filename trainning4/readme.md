## 训练4

学习视频，然后完成下列动画和组件开发训练。


### 训练1 —— 数字动画

在很多前端应用中会有数字动画，参考效果如下：

![图1](2.gif)


参考上述效果实现一个动画数字组件。

名称：AnimatedNumber

属性清单:

1. number|String 动画数字
2. fontStyle|Object 字体样式
3. duration|number 最短动画时长。
4. gap|number 每一个数字递增的动画时长。

如gif中的组件应该有如下属性：

``` javascript
<AnimatedNumber
  number="1234"
  fontStyle={{color : 'orange', fontSize : 48, fontWeight : 'bold'}}
  duration={600}
  gap={500}
/>
```
