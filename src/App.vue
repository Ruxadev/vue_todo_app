<script setup>
import TodoApp from './components/TodoApp.vue';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/vue';
</script>

<template>
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-title>Vue Todo</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <TodoApp />
    </ion-content>
  </ion-app>
</template>

<style>
/* We can leave this empty or add global styles later */
</style>


