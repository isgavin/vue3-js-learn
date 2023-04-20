<script setup>
import { ref,computed } from 'vue';

let id = 0
const names = [{
  id: id++,
  firstName: '张',
  listName: '三'
}, {
  id: id++,
  firstName: '王',
  listName: '五'
}, {
  id: id++,
  firstName: '李',
  listName: '六'
},
]
const isNames = ref(names)

const first = ref('')
const last = ref('')
const selected = ref('')
const serach = ref('')

function handleAdd() {
  isNames.value.unshift({
    id: id++, firstName: first.value,
    listName: last.value
  })
  first.value = ''
  last.value = ''
}

function handleUpdate() {
  isNames.value.filter((item) => {
    if (selected.value == item.firstName + '---' + item.listName) {
      item.firstName = first.value
      item.listName = last.value
    }
  })
  first.value = ''
  last.value = ''
}

function handleDelete() {
  // 根据字符串，找到数组的下标
  let index = isNames.value.findIndex((item) => {
    return selected.value == item.firstName + '---' + item.listName
  })
  isNames.value.splice(index, 1)
}

const serachedNames = computed(() => {
  return isNames.value.filter((item) => {
    return item.firstName.indexOf(serach.value) != -1 || item.listName.indexOf(serach.value) != -1
  })
})
</script>

<template>
  <div class="names">
    <div>
      <label> 姓：<input type="text" v-model="first" /></label>
      <label> 名：<input type="text" v-model="last" /></label>  <button @click="handleAdd">添加</button>
    <button @click="handleUpdate">更新</button>
    <button @click="handleDelete">删除</button>
    </div>
    <div>
      <label> 实时搜索：<input type="text" v-model="serach" /></label>
    </div>
    <div>
      <div>展示选择区</div>
      <select size="6" v-model="selected" style="width: 120px;">
        <option v-for="item in serachedNames" :key="item.id">{{ item.firstName }}---{{ item.listName }}</option>
      </select>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.names {
  background-color: cadetblue;
}
</style>