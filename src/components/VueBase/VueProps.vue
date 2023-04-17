<script setup>
import { defineProps } from 'vue';
const { Person } = defineProps({
  Person: {
    type: Array,
    default: []
  }
})
</script>

<template>
  <div>
    <h3>数据传参 Props</h3>
    接收 About 传来的数据

    <ul>
      <li v-for="item in Person" :key="item.id">
        {{ item.name }} {{ item.age }}
      </li>
    </ul>
  </div>
</template >

<style lang="scss" scoped></style>