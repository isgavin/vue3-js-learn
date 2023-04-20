<script setup>
// 接收路由 Props
import { defineProps } from 'vue';
const { user } = defineProps({
  user: {
    type: Object,
    default: {}
  }
})
</script>

<template>
  <div>
    <div class="router">
      <h3>路由表传的 Props</h3>
      <ul>
        <li>name: {{ user.name }}</li>
        <li>age: {{ user.age }}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.router {
  background-color: antiquewhite;
}
</style>