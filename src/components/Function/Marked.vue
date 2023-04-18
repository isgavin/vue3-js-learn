
<script setup>
import { marked } from 'marked';
import { debounce } from 'lodash-es';
import { ref, computed } from 'vue';

const inputVal = ref('## ~~Hello World~~');
const outputVal = computed(() => {
  return marked(inputVal.value);
});

// 防抖 回城，被打断，重新计时
const updateVal = debounce((e) => {
  inputVal.value = e.target.value;
}, 500)
</script>
<template>
  <div class="mback">
    <h3>Marked</h3>
    <div class="marked">
      <div class="input">
        <h3>输入区域：</h3>
        <textarea v-model="inputVal" @input="updateVal"></textarea>
      </div>
      <div class="output">
        <h3>展示区域：</h3>
        <div v-html="outputVal"></div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.mback {
  background-color: beige;
}

.marked {
  display: flex;

  .input {
    textarea {
      width: 300px;
      height: 130px;
    }


  }

  .output {
    width: 300px;
    height: 200px;
  }
}
</style>