<script setup>
import { ref, computed, watch } from 'vue'
import TodoForm from './TodoForm.vue';
import TodoItem from './TodoItem.vue';
import { IonList, IonListHeader, IonLabel } from '@ionic/vue';

// --- Persistence Logic: Loading (FIXED) ---
// This function safely loads todos from localStorage.
function loadInitialTodos() {
  const savedTodosJSON = localStorage.getItem('todos');
  if (savedTodosJSON) {
    try {
      // If data exists and is valid JSON, parse and return it.
      return JSON.parse(savedTodosJSON);
    } catch (e) {
      console.error("Error parsing todos from localStorage:", e);
      // If data is corrupted, fall back to the default list.
    }
  }
  // If no data exists, return the default list.
  return [
    { id: 1, text: 'Learn Vue.js', completed: false },
    { id: 2, text: 'Build a to do App', completed: true },
    { id: 3, text: 'Master Reactivity', completed: false }
  ];
}

const todos = ref(loadInitialTodos());

// Ensure nextId is always higher than the highest existing ID.
let nextId = ref(Math.max(0, ...todos.value.map(t => t.id)) + 1);

// --- Persistence Logic: Saving ---
// Watch the todos array for any changes and save them to Local Storage.
watch(todos, (newTodos) => {
  localStorage.setItem('todos', JSON.stringify(newTodos));
}, { deep: true });


// --- Component Methods ---

function addTodo(todoText) {
  todos.value.push({
    id: nextId.value++,
    text: todoText,
    completed: false
  });
}

function deleteTodo(idToDelete) {
  todos.value = todos.value.filter((todo) => todo.id !== idToDelete);
}

function toggleComplete(idToToggle) {
  const todoToToggle = todos.value.find((todo) => todo.id === idToToggle);
  if (todoToToggle) {
    todoToToggle.completed = !todoToToggle.completed;
  }
}

function updateTodo(idToUpdate, newText) {
  const todoToUpdate = todos.value.find((todo) => todo.id === idToUpdate);
  if (todoToUpdate) {
    todoToUpdate.text = newText;
  }
}

// Computed property for incomplete todos count
const incompleteTodosCount = computed(() => {
  return todos.value.filter(todo => !todo.completed).length;
});
</script>

<template>
  <TodoForm @add-todo="addTodo" />

  <p style="text-align: center; margin: 20px 0;">Incomplete Todos: {{ incompleteTodosCount }}</p>

  <ion-list>
    <ion-list-header>
      <ion-label>Your Todos</ion-label>
    </ion-list-header>
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @delete-todo="deleteTodo"
      @toggle-complete="toggleComplete"
      @update-todo="updateTodo"
    />
  </ion-list>
</template>

<style scoped></style>
