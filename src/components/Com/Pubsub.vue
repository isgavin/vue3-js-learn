<script setup>
// 有两个组件 VueProps 和 Pubsub
import { onBeforeUnmount } from 'vue';
import { PubSub } from 'pubsub-js'
import { ref } from 'vue';

// 订阅
let token = PubSub.subscribe('foo', (msg, data) => {
  console.log('这是数据Person', msg);
  console.log('这是数据Person', data);
});
// 接收数据并响应式处理
const Data = ref({})

// 取消所有订阅
onBeforeUnmount(() => {
  PubSub.unsubscribe(token);
})

</script>

<template>
  <div class="pubsub">
    <h3>Pubsub：这是从 Props 收到的数据</h3>
    <ul>
      <li>name: {{ Data.name }}</li>
      <li>msg: {{ Data.msg }}</li>
    </ul>
  </div>
</template>



<style lang="scss" scoped>
.pubsub {
  background-color: rgb(154, 154, 81);
}
</style>