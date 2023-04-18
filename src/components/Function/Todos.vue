<script setup>
import { ref, computed, watchEffect } from 'vue';
import 'animate.css';
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
  <div class="todos">
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
.todos{
  background-color: bisque;
}
</style>