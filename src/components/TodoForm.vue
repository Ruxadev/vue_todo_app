<template>
  <form @submit.prevent="addTodo">
    <ion-item>
      <ion-input
        v-model="newTodoText"
        placeholder="Add a new to do..."
        clear-input="true"
        aria-label="New todo text"
      ></ion-input>
    </ion-item>
    <ion-button type="submit" expand="block" class="ion-margin-top">Add To Do</ion-button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { IonItem, IonInput, IonButton } from '@ionic/vue'

const newTodoText = ref('')

const emit = defineEmits(['add-todo'])

const addTodo = () => {
  if (newTodoText.value.trim()) {
    emit('add-todo', newTodoText.value.trim())
    newTodoText.value = ''
  }
}
</script>

<style scoped>
/* Scoped styles can be added here if further customization is needed */
</style>
