<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios';
import TodoForm from './TodoForm.vue';
import TodoItem from './TodoItem.vue';
import { IonList, IonListHeader, IonLabel } from '@ionic/vue';

const todos = ref([]);
const API_URL = 'http://localhost:3000/locations/1/todos'; // Using a fixed location for now

// --- Data Fetching ---
const fetchTodos = async () => {
  try {
    const response = await axios.get(API_URL);
    todos.value = response.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    // Optionally, set a default or show an error message
    todos.value = [
      { id: -1, text: 'Error loading todos. Please try again later.', completed: false, isError: true }
    ];
  }
};

onMounted(() => {
  fetchTodos();
});


// --- Component Methods (Will be updated in next steps) ---

// --- Component Methods ---

async function addTodo(todoText) {
  try {
    const response = await axios.post(API_URL, { todo: { text: todoText, completed: false } });
    todos.value.push(response.data); // Add the new todo from the API response
  } catch (error) {
    console.error("Error adding todo:", error);
    // Optionally, show an error message to the user
  }
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
