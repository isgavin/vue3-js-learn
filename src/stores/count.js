// stores/counter.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  //setup 式写法
  const count = ref(0) //state
  //action
  function increment () {
    count.value++
  }
  //getter
  const doubleVal = computed(() => {
    return count.value * 10
  })

  return { count, increment, doubleVal }
})
