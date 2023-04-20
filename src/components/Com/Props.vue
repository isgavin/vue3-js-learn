<script setup>
import { defineProps } from 'vue';
const { Person } = defineProps({
  Person: {
    type: Array,
    default: []
  }
})

// 发布
const Car = {
  name: 'BMW',
  history: 100
}
import PubSub from 'pubsub-js';
PubSub.publish('MY TOPIC', Car);

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