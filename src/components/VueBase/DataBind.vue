<script setup>
import { ref, computed, watchEffect } from 'vue';
import 'animate.css';

// pinia使用
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/count';
const store = useCounterStore() // store 实例化
const { count, doubleVal } = storeToRefs(store)
const { increment } = store

setTimeout(() => {
  increment()
  console.log("方法已经调用!!!")
}, 1000)

// ref使用
let Count = ref(0);
function handleAdd() {
  Count.value++;
}
//监听数据改变
watchEffect(() => {
  console.log('Count', Count.value)
})
const inputVal = ref('开始');

// 列表渲染，添加
let id = 0
const newTodo = ref('')
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
])

function addTodo() { // 添加
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo) {  // 删除
  todos.value = todos.value.filter((t) => t !== todo)
}
// 计算属性隐藏
const hideCompleted = ref(false)
const filtedTodos = computed(() => {
  if (hideCompleted.value == false) {
    return todos.value
  } else {
    return todos.value.filter((todo) => todo.done == false)
  }
})


</script>

<template>
  <div>
    <h3>pinia 状态管理</h3>
    <el-text>值：{{ count }}，doubleVal {{ doubleVal }}</el-text>
    <el-divider></el-divider>
    <h3>数据绑定</h3>
    <span>单向数据绑定：Count: {{ Count }}</span>
    <el-button @click="handleAdd()">点我+1</el-button>
    <el-button @click="() => { Count-- }">点我-1</el-button>
    <div>
      双向数据绑定：<el-input style="width: 120px;" v-model="inputVal">开始</el-input>
      <span>数据展示： {{ inputVal }}</span>
    </div>

    <h3>计算属性 + 三方 css 动画库</h3>
    <form @submit.prevent="addTodo">
      <el-input v-model="newTodo" style="width: 120px;" />
      <el-button @click="addTodo">Add Todo</el-button>
      <el-button @click="hideCompleted = !hideCompleted">
        {{ hideCompleted ? 'Show all' : 'Hide completed' }}
      </el-button>
    </form>
    <ul>
      <TransitionGroup
        enter-active-class="animate__animated animate__tada"
        leave-active-class="animate__animated animate__bounceOutRight">
        <li v-for="todo in filtedTodos" :key="todo.id">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
          <button @click="removeTodo(todo)">X</button>
        </li>
      </TransitionGroup>
    </ul>


  </div>
</template>



<style lang="scss" scoped>
.done {
  text-decoration: line-through;
}
</style>