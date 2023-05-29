<template>
  <div>
    <h3>vmodel父子数据同步</h3>
    父组件{{ title }},{{ author }}
    <Son v-model:title="title" v-model:author="author" />
  </div>
</template>

<script setup>
import Son from './Son.vue'
import { ref } from 'vue'
const title = ref('百年孤独')
const author = ref('马尔克斯')
</script>

<style lang="scss" scoped></style>