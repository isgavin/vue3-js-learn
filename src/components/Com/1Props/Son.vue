<script setup>
import { defineProps } from 'vue';

defineProps({
  Person: Array
})
</script>

<template>
  <div class="props">
    <h3>数据传参 Props，接收父组件传来的数据</h3>
    <ul>
      <li v-for="item in Person" :key="item.id">
        {{ item.name }} {{ item.age }}
      </li>
    </ul>
  </div>
</template >

<style lang="scss" scoped>
.props {
  background-color: beige;
}
</style>