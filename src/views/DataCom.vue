<script setup>
import Pinia from '../components/Com/Pinia.vue';

import VueProps from '../components/Com/VueProps.vue';
// 向子组件传递 props
const Person = [
  { id: 1, name: '张三', age: 18 },
  { id: 2, name: '李四', age: 19 },
  { id: 3, name: '王五', age: 20 }
]

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
    <h3>vue3 组件间的通信方式</h3>
    <el-divider></el-divider>
    <Pinia />
    <div class="router">
      <h3>路由表传的 Props</h3>
      <ul>
        <li>name: {{ user.name }}</li>
        <li>age: {{ user.age }}</li>
      </ul>
    </div>
    <VueProps :Person="Person" />


  </div>
</template>



<style lang="scss" scoped>
.router {
  background-color: antiquewhite;
}
</style>