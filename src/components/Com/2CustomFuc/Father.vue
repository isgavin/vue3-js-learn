<template>
  <div>
    <h3>自定义方法</h3>
    <Son @response="(msg)=>{SonMessage=msg}"/>
    <p>子组件传过来的消息：{{SonMessage}}</p>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import Son from './Son.vue'

let SonMessage = ref('No Message')
</script>

<style lang="scss" scoped>

</style>