#  Vue 3.0

## 一. Vue概述

### 库与框架概念

- 库是将代码集合成一个产品，库是我们调用库中的方法实现自己的功能。
- 框架则是为解决一类问题而开发的产品，框架是我们在指定的位置编写好代码，框架帮我们调用。
- 框架是库的升级版

 ### 库与框架的区别

小而巧的是库(`jquery`为了加强原生`js`的能力，不限制到底使用什么)；大而全的是框架(`express`是`Node`的web开发框架，只能使用`express`提供的方法，框架设计的时候是为了限制我们的吸管，找平差距，规范团队代码)`Angular`是框架 `vue和react`都是库。

```js
//狂啊及&& 库(插件)
​ 框架
	框架是一套完整的解决方案；对项目的侵入性较大，项目如果需要更换框架，则需要重新架构整个项目
​ 库(插件)
	库提供某一个小功能，对项目的侵入性较小，如果某个库无法完成某些需求，可以很容易切换到其他库实现需求
```

### 学习流行框架的原因

```js
// 流行框架：React Vue Angular
本质目的: 节约成本、学习新的开发思想
```

### `vue.js`概述

`Vue.js是前端的主流框架之一，和Angular、React.js一起，并称为前端三大主流框架`。

`Vue.js是一套构建用户界面的框架，只关注视图（页面）层的开发，易于上手`。

```
● Angular：出现最早的前端框架,曾经很火,但是现在已经被边缘化了,也不好学（ngular 1.x 学起来好麻烦; Angular 2.x-5.x 学起来相对简单）

● React.js：是目前最流行的一个框架; 是用的人最多的一个框架; 但是,学习起来也比较难; 因为在React中所有的功能，都要用Javascript来实现

● Vue.js：是目前最火的前端框架; Vue学习起来非常容易; Vue是中国人'尤雨溪'开发的; 文档非常友好;
```

### MVC与MVVM的区别

#### MVC分层开发思想

`MVC主要是后端的分层开发思想，把一个完成的后端项目，分成了三个部分：Model、view、Controller`

```shell
1. Model(数据层)：主要负责 数据库的操作
2. View(视图层)：所有前端页面 统称为View层
3. Controller(业务逻辑层)：主要处理 对应的业务逻辑
```

#### MVVM分层开发思想

`MVVM主要是前端页面的分层开发思想，主要关注于`视图层`分离，也就是说：MVVM把前端的视图层，分为了三个部分：Model,View,ViewModel`

```
1. Model:是页面中，需要用到的数据
2. View：是页面中的HTML结构
3. ViewModel:是一个中间的调度者，提供了双向数据绑定的概念
```

### MVC和MVVM

```js
// 为什么有了MVC还要有MVVM？
● MVC是后端的开发思想，并没有明确定义前端的页面该如何开发
● MVVM是前端页面的开发思想，把每个页面划分成三部分，同时VM作为MVVM的核心，提供了双选购数据绑定的概念，前端程序员不需要手动渲染页面了，且页面数据发生变化，也不需要程序员手动将数据变化同步到Model中，这所有的操作都是VM自动完成的！ 
● 有了MVVM的思想后，前端只要关心页面交互逻辑，不需要关心页面如何渲染。
```

## Vue 基本使用

#### `Vue.js`和MVVM之间的关系

`注意：Vue中，不推荐程序员手动操作DOM元素，所以，在Vue项目中，没有极其变态的需求，一半不要引入JQuery`

