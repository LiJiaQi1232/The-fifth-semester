<template>
    <div>
         <Goods />
         <h1>asyncData运行在{{ msg }}</h1>
         <h3>{{ name }}</h3>
         <h3>asyncData 运行在{{ server }}端</h3>
         <nuxt-link to="/about">go about</nuxt-link>
    </div>
</template>

<script>
export default {
    data () {
        return {
            name:'张三',
        }
    },
    // 会把返回的数据，合并到data上
    // 1.参数  2.返回值   3. 功能    4.何时调用
    asyncData ({ query, params, route }) {
        console.log('asyncData函数执行');

        const server = process.server ? '服务端' : '客户端'

        console.log(server);

        return {
            msg:'hello Nusters',
            server
        }
    }
}
</script>

<style>

</style>