<template>
     <div v-if="isShow" class="loading">
          <h1>正在加载中...</h1>
     </div>
</template>

<script>
export default {
    data () {
        return {
            isShow: false
        }
    },
    methods: {
        // 开始加载
        start1 () {
            this.isShow = true;
        },
        // 结束加载
        finish () {
            this.isShow = false
        }
    }
}
</script>

<style>
.loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
}
</style>