```html
<!-- Vue代码解析执行的步骤 -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue基础使用</title>
</head>

<body>
    <!-- M(数据) V(模板) VM(控制器 调度者) -->
    <!-- vue是一个渐进式框架 一个页面中 不需要vue的地方可以不用 需要vue的时候才用 -->

    <div></div> <!-- 该div不能被vue控制 -->

    <!-- 1.书写模板 -->
    <div id="app">
        {{msg}}
    </div>

    <!-- 引入Vue3.0 -->
    <!-- 当页面引入了vue库文件 那么全局对象window就有了一个Vue的实例对象 -->
    <script src="./lib/vue-3.0.js"></script>
    <script>
        console.log(Vue);

        // 2.书写数据
        let vm = Vue.createApp({
            // 存数据
            data() {
                return {
                    msg: "Hello Vue!"
                }
            },

            // 书写方法
            methods: {
                // 写法1 [推荐写法 es6写法] 
                handleClick() {
                    alert(this.name + '点击了我');
                },
                // 写法2
                handleMouseenter: function () {
                    console.log(this.name + '摸了我');
                }
            }
        }).mount('#app') //方式二 [推荐]

        // 3.书写控制器
        // mount()代表把模板和数据渲染成一个有数据的html插入到指定元素中
        vm.mount('#app'); //方式一
    </script>
</body>

</html>
```

#### 访问Vue实例数据

```js
let vm = Vue.createApp({
    data() {
        return {
            msg: "访问Vue实例数据",
            msg2: 123
        }
    }
}).mount('#app'); //mount书写方式 [推荐]

console.log(vm); //Proxy {…}
// 可通过【$data.name】查看数据
console.log(vm.$data.msg); //访问Vue实例数据
console.log(vm.$data.msg2); //123

#注意：mount书写方式
```

#### Vue调试工具安装使用

[Vue.js devtools - 翻墙安装方式 - 推荐](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=zh-CN)

```shell
1. vue和jQuery最大的区别 JQuery调错特别简单 vue报错基本没法找到第几行
2.简单代码可以vue-devtools
3.复杂项目 靠经验
```

