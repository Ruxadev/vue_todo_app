<script setup>
import { ref } from 'vue'
import TodoForm from './TodoForm.vue' // 1. Import the new component

const todos = ref([
  { id: 1, text: 'Learn Vue.js', completed: false },
  { id: 2, text: 'Build a Todo App', completed: false },
  { id: 3, text: 'Master Reactivity', completed: false },
])

let nextId = 4

// 2. Create the event handler function
function handleNewTodo(todoText) {
  todos.value.push({
    id: nextId++,
    text: todoText,
    completed: false,
  })
}
</script>

<template>
  <div>
    <h2>This is the TodoApp Component</h2>

    <!-- 3. Use the new component and listen for its event -->
    <TodoForm @add-todo="handleNewTodo" />

    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
