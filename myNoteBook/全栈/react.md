### Flux 架构
>react的一种标准架构

![](./images/flow.png)

最大特点：数据单向流动。与 MVVM 的数据双向绑定，形成鲜明对比。

Flux 的核心思想
- 不同组件的state，存放在一个外部的、公共的 Store 上面。
- 组件订阅 Store 的不同部分。
- 组件发送（dispatch）动作（action），引发 Store 的更新。

Flux 只是一个概念，有30多种实现。

### 目前最流行的两个 React 架构

React 架构的最重要作用：管理 Store 与 View 之间的关系。

- MobX：响应式（Reactive）管理，state 是可变对象，适合中小型项目
- Redux：函数式（Functional）管理，state 是不可变对象，适合大型项目

### MobX 架构
MobX 的核心是观察者模式。

- Store 是被观察者（observable）
- 组件是观察者（observer）
一旦Store有变化，会立刻被组件观察到，从而引发重新渲染。

