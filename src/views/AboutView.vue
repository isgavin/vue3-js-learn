<script setup>
import DataBind from '../components/VueBase/DataBind.vue';
import VueLife from '../components/VueBase/VueLife.vue';
import VueProps from '../components/VueBase/VueProps.vue';

// 接收路由 Props
import { defineProps } from 'vue';
const { user } = defineProps({
  user: {
    type: Object,
    default: {}
  }
})

// 向子组件传递 props
const Person = [
  { id: 1, name: '张三', age: 18 },
  { id: 2, name: '李四', age: 19 },
  { id: 3, name: '王五', age: 20 }
]

</script>

<template>
  <div class="about">
    <h3>路由表传的 Props</h3>
    <ul>
      <li>name: {{ user.name }}</li>
      <li>age: {{ user.age }}</li>
    </ul>
    <el-divider></el-divider>
    <h2>This is an about page</h2>
    <DataBind />
    <el-divider></el-divider>
    <VueLife />
    <VueProps :Person="Person" />
  </div>
</template>

<style></style>
