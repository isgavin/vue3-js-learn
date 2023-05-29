<script setup>

import Pinia from '../components/Com/Pinia.vue';
import Props from '../components/Com/1Props/Father.vue';
import Func from '../components/Com/2CustomFuc/Father.vue';
import Mitt from '../components/Com/3Mitt/Father.vue';
import Vmodel from '../components/Com/4Vmodel/Father.vue';

</script>

<template>
  <div>
    <h3>vue3 组件间的通信方式</h3>
    <el-divider></el-divider>
    <Props />
    <el-divider></el-divider>
    <Func />
    <el-divider></el-divider>
    <Mitt />
    <el-divider></el-divider>
    <Vmodel/>
    <el-divider></el-divider>
    <Pinia />


    <el-divider></el-divider>
 
  </div>
</template>



<style lang="scss" scoped></style>