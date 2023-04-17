<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/"><el-link type="primary">Home</el-link></RouterLink>
      <RouterLink to="/about"><el-link type="success">About</el-link></RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style>
.el-link {
  margin-right: 8px;
}

.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}</style>