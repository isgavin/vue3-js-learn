
<script setup>
import { marked } from 'marked';
import { debounce } from 'lodash-es';
import { ref, computed } from 'vue';

const inputVal = ref('## Hello World');
const outputVal = computed(() => {
  return marked(inputVal.value);
});

// 防抖 回城，被打断，重新计时
const updateVal = debounce((e) => { 
  inputVal.value = e.target.value;
},500)
</script>
<template>
  <div>
    <h3>Marked</h3>
    <div class="input">
      输入区域：<textarea v-model="inputVal" @input="updateVal"></textarea>
    </div>
    <div class="output" v-html="outputVal"></div>
  </div>
</template>


<style lang="scss" scoped>
.input{
  textarea{
    width: 300px;
    height: 200px;
  }
}
</style>