<script setup>
import { ref } from 'vue'

const todos = ref([
  { id: 1, text: 'Learn Vue.js', completed: false },
  { id: 2, text: 'Build a Todo App', completed: false },
  { id: 3, text: 'Master Reactivity', completed: false }
])
</script>

<template>
  <div>
    <h2>This is the TodoApp Component</h2>
    <pre>{{ todos }}</pre>
  </div>
</template>

<style scoped>
</style>
