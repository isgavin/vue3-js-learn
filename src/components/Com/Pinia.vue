<script setup>
import { ref, onBeforeUnmount } from 'vue';
// pinia使用
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/count';
// store 实例化
const store = useCounterStore()
// 将 pinia 数据响应式处理
const { count, doubleVal } = storeToRefs(store)
const { increment } = store

let Timer = setInterval(() => {
  increment()
}, 1000)

onBeforeUnmount(() => {
  clearInterval(Timer)
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
  background-color: rgb(146, 194, 236);
}
</style>