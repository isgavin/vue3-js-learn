<script setup>
import Marked from '../components/Function/Marked.vue'
import Todos from '../components/Function/Todos.vue';
import Api from '../components/Function/Api.vue';
import Name from '../components/Function/Name.vue';

</script>

<template>
  <main>
    <h3>这是首页</h3>
    <el-divider></el-divider>
    <Marked />
    <el-divider></el-divider>
    <Todos />
    <el-divider></el-divider>
    <Api />
    <el-divider></el-divider>
    <Name />

  </main>
</template>
