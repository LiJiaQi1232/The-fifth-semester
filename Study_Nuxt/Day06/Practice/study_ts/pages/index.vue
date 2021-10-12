<template>
  <div>
    <h1>count:{{ count }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";


@Component 
export default class PageIndex extends Vue {
  count: number = 10;

  increment() {
     this.count++;
  } ;
  decrement  () {
    this.count--;
  };
}
</script>

<style>
</style>
