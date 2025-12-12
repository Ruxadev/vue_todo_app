<script setup>
import { ref } from 'vue'

const todos = ref([
  { id: 1, text: 'Learn Vue.js', completed: false },
  { id: 2, text: 'Build a Todo App', completed: false },
  { id: 3, text: 'Master Reactivity', completed: false }
])

const newTodoText = ref('')
let nextId = 4; // Simple way to generate unique IDs

function addTodo() {
  if (newTodoText.value.trim() === '') {
    return // Don't add empty todos
  }
  todos.value.push({
    id: nextId++,
    text: newTodoText.value,
    completed: false
  })
  newTodoText.value = '' // Clear the input field
}
</script>

<template>
  <div>
    <h2>This is the TodoApp Component</h2>
    
    <input
      type="text"
      v-model="newTodoText"
      placeholder="Add a new todo"
    />
    <button @click="addTodo">Add Todo</button>

    <pre>{{ todos }}</pre>
  </div>
</template>

<style scoped>
</style>
