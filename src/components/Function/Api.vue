<script setup>
import { test } from '@/api';
function handleLogin() {
  test()
}
</script>

<template>
  <div class="api">
    <el-button @click="handleLogin">接口请求</el-button>
  </div>
</template>



<style lang="scss" scoped>
.api {
  background-color: #409eff;
}
</style>