#### Vue操作dom元素三种方法

 [文档](https://blog.csdn.net/qq_43363884/article/details/88285332)

## Vue的指令

`vue中，通过一些特殊的语法，扩展了HTML的能力，降来创建Vue实例的时候，Vue会把这些指令都进行解析，从而根据不同的指令，执行不同的操作、渲染不同的结果。`

#### 指令之插值表达式{{}}

```html
<h1>{{title}}<h1>
    
<script>
    return {
      title: "插值表达式传入title的值"
    }
</script>
<!-- 注：插值表达式只能用在元素的内容区域，不能用在元素的属性节点中 -->
```

#### 指令之`v-cloak`

`v-cloak解决了插值表达式加载代来的闪烁问题，当网络加载较慢用户会看到插值表达式。`

[简书详情](https://www.jianshu.com/p/f56cde007210?utm_source=oschina-app)

```html
<style>
    [v-cloak]{
        display: none;
    }
<style>

<div id="app" v-cloak>
    {{context}}
</div>
```

#### 指令之 `v-text`

`v-text 向指定元素的内容区域中，渲染指定的文本。 v-text和innerText作用一样，无法解析标签等。`

```html
<h1 v-text="title"><h1>
```

```shell
//v-text和{{}}的区别
1. v-text会覆盖内容
2. v-text无加载闪烁问题
```

#### 指令之`v-html`

`v-text向指定元素的内容区域中，渲染可含标签的指定文本。v-html和innerHTML作用一样，可以解析标签等`

```
<div v-html="msg"><div>
```

#### 指令之`v-bind`

`v-bind为html属性节点动态绑定属性值，可以简写成“:”`

```
<a v-bind:link="http://www.baidu.com"></a>
<!-- 简写 -->
<a :link="http://www.baidu.com"></a>
```

#### 指令之`v-on`

`v-on为html元素绑定事件处理函数，可以简写成"@"`

```html
<button v-on:click="事件处理函数名">点击按钮</button>
<!-- 简写 -->
<button @click="事件处理函数名">点击按钮</button>
```

#### 指令之 `v-model`

`v-model可以将页面中数据的变化，自动同步更新到VM实例的data中`

```html
<input type="text" v-model="msg"/>
```

```shell
//v-model和v-bind的区别
1. v-bind：只能实现单向的数据同步data--->页面
2. v-model：可以实现双向的数据同步data<-->页面
```

```shell
//注意点
1. v-model只能和表单元素配合使用，例如：input,select,textarea等
2. v-model是Vue中唯一支持双向数据绑定的指令
```

#### 指令添加类名

`通过v-bind方式为元素添加多个类名。核心:利用数组`

```html
<!-- 1.字符串方式添加 -->
<p :class="['red', flag?'bold':'']">red红色文本</p>
<!-- 2.数据变量方式添加 -->
<p :class="[redB, flag?boldB:'']">red红色文本</p>
<!-- 3.对象方式添加 active:isActive -->
<p :class="{red:true, bold:flag}">red红色文本</p>
```

#### 指令之`v-for`循环

`v-for循环遍历数组/对象数据`

```html
<!-- 迭代数组 (item,index) in 数组 -->
<p v-for="(item,i) in list">索引{{i}}：{{item}}</p>

<!-- 迭代对象 (val,key) in 对象 -->
<p v-for="(item,key) in obj">键{{key}}：{{val}}</p>

<!-- 迭代数字 count in 数字 [count值从1开始] -->
<p v-for="count in 10">这是第{{count}}次循环</p>
```

#### 指令之`v-show`显示隐藏

`v-show控制元素的显示隐藏。通过布尔值进行转换`

```html
<!-- v-show="flag" true显示 false隐藏 -->
<h1 v-show="true">显示</h1>
<h1 v-show="false">隐藏</h1>
<!-- 可填写布尔变量 -->
```

#### 指令之`v-if判断`

`v-if判断元素是否会被渲染到页面`

```html
<!-- v-if="flag" true渲染 false不渲染 -->
<h1 v-if="flag">我是v-if</h1>
<h1 v-else-if="flag">我是v-else-if</h1>
<h1 v-else="flag">我是v-else</h1>
```

#### 特殊指令

##### key

`预期：number | string`
`key的特殊attribute主要用在Vue的虚拟DOM算法，在新旧 nodes 对比时辨识 VNodes。`

```html
<!-- 常见用例结合v-for -->
<ul>
  <li v-for="item in items" :key="item.id">...</li>
</ul>
<!-- 完整地触发组件的生命周期钩子和触发过渡 -->
<transition>
  <span :key="text">{{ text }}</span>
</transition>
当 text 发生改变时，<span>总是会被替换而不是被修改，因此会触发过渡
```

#### 自定义指令

`内置的指令无法满足我们的特殊需求，Vue允许我们自定义指令。`

##### 注册全局指令

`vm.directive注册全局指令`

```html
<!-- 例：注册一个v-val指令 让表单默认有值 -->
<div id="app">
    <input type="text" v-val v-model="msg">
</div>

<script>
    // 【方式一】
    let vm = Vue.createApp({
        data() {
            return {
                msg: ""
            }
        }
    })
    vm.directive('val', {
        // 当指令第一次绑定到元素并且在挂载父组件之前调用。在这里你可以做一次性的初始化设置。
        beforeMount(el) {
            console.log(el);
        },
        // 在挂载绑定元素的父组件时调用
        mounted(el) {
            console.log(el);
            el.value = '我是自定义指令';
        },
        // 在更新包含组件的VNode之前调用
        beforeUpdate(el) {
            console.log(el);
        },
    })
    vm.mount('#app');


    // 【方式二】
    let vm = Vue.createApp({
        data() {
            return {
                msg: ""
            }
        }
    }).directive('val', {
        // 在挂载绑定元素的父组件时调用
        mounted(el) {
            console.log(el);
            el.value = '我是自定义指令';
        },
    }).mount('#app');

</script>
```

```html
<!-- 【带参的自定义指令】 -->
<!-- 例：注册v-color 让表单有背景色 -->
<div id="app">
    <input type="text" v-color:[info]="msg">
</div>

<script>
    let vm = Vue.createApp({
        data() {
            return {
                msg: {
                    color: "pink"
                },
              	info: "666" //binding.art -> 666
            }
        }
    }).directive('color', {
        // 在挂载绑定元素的父组件时调用
        mounted(el, binding) {
            console.log(el);
            el.value = '我是带参的自定义指令';
            console.log(binding); //{dir: {…}, instance: Proxy, value: Proxy, oldValue: undefined, arg: "666", …}
            console.log(binding.value); //Proxy {color: "pink"}
            console.log(binding.value.color); //pink
            el.style.backgroundColor = binding.value.color;
        },
    }).mount('#app');
</script>
```

##### 注册局部指令

`Vue.createApp内部使用directives注册局部指令。`

```html
<!-- 注册局部指令：v-color 让表单有背景色 -->
<div id="app">
    <input type="text" v-color="msg">
</div>

<script>
    let vm = Vue.createApp({
        data() {
            return {
                msg: {
                    color: "pink"
                }
            }
        },
        // 内部使用directives
        directives: {
            color: {
                // 在挂载绑定元素的父组件时调用
                mounted(el, binding) {
                    console.log(el);
                    el.value = '我是局部的(带参)自定义指令';
                    console.log(binding); //{dir: {…}, instance: Proxy, value: Proxy, oldValue: undefined, arg: undefined, …}
                    console.log(binding.value); //Proxy {color: "pink"}
                    console.log(binding.value.color); //pink
                    el.style.backgroundColor = binding.value.color;
                },
            }
        }
    }).mount('#app');
</script>
```

## Vue事件处理

### 事件修饰符

`事件处理程序中调用e.preventDefault()或e.stopPropagation()是非常常见的需求。为了更好实现该需求，Vue.js为v-on提供了事件修饰符，修饰符是由点开头的指令后缀表示。`

- `.stop`：阻止冒泡
- `.prevent`:组织默认事件
- `.capture`:捕获模式
- `.self`:只监听触发该元素的事件
- `.once`:只触发一次
- `.passive`:不阻止默认事件

```html
<!-- 阻止单击事件继续传播 -->
<a @click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form @submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a @click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form @submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div @click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div @click.self="doThat">...</div>
```

### 按键修饰符

`在监听键盘事件时，经常需要检查详细的按键。Vue允许为v-on或@在监听键盘事件时添加按键修饰符，达到代替keyCOde判断的作用`

可直接将`KeyboardEvent.key`暴露的任意有效按键名转换为`kebab-case`来作为修饰符。

```html
<input @keyup.page-down="onPageDown" />
<!-- 上述示例中，处理函数只会在 $event.key 等于 'PageDown' 时被调用 -->
```

#### 按键别名

`Vue为最常用的键提供了别名：`

- `.enter`
- `.tab`
- `.delete`(捕获“删除”和“退格”键)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

### 系统修饰符

`剋用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。`

- `.ctrl`
- `.alt`
- `.shift`
- `.meta`

##### `.exact`修饰符

`.exact`修饰符允许你控制由精确的系统修饰符组合触发的事件

```html
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button @click.ctrl.exact="onCtrlClick">B</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button @click.exact="onClick">C</button>
```

##### 鼠标按钮修饰符

- `.left`

- `.right`

- `.middle`

  > 这些修饰符会限制处理函数仅响应特定的鼠标按钮









## Vue表单

### 表单基本操作

```html
<div id="app">
    <!-- submit有一个默认行为 自动提交表单 -->
    <form action="http://itcast.cn">
        <div>
            <span>姓名：</span>
            <span>
                <input type="text" v-model="username">
            </span>
        </div>
        <div>
            <span>性别：</span>
            <span>
                <!--  0 false 代表女 1 true 代表男 -->
                <input type="radio" id="male" value="1" v-model="gender">
                <label for="male">男</label>
                <input type="radio" id="female" value="2" v-model="gender">
                <label for="female">女</label>
            </span>
        </div>
        <div>
            <span>爱好：</span>
            <input type="checkbox" id="ball" value="1" v-model="hobbies">
            <label for="ball">篮球</label>
            <input type="checkbox" id="sing" value="2" v-model="hobbies">
            <label for="sing">唱歌</label>
        </div>
        <div>
            <span>职业：</span>
            <!-- multiple去掉下拉 可以设置多选 -->
            <select multiple v-model="jobs">
                <option value="0">请选择职业</option>
                <option value="1">教师</option>
                <option value="2">律师</option>
                <option value="3">工程师</option>
            </select>
        </div>
        <div>
            <span>个人简介：</span>
            <textarea v-model="intro"></textarea>
        </div>
        <div>
            <input type="submit" @click.prevent="handleForm" value="提交">
        </div>
    </form>
</div>

<script>
    // 1.创建vm
    let vm = Vue.createApp({
        // 1.1 数据
        data() {
            return {
                // 用户名
                username: "admin",
                // 性别
                gender: "2",
                // 爱好
                hobbies: [],
                // 职业
                jobs: [],
                // 个人简介
                intro: ""
            }
        },
        // 1.2 方法
        methods: {
            handleForm() {
                console.log('uname：' + this.username);
                console.log('gender：' + this.gender);
                console.log('hobbies：' + this.hobbies);
                console.log('jobs：' + this.jobs);
                console.log('intro：' + this.intro);
            }
        }
    }).mount('#app');
</script>
```

### 表单修饰符

- `.lazy`

  ```html
  <!-- 在“change”时触发输入框的值与数据同步 而非“input”时更新 -->
  <input v-model.lazy="msg" />
  ```

  

- `.number`

  ```html
  <!-- 将用户的输入值转为数值类型 -->
  <input type="number" v-model.number="msg" />
  ```

  

- `.trim`

  ```html
  <!-- 自动过滤用户输入的首尾空白字符 -->
  <input v-model.trim="msg" />
  ```









## 计算属性和侦听器

### 计算属性

`模板内的表达式非常遍历，但是设计他们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。`

```html
<div id="computed-basics">
  <h1>计算属性赋值</h1>
  <span>{{ BooksMsg }}</span>
</div>

<script>
    Vue.createApp({
        data() {
            return {
                author: {
                    name: '',
                    books: ['Vue 2', 'Vue 3', 'Vue 4']
                }
            }
        },
        computed: {	
            // 计算属性的 getter
            BooksMsg() {
                // this指向vm实例
                return this.author.books.length > 0 ? 'Yes' : 'No'
            }
        }
    }).mount('#computed-basics');


</script>
```

#### 计算属性 vs 方法

```html
<!-- 使用方法达到计算属性效果 -->
<p>{{ BooksMsg() }}</p>
<script>
  // 在组件中
	methods: {
  	BooksMsg() {
  	  return this.author.books.length > 0 ? 'Yes' : 'No'
 	 }
	}
</script>
<!-- 区别：
		计算属性是基于它们的反应依赖关系缓存的，只在相关响应式依赖发生改变时它们才会重新求值这就意味着只要author.books还没有发生改变，多次方位BooksMsg计算属性会立即返回之前的计算结果，而不必再次执行函数。
-->
```

#### 计算属性的Setter

`计算属性默认只有getter,不过在需要时也可以提供一个setter`

```js
...
computed: {
  fullName: {
    // getter
    get() {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set(newValue) {
      const names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
...
// 现在再运行 vm.fullName = '李四' 时，setter会被调用，vm.firstName 和 vm.lastName 也会相应地被更新
```

### 侦听器

`虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。于是Vue通过watch选项提供了一个更通用的方法，来响应数据的变化，当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。`

```html
<div id="app">
    <input type="text" v-model="fstName">
    <input type="text" v-model="lstName">
    <p>{{fullName}}</p>
</div>

<script>
    let vm = Vue.createApp({
        data() {
            return {
                fstName: "坤",
                lstName: "子",
                fullName: ""
            }
        },
        // watch 侦听器
        watch: {
            fstName: function (newVal, oldVal) {
                console.log('旧值：' + oldVal);
                console.log('新值：' + newVal);
                this.fullName = newVal + this.lstName; //侦听后赋值,并修改上面p标签内容
            }
        }

    }).mount('#app');
</script>
```

#### 计算属性 vs 侦听器

```html
<div id="app">
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <p>{{ fullName }}</p>
</div>
<!-- 【 侦听器版本 】-->
<script>
    const vm = Vue.createApp({
        data() {
            return {
                firstName: '张',
                lastName: '三丰',
                fullName: '张三丰'
            }
        },
        watch: {
            firstName(val) {
                this.fullName = val + this.lastName
            },
            lastName(val) {
                this.fullName = this.firstName + val
            }
        }
    }).mount('#app')
</script>

<!-- 【 计算属性版本 】 -->
<script>
    const vm = Vue.createApp({
        data() {
            return {
                firstName: '张',
                lastName: '三丰',
                // data内无需写fullName，如果写了,那么上方会优先替换data内的fullName
            }
        },
        computed: {
            fullName() {
                return this.firstName + this.lastName;
            }
        }
    }).mount('#app')
</script>
```

```js
// 【相同点】
1. 都可以实现通过监控data数据域中属性值的变化来触发相应的回调函数，进而实现我们特殊的逻辑业务处理功能

//【不同点】
1. "触发条件不同"
	computed计算属性会依赖于使用它的data属性，只要是依赖的data属性改变，则自定义重新调用计算属性执行一次；watch则是在监控的data属性值发生变动时，自动调用watch回调函数
2."执行速度不同"
 	computed计算属性的值是直接从缓存中获取，而不是重新编译执行一次，因而其性能要高一些，尤其是在data属性中的值无变化，而重新调用computed回调函数时更是如此，所以说在Vue中，应该尽可能多的使用computed 替代watch
3. "使用方式不同"
	computed计算属性的回调函数方法可以直接在页面中通过插值表达式{{}}来获取，不需要在data数据域中再定义一个方法名相同的属性；watch中的方法名【必须】是data数据域中已经存在的，否则无法使用
```







## Vue3的生命周期

`Vue实例从创建到销毁的过程，这些过程中会伴随着一些函数的自调用。我们称这些函数为钩子函数。`

|     常用构造函数     |                             机制                             |
| :------------------: | :----------------------------------------------------------: |
|   beforeCreate[✘]    | `在实例初始化之后，数据观测和事件配置之前被调用，此时data和methods以及页面的DOM结构都没有初始化，什么都做不了` |
|      created[✘]      | `在实例创建完成后被立即调用此时data和methods已经可以使用 但是页面还没有渲染出来` |
| setup[以替代上面2个] | `一个组件选项，在创建组件之前执行，一旦props被解析，并作为作何API的入口点` |
|     beforeMount      | `在挂载开始之前被调用，此时页面上还看不到真实数据 只是一个模板页面而已` |
|        mouted        | `el被新创建的vm.$el替换，并改在到实例上去之后调用该钩子。数据已经真实渲染到额面上在这个钩子函数里面我们都可以使用一些第三方的插件` |
|     beforeUpdate     | `数据更新时调用，发生在虚拟DOM打补丁之前。页面上数据还是旧的` |
|       updated        | `由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子。页面上数据已经替换成最新的` |
|    beforeUnmount     |                      `实例销毁之前调用`                      |
|      unmounted       |                        实例销毁后调用                        |

## Vue的动画

### 过渡& 动画概述

`Vue`提供了一些抽象概念，可以帮助处理过渡和动画，热别是在响应某些变化时。这些抽象的概念包括：

```js
● 在 CSS 和 JS 中，使用内置的<transition>组件来钩住组件中进入和离开DOM
● 过渡模式，以便你在过渡期间编排顺序
● 在处理多个元素位置更新时，使用<transition-group>组件，通过FLIP技术来提高性能
● 使用watchers来处理应用中不同状态的过渡
```

##### 基于class的动画和过渡

`可通过给class设置相关阀门，通过class激活动画。`

### 进入过渡 & 离开过渡

```
在插入、更新或从 DOM 中移除项时，Vue提供了多种应用转换效果的方法
这包括以下工具：
● 自动为 CSS 转换和动画应用 class
● 集成第三方 CSS 动画库， 例如 animate.css
● 在过渡钩子期间使用JavaScript 直接操作DOM
● 集成第三方 JavaScript 动画库
```

##### 单元素/组件的过渡

###### 过渡class

`在进入/离开的过渡中，会有6个class切换。`

```shell
1. v-enter-from:定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除
2.v-enter-active:定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数
3.v-enter-to:定义进入过渡的结束状态。在元素被插入之后下一帧生效(与此同时v-enter-from被移除)，在过渡/动画完成之后移除
4.v-leave-from:定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除
5.v-leave-active:定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数
6.v-leave-to:离开过渡的结束状态。在离开过渡被触发之后下一帧生效
```

```js
["注意"]:
1. 对于这些在过渡中切换的类名来说，如果你使用一个没有名字的 <transition>，则 v- 是这些class名的默认前缀。如果你使用了 <transition name="my-transition">，那么 v-enter-from会替换为 my-transition-enter-from
2. v-enter-active 和 v-leave-active 可以控制进入/离开过渡的不同的缓和曲线，在下面章节会有个示例说明
```

###### css 过渡

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>css过渡</title>
    <style>
        p {
            width: 400px;
            height: 100px;
            background-color: pink;
            transition: all 1s ease-out;
        }

        .v-enter-from,
        .v-leave-to {
            opacity: 0;
        }

        .v-enter-to,
        .v-leave-from {
            opacity: 1;
        }

        .v-enter-active {
            width: 200px;
        }

        .v-leave-active {
            height: 200px;
        }
    </style>
</head>

<body>
    <div id="app">
        <button @click="active = !active">动画按钮</button>
        <transition>
            <p v-if="active">content...</p>
        </transition>
    </div>

    <script src="/js/vue3.0.js"></script>
    <script>
        const app = Vue.createApp({
            data() {
                return {
                    active: true
                }
            }
        }).mount("#app")
    </script>
</body>

</html>
```

###### CSS动画

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>css动画</title>
    <style>
        p {
            width: 400px;
            height: 100px;
            background-color: pink;
        }

        .w-enter-from,
        .w-leave-to {
            opacity: 0;
        }

        .w-leave-from,
        .w-enter-to {
            opacity: 1;
        }

        .w-enter-active,
        .w-leave-active {
            transition: all 2s;
            animation: change 4s linear;
        }

        @keyframes change {
            0% {
                background-color: pink;
            }

            50% {
                background-color: plum;
            }

            100% {
                background-color: pink;
            }
        }
    </style>
</head>

<body>
    <div id="app">
        <button @click="active = !active">动画按钮</button>
        <transition name="w">
            <p v-if="active" @transitionend="tlisten" @animationend="alisten">content...</p>
        </transition>
    </div>

    <script src="/js/vue3.0.js"></script>
    <script>
        const app = Vue.createApp({
            data() {
                return {
                    active: false
                }
            },
            methods: {
                // transitionend和animationend事件监听
                tlisten() {
                    console.log("过渡完成");
                },
                alisten() {
                    console.log("动画完成");
                }
            }
        }).mount("#app")
    </script>
</body>

</html>
```

###### 自定义过渡class类名

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>自定义过渡class类名</title>
    <style>
        p {
            width: 400px;
            height: 100px;
            background-color: pink;
        }

        .w-enter-from,
        .w-leave-to {
            opacity: 0;
        }

        .w-enter-to,
        .w-leave-from {
            opacity: 1;
        }

        .w-enter-active,
        .w-leave-active {
            transition: all;
            animation: change 2s linear;
        }

        @keyframes change {
            0% {
                background-color: pink;
            }

            50% {
                background-color: plum;
            }

            100% {
                background-color: pink;
            }
        }
    </style>
</head>

<body>
    <div id="app">
        <button @click="active = !active">动画按钮</button>
        <transition name="custom-classes-transition" enter-from-class="w-enter-from" enter-to-class="w-enter-to"
            leave-from-class="w-leave-from" leave-to-class="w-leave-to" enter-active-class="w-enter-active"
            leave-active-class="w-leave-active">
            <p v-if="active">content...</p>
        </transition>
    </div>

    <script src="/js/vue3.0.js"></script>
    <script>
        const app = Vue.createApp({
            data() {
                return {
                    active: false
                }
            }
        }).mount("#app")
    </script>
</body>

</html>
```

###### 同时使用过渡和动画

```
同上
```

###### 显性的过渡持续时间

###### JavaScript钩子

##### 多个元素的过渡

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>多个相同元素的过渡</title>
    <style>
        .v-enter-from,
        .v-leave-to {
            opacity: 0;
        }

        .v-enter-active,
        .v-leave-active {
            transition: opacity .6s ease-out;
        }
    </style>
</head>

<body>
    <div id="app">
        <button @click="flag=!flag">点击查看效果</button>
        <hr>
        <transition>
            <button v-if="flag">保存</button>
            <button v-else>取消</button>
        </transition>
    </div>

    <script src="/js/vue3.0.js"></script>
    <script>
        const app = Vue.createApp({
            data() {
                return {
                    flag: true
                }
            }
        }).mount("#app")
    </script>
</body>

</html>
```

##### 多个组件之间过渡

#### 列表过渡

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>列表过渡</title>
    <style>
        .list-item {
            display: inline-block;
            margin-right: 20px;
            background-color: hotpink;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            color: #fff;
        }

        .list-enter-active,
        .list-leave-active {
            transition: all 1s ease-out;
        }

        .list-enter-from,
        .list-leave-to {
            opacity: 0;
            transform: translateY(30px);
        }
    </style>
</head>

<body>
    <div id="app">
        <button @click="add">随机添加一个数字</button>
        <button @click="remove">随机移除一个数字</button>
        <transition-group name="list" tag="p">
            <span v-for="item in items" :key="item" class="list-item">{{item}}</span>
        </transition-group>
    </div>

    <script src="/js/vue3.0.js"></script>
    <script>
        let app = Vue.createApp({
            data() {
                return {
                    items: [1, 2, 3, 4, 5],
                    netNum: 6
                }
            },
            methods: {
                randomindex() {
                    return Math.floor(Math.random() * this.items.length)
                },
                remove() {
                    this.items.splice(this.randomindex(), 1)
                },
                add() {
                    if (this.items.length == 10) return alert('数量已达上限')
                    // let random = Math.round(Math.random() * 9 + 1)
                    // console.log(random);
                    while (true) {
                        let random = Math.round(Math.random() * 9 + 1);
                        console.log(random);
                        for (let i = 0; i < this.items.length; i++) {
                            if (random == this.items[i]) {
                                break;
                            } else if (random < this.items[i]) {
                                this.items.splice(i, 0, random);
                                return true;
                            } else if (i == this.items.length - 1) {
                                this.items.push(random);
                                return true;
                            }
                        }
                    }
                }
            }
        }).mount('#app');
    </script>
</body>

</html>
```

