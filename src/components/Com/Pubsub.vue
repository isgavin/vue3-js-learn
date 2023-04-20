<script setup>
// 有两个组件 Props 和 Pubsub
import { onBeforeUnmount } from 'vue';
import PubSub from 'pubsub-js'
import { ref } from 'vue';

// 订阅
var mySubscriber = function (msg, data) {
  console.log(msg, data)
  // return ref(data)
};

var token = PubSub.subscribe('MY TOPIC', mySubscriber);

onBeforeUnmount(() => {
  PubSub.unsubscribe(token);
})

</script>

<template>
  <div class="pubsub">
    <h3>Pubsub：这是从 Props 收到的数据</h3>
    <ul>
      <!-- {{mySubscriber}} -->
    </ul>
  </div>
</template>



<style lang="scss" scoped>
.pubsub {
  background-color: rgb(154, 154, 81);
}
</style>