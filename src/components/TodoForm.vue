<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="newTodoText" placeholder="Add a new todo..." />
    <button type="submit">Add Todo</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const newTodoText = ref('');

const emit = defineEmits(['add-todo']);

const addTodo = () => {
  if (newTodoText.value.trim()) {
    emit('add-todo', newTodoText.value.trim());
    newTodoText.value = '';
  }
};
</script>

<style scoped>
/* Basic styling for the form */
form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input[type="text"] {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 8px 15px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369b6e;
}
</style>
