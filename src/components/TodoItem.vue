<template>
  <li class="todo-item">
    <span>{{ todo.text }}</span>
    <button @click="deleteTodo" class="delete-button">Delete</button>
  </li>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['delete-todo']);

const deleteTodo = () => {
  emit('delete-todo', props.todo.id);
};
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.todo-item:last-child {
  border-bottom: none;
}

span {
  flex-grow: 1;
  margin-right: 10px;
  word-break: break-word;
}

.delete-button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.delete-button:hover {
  background-color: #cc0000;
}
</style>
