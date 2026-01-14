<template>
  <ion-item>
    <ion-checkbox
      :checked="todo.completed"
      @ionChange="toggleComplete"
      slot="start"
      aria-label="Toggle complete"
    ></ion-checkbox>

    <!-- Edit Mode -->
    <div v-if="isEditing" class="edit-container">
      <ion-input
        v-model="editedText"
        @keyup.enter="finishEditing"
        @keyup.esc="cancelEditing"
        autofocus="true"
        class="edit-input"
        aria-label="Edit todo text"
      ></ion-input>
      <ion-button @click="finishEditing" fill="clear" aria-label="Save">
        <ion-icon slot="icon-only" :icon="checkmarkOutline"></ion-icon>
      </ion-button>
      <ion-button @click="cancelEditing" fill="clear" color="danger" aria-label="Cancel">
        <ion-icon slot="icon-only" :icon="closeOutline"></ion-icon>
      </ion-button>
    </div>

    <!-- View Mode -->
    <div v-else class="view-container">
      <ion-label :class="{ completed: todo.completed }">
        {{ todo.text }}
      </ion-label>
      <ion-button @click="startEditing" fill="clear" aria-label="Edit">
        <ion-icon slot="icon-only" :icon="createOutline"></ion-icon>
      </ion-button>
      <ion-button @click="deleteTodo" fill="clear" color="danger" aria-label="Delete">
        <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
      </ion-button>
    </div>

  </ion-item>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps, defineEmits } from 'vue';
import {
  IonItem,
  IonCheckbox,
  IonLabel,
  IonButton,
  IonIcon,
  IonInput
} from '@ionic/vue';
import { createOutline, trashOutline, checkmarkOutline, closeOutline } from 'ionicons/icons';

const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['delete-todo', 'toggle-complete', 'update-todo']);

const isEditing = ref(false);
const editedText = ref(props.todo.text);

const deleteTodo = () => {
  emit('delete-todo', props.todo.id);
};

const toggleComplete = () => {
  emit('toggle-complete', props.todo.id);
};

const startEditing = () => {
  isEditing.value = true;
  editedText.value = props.todo.text;
};

const finishEditing = () => {
  if (editedText.value && editedText.value !== props.todo.text) {
    emit('update-todo', props.todo.id, editedText.value);
  }
  isEditing.value = false;
};

const cancelEditing = () => {
  isEditing.value = false;
  editedText.value = props.todo.text;
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: var(--ion-color-medium);
}

.edit-container, .view-container {
  display: flex;
  align-items: center;
  width: 100%;
}

ion-label {
  flex-grow: 1;
  margin-right: 10px;
  white-space: normal; /* Allow text to wrap */
}

.edit-input {
  flex-grow: 1;
}
</style>
