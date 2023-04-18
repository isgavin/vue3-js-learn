<script setup>
import { onBeforeUnmount } from 'vue';
import { PubSub } from 'pubsub-js'

// 订阅
const Data = {}
let token = PubSub.subscribe('foo', (msg, data) => {
  console.log('这是数据Person', msg);
  console.log(data)
  Data = data
});
// 取消所有订阅
onBeforeUnmount(() => {
  PubSub.unsubscribe(token);
});

</script>

<template>
  <div class="mitt">
    <h3>Pubsub</h3>
    <ul>
      <li>name: {{ Data.name }}</li>
      <li>msg: {{ Data.msg }}</li>
    </ul>
  </div>
</template>



<style lang="scss" scoped>
.Mitt {
  background-color: rgb(154, 154, 81);
}
</style>