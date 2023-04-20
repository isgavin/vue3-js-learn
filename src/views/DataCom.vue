<script setup>Props
import Pinia from '../components/Com/Pinia.vue';

import Props from '../components/Com/Props.vue';
// 向子组件传递 props
const Person = [
  { id: 1, name: '张三', age: 18 },
  { id: 2, name: '李四', age: 19 },
  { id: 3, name: '王五', age: 20 }
]


</script>

<template>
  <div>
    <h3>vue3 组件间的通信方式</h3>
    <el-divider></el-divider>
    <Pinia />

    <Props :Person="Person" />
    <el-divider></el-divider>
    <Pubsub />
  </div>
</template>



<style lang="scss" scoped>

</style>