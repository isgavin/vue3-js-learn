<script setup>
import { ref, computed, watchEffect } from 'vue';
import 'animate.css';

// ref使用
let Count = ref(0);
function handleAdd() {
  Count.value++;
}
//监听数据改变
watchEffect(() => {
  console.log('Count', Count.value)
})
const inputVal = ref('开始');

</script>

<template>
  <div>

    <el-divider></el-divider>
    <h3>数据绑定</h3>
    <span>单向数据绑定：Count: {{ Count }}</span>
    <el-button @click="handleAdd()">点我+1</el-button>
    <el-button @click="() => { Count-- }">点我-1</el-button>
    <div>
      双向数据绑定：<el-input style="width: 120px;" v-model="inputVal">开始</el-input>
      <span>数据展示： {{ inputVal }}</span>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.done {
  text-decoration: line-through;
}
</style>