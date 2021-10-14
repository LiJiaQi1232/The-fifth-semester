<template>
    <ul>
        <li>{{ goods }}</li>
    </ul>
</template>

<script>
export default {
    data () {
        return {
            goods:'电子产品'
        }
    },
    // 只能使用在页面组件中
    asyncData () {
        console.log('good组件中的asyncData执行了');
         return {
             goods:'电子产品'
         }
    }
}
</script>

<style>

</style>