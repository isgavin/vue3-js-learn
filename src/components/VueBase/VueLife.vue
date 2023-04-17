<script setup>
import { ref, onBeforeUnmount } from 'vue';
import "animate.css"

// 生命周期
let NowNumber = ref(0)
let Timer

Timer = setInterval(() => {
  NowNumber.value++
}, 1000)

onBeforeUnmount(() => {
  clearInterval(Timer)
  console.log('组件销毁了')
})


// 样式绑定
let myColor = ref(true)


</script>

<template>
  <div>
    <h3 :class="myColor ? 'my-color ' : 'blue-color'">生命周期</h3>
    <el-button @click="() => NowNumber--">{{ NowNumber }} 点我-1</el-button>
    <el-button @click="myColor = !myColor">样式绑定</el-button>
    <Transition
      name="custom-classes"
      enter-active-class="animate__animated animate__backInDown"
      leave-active-class="animate__animated animate__fadeOutDown">
      <el-text type="danger" v-show="myColor">现在是红色</el-text>
    </Transition>
    <Transition
      name="custom-classes"
      enter-active-class="animate__animated animate__backInDown"
      leave-active-class="animate__animated animate__fadeOutDown">
      <el-text type="primary" v-show="myColor == false">现在是蓝色</el-text>
    </Transition>

  </div>
</template>

<style lang="scss">
.my-color {
  color: red;
}

.blue-color {
  color: blue;
}
</style>



<style lang="scss" scoped></style>