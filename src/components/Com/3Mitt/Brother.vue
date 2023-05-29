<template>
  <div>
    点击发送消息 <button @click="handleMsg">发送</button>
  </div>
</template>

<script setup>
import $bus from './bus.js'
function handleMsg() {
  $bus.emit('key', { message: '隔山打牛' })
}
</script>

<style lang="scss" scoped></style>