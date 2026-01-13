<script setup>
import { ref } from 'vue'
import TodoForm from './TodoForm.vue'
import TodoItem from './TodoItem.vue' // Import the new component

const todos = ref([
  { id: 1, text: 'Learn Vue.js', completed: false },
  { id: 2, text: 'Build a Todo App', completed: true },
  { id: 3, text: 'Master Reactivity', completed: false }
])

let nextId = 4

// Renamed for clarity
function addTodo(todoText) {
  todos.value.push({
    id: nextId++,
    text: todoText,
    completed: false
  })
}

// Method to handle the delete event
function deleteTodo(idToDelete) {
  todos.value = todos.value.filter((todo) => todo.id !== idToDelete)
}

// Method to handle the toggle event
function toggleComplete(idToToggle) {
  const todoToToggle = todos.value.find((todo) => todo.id === idToToggle)
  if (todoToToggle) {
    todoToToggle.completed = !todoToToggle.completed
  }
}
</script>

<template>
  <div>
    <h2>This is the TodoApp Component</h2>

    <TodoForm @add-todo="addTodo" />

    <ul>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @delete-todo="deleteTodo"
        @toggle-complete="toggleComplete"
      />
    </ul>
  </div>
</template>

<style scoped></style>
