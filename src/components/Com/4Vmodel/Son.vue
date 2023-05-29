<template>
  <div>
    <button @click="handler">触发回调</button>
    子组件{{ title }},{{ author }}
  </div>
</template>

<script setup>
let props = defineProps(['title', 'author'])
let $emit = defineEmits(['update:title', 'update:author'])

function handler() {
  $emit('update:title', '百年孤独'+1)
}
</script>

<style lang="scss" scoped></style>