<template>
  <div>

  </div>
</template>

<script setup>

const $emit = defineEmits(['response'])

$emit('response', '这是子组件传过来的消息')

</script>

<style lang="scss" scoped></style>