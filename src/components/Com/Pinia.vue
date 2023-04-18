<script setup>
import { ref, onBeforeUnmount } from 'vue';
// pinia使用
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/count';
const store = useCounterStore() // store 实例化
const { count, doubleVal } = storeToRefs(store)
const { increment } = store

let Timer = setInterval(() => {
  increment()
  console.log("方法已经调用!!!")
}, 1000)

onBeforeUnmount(() => {
  clearInterval(Timer)
  console.log('组件销毁了')
})
</script>

<template>
  <div class="pinia">
    <h3>pinia 状态管理</h3>
    <el-text>值：{{ count }}，doubleVal {{ doubleVal }}</el-text>
  </div>
</template>



<style lang="scss" scoped>
.pinia {
  background-color: rgb(146, 194, 236) ;
}
</style>