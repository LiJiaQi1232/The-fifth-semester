## 1.目标: 权限校验

### 2.实现思路：

1. pages 新建三个页面  ```index.vue  login.vue  my.vue```
2. 两个接口： 登录  退出登录     
3. 登录之后把接口返回的用户信息存储到```vuex```中
4. 使用中间件读取```vuex```中用户信息数据，来判断用户是否已登录
5. 首页根据```vuex```中是否读取到用户信息来判断显示对应的内容
6. 用户退出登录，要把```vuex```中数据清空



### 3.代码实现

```pages/index.vue```

```vue
<template>
  <div>
    <div v-if="!$store.state.auth">
      please <NuxtLink to="/login">Login</NuxtLink>
    </div>
    <div v-else>
      您已登录，可以访问<nuxt-link to="/my">我的页面</nuxt-link>
      <p>
        <button @click="logout">退出登录</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      setTimeout(() => {
          this.$store.commit('updateAuth', '');
      }, 1000);
    },
  },
};
</script>

```



```pages/login.vue```

```vue
<template>
  <div>
    <p>用户名： <input type="text" name="" id="" /></p>
    <p>密码：<input type="password" name="" id="" /></p>
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      setTimeout(()=>{
          const auth = "askjbdsajkdbasjkdbasjhkhdbasjhdbajdbasjhdbas";
          // 存储用户数据到vuex中
          this.$store.commit('updateAuth', auth);
          // 跳转首页
          this.$router.push('/');   
      }, 1000);
    },
  },
};
</script>

<style>
</style>
```

pages/```my.vue```

```vue
<template>
    <div>
         <h1>我的页面</h1>
         <nuxt-link to="/">go Home</nuxt-link>
    </div>
</template>

<script>
export default {
    middleware:'auth'
}
</script>

<style>

</style>
```

```middleware/auth```

```javascript
export default ({ store, redirect}) =>{
    // 是否已登录
    if (!store.state.auth) {
        redirect('/login');
    }
}
```



###  4.总结：

- 使用中间件完成权限功能
- ```vuex```中存储用户信息
- 页面中或者中间件根据```vuex```中是否读取到用户信息数据来判定对应显示内容或者页面跳转的控制





## 2.```nuxtServerInit```

###  1.目标

​          ```nuxtInitServer 解决的问题： vuex可以保证项目每个页面都可以共享数据，但是页面刷新了之后，vuex数据就清空了，所以要解决这个问题，需要使用nuxtInitServer```

### 2.实现思路

1. ```store/index.js 中创建actions, 把nuxtServerInit应用```     ```特点： 只能是在store/index.js 中actions使用```
2. ```nuxtServerInit只能运行在服务端```且只执行一次， 可以通过相关参数读取到 请求对象 



### 3.总结

1. ```nuxtServerInit 只能在服务端启动或者刷新运行一次```
2. ```nuxtServerInit 参数1context 包含commit, dispatch等    参数2：包含req对象等```
3. ```nuxtServerInit 只能使用在store/index.js 中actions```

  ```javascript
  export const actions = {
      // 1. 让vuex的用户信息数据持久化存储
      nuxtServerInit ({commit}, { req }) {
          // commit('updateAuth', 'asdxasdxasdas');
          console.log(req.headers.cookie);
      }
  }
  ```



### 3.权限校验完成

####   1.目标

   ```使用nuxtServerInit 持久化vuex中的用户信息```

####   2.实现思路

1. 使用```js-cookie```包 在登录时设置cookie， 退出登录时，清空cookie

     ```yarn add js-cookie```

2. ```通过nuxtServerInit 参数二解构出的req对象读取cookie```

3. 使用```cookieparser``` 包 把cookie字符串转成对象解构

      ```yarn add cookieparser```

  

   page/login.vue   登录时存储auth到cookie上

```vue
<template>
  <div>
    <p>用户名： <input type="text" name="" id="" /></p>
    <p>密码：<input type="password" name="" id="" /></p>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import  Cookie from 'js-cookie';
export default {
  methods: {
    login() {
      setTimeout(()=>{
          const auth = "askjbdsajkdbasjkdbasjhkhdbasjhdbajdbasjhdbas";
          // 存储用户数据到vuex中
          this.$store.commit('updateAuth', auth);
          // 存储Cookie
          Cookie.set('auth', auth);
          // 跳转首页
          this.$router.push('/');   
      }, 1000);
    },
  },
};
</script>

<style>
</style>
```



pages/index.vue  退出登录时 移除cookie

```
<template>
  <div>
    <div v-if="$store.state.auth">
      您已登录，可以访问<nuxt-link to="/my">我的页面</nuxt-link>
      <p>
        <button @click="logout">退出登录</button>
      </p>
    </div>
    <div v-else>please <NuxtLink to="/login">Login</NuxtLink></div>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
export default {
  methods: {
    logout() {
      setTimeout(() => {
        this.$store.commit("updateAuth", "");
        Cookie.remove('auth');
      }, 1000);
    },
  },
};
</script>

```



store/index.js

```javascript

const cookieparser = require('cookieparser');

export const state = ()=>{
     return {
         auth:''
     }
}


export const mutations = {
     updateAuth (state, payload) {
         state.auth = payload
     }
}


export const actions = {
    // 1. 让vuex的用户信息数据持久化存储
    nuxtServerInit ({commit}, { req }) {
        
        let auth = '';
        // 1.通过cookie 判断用户是否已经登录
        if (req.headers.cookie) {
            let parser = cookieparser.parse(req.headers.cookie);
            // 修改auth
            auth = parser.auth;
        }
        commit('updateAuth', auth);
    }
}


```

























