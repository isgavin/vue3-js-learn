<template>
  <div>
    {{ message }}
  </div>
</template>

<script setup>
import $bus from './bus.js'
import { onMounted, ref } from 'vue'
let message = ref('No Message')
onMounted(() => {
  $bus.on('key', (msg) => {
    message.value = msg.message
  })
})
</script>

<style lang="scss" scoped></style>