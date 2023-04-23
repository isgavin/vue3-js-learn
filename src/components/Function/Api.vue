<script setup>
import { ref } from 'vue';
import { test } from '@/api';

const State = ref({
})
async function handleLogin() {
  State.value = await test()

}
</script>

<template>
  <div class="api">
    <el-button @click="handleLogin">接口请求</el-button>
    <div>
      <h4>接口信息展示</h4>
      {{ State }}
    </div>
  </div>
</template>



<style lang="scss" scoped>
.api {
  background-color: #409eff;
}
</style>