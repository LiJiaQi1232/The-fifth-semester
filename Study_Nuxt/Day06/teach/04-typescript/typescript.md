# nuxt集成typescript

## 1.typescript项目

   ```javascript
   yarn create nuxt-app 项目名称
   
   1. 选择typescript
   
   yarn dev 启动项目
   ```

## 2.使用类创建组件

文档地址： https://www.npmjs.com/package/vue-property-decorator

安装 vue-property-decorator     vue-class-component

```javascript
yarn add vue-property-decorator vue-class-component
```

pages/index.vue

```vue
<template>
<div>
     <h1>count:{{ count }}</h1>
     <button @click="increment">increment</button>
     <button @click="deIncrement">deIncrement</button>
</div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class PageIndex extends Vue {
   count:number = 0;

   increment () {
       this.count++
   }

   deIncrement () {
      this.count--;
   }
}
</script>

```

## 3.composition-api

文档地址： https://www.npmjs.com/package/@vue/composition-api

1.安装

```javascript
 yarn add @vue/composition-api
```

2.注册composition-api插件

plugins/componsition-api.js

```javascript
import Vue from 'vue';
import VueComposition  from '@vue/composition-api'

Vue.use(VueComposition);
```

3. nuxt.config.js中注册插件

   ```javascript
     plugins: [
       '~/plugins/componsition-api'
     ],
   ```

4. 页面使用

pages/index.vue

```vue
<template>
  <div>
    <h1>count:{{ count }}</h1>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const count = ref(0);

    const increment = () => count.value++;
    const decrement = () => count.value--;

    return {
      count,
      increment,
      decrement,
    };
  },
});

</script>
```



代码抽离

```javascript
<template>
  <div>
    <h1>count:{{ count }}</h1>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

const counter = (ref: Function)=>{
 const count = ref(0);

    const increment = () => count.value++;
    const decrement = () => count.value--;

    return {
      count,
      increment,
      decrement,
    };
}


export default defineComponent({
  setup() {
     return {
       ...counter(ref)
     }
  },
});

</script>
```





