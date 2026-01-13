<template>
  <li class="todo-item">
    <input type="checkbox" :checked="todo.completed" @change="toggleComplete" class="todo-checkbox" />

    <div v-if="isEditing" class="edit-mode">
      <input
        type="text"
        v-model.trim="editedText"
        @keyup.enter="finishEditing"
        @keyup.esc="cancelEditing"
        @blur="finishEditing"
        class="edit-input"
      />
      <button @click="finishEditing" class="save-button">Save</button>
      <button @click="cancelEditing" class="cancel-button">Cancel</button>
    </div>

    <div v-else class="view-mode">
      <span :class="{ completed: todo.completed }" class="todo-text">
        {{ todo.text }}
      </span>
      <button @click="startEditing" class="edit-button">Edit</button>
      <button @click="deleteTodo" class="delete-button">Delete</button>
    </div>
  </li>
</template>

<script setup>
import { ref } from 'vue'; // Import ref for local state management
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['delete-todo', 'toggle-complete', 'update-todo']); // Add update-todo event

const isEditing = ref(false); // Local state to control edit mode
const editedText = ref(props.todo.text); // Local state for the input field

const deleteTodo = () => {
  emit('delete-todo', props.todo.id);
};

const toggleComplete = () => {
  emit('toggle-complete', props.todo.id);
};

const startEditing = () => {
  isEditing.value = true;
  editedText.value = props.todo.text; // Ensure editedText is current when starting edit
};

const finishEditing = () => {
  if (editedText.value && editedText.value !== props.todo.text) {
    emit('update-todo', props.todo.id, editedText.value);
  }
  isEditing.value = false;
};

const cancelEditing = () => {
  isEditing.value = false;
  editedText.value = props.todo.text; // Revert changes if cancelled
};
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center; /* Vertically align items */
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.todo-item:last-child {
  border-bottom: none;
}

.todo-checkbox {
  margin-right: 10px; /* Space between checkbox and text */
}

.view-mode, .edit-mode {
  display: flex;
  flex-grow: 1; /* Allow these modes to take available space */
  align-items: center;
}

.todo-text {
  flex-grow: 1;
  margin-right: 10px;
  word-break: break-word;
}

.completed {
  text-decoration: line-through;
  color: #aaa;
}

.edit-mode .edit-input {
  flex-grow: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 5px;
}

.edit-button, .save-button, .cancel-button {
  background-color: #4CAF50; /* Green */
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 5px;
  transition: background-color 0.2s;
}

.edit-button:hover, .save-button:hover {
  background-color: #45a049;
}

.cancel-button {
  background-color: #f44336; /* Red */
}

.cancel-button:hover {
  background-color: #da190b;
}

.delete-button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 5px; /* Add margin for spacing */
  transition: background-color 0.2s;
}

.delete-button:hover {
  background-color: #cc0000;
}
</style>
