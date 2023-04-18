<script setup>
import { defineProps } from 'vue';
const { Person } = defineProps({
  Person: {
    type: Array,
    default: []
  }
})

// mitt 传输数据
import {PubSub} from 'pubsub-js';
const mittData = {
  name: 'Mitt',
  msg: '这是第一次使用 mitt'
}
PubSub.publish('foo', mittData);
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