<template>
  <div>
    <h1>count:{{ count }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
const counter = (ref:Function) => {
  const count = ref(0);
  const increment = () => count.value++;
  const decrement = () => count.value--;
  return {
    count,
    increment,
    decrement,
  };
};
export default defineComponent({
  setup() {
    return{
      ...counter(ref)
    }
  },
});
</script>

<style>
</style>