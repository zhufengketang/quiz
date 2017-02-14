### 作业概述
在课程覆盖的几个月中，每周都有作业。每一次作业都有1+道Javascript算法练习。 这是为了让大家更好的学习Javascript。


### 要求
- 2-3人组成一个讨论小组
- 作业还是以个人为单位交
- 最晚周日发邮件到


### 内容

#### 题目1 ： （算法练习）javascript算法练习
写一个javascript函数除去数组中的最高和最低元素，然后求和
```
[ 6, 2, 1, 8, 10 ] => 16
[ 1, 1, 11, 2, 3 ] => 6
```
填充下面函数的内容
``` javascript
function sumArray(array) {
  /// TODO 算法写这里
}

```

#### 题目2： （环境配置训练+单元测试学习）和小组成员讨论并完成下列单元测试
首先找到一个目录，创建一个package.json文件
``` javascript
{
  "name" : "quiz1"
}
```
然后安装单元测试工具
```
npm install mocha -g
npm install chai --save
```
然后创建一个quiz1.js文件,其中附上写好的sumArray函数
```
function sumArray(array) {
  /// TODO 算法写这里
  
}

module.exports = sumAarray
```
然后创建一个单元测试文件quiz1.test.js，内容如下
```
var asset = require("chai")
describe("sumArray测试", function() {
  it("基础用法", function(){
    assert.equal(sumArray(null), 0)
    assert.equal(sumArray([ ]), 0)
    assert.equal(sumArray([ 6, 2, 1, 8, 10 ]), 16)
    assert.equal(sumArray([ -6, -20, -1, -10, -12  ]), -28)
    assert.equal(sumArray([  -7, -5, -2, -1, 0, 1, 2, 3, 3, 4, 6, 6, 9, 9, 10, 10, 10, 13, 15, 16, 19, 20, 21 ]), -148)
    /// TODO 在这里补充几组单元测试
  })
})

```
最后在命令行下执行测试
```
mocha quiz1.test.js
```
测试完成后确保所有testcase都通过

完成上述步骤后，请补充几组单元测试在quiz1.test.js中的TODO处，然后将整个目录除去node_modules打包。


#### 题目3 (和小组成员讨论并简述下列问题少于150字）
nodejs的作者是谁？ 什么时候发布的？ nodejs和npm的关系是什么？

#### 题目4  (和小组成员讨论并简述下列问题少于150字）
UIExplorer中大量使用了一门叫做flow.js的技术，这是做什么用的？

#### 题目5 (和小组成员讨论并简述下列问题少于150字）
UIExplorer进去后菜中中将知识分成了Component（组件）和Api（接口），这两部分的区别是什么？ 

#### 题目6（开放测试）
- RN开发，你最终选择了哪款编辑器来写javascript？
- 你使用Javascript几年了？
- 你的操作系统是？
