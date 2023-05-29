<template>
  <div>
    <Son :Person="Person" />
  </div>
</template>

<script setup>
import Son from './Son.vue'
// 向子组件传递 props
const Person = [
  { id: 1, name: '张三', age: 18 },
  { id: 2, name: '李四', age: 19 },
  { id: 3, name: '王五', age: 20 }
]
</script>

<style scoped></style>