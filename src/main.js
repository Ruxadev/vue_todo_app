import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

/* Core Ionic imports */
import { IonicVue } from '@ionic/vue';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';


const app = createApp(App)
  .use(IonicVue, {
    mode: 'ios' // Set default mode to iOS for consistency, or 'md' for Material Design
  });

app.mount('#app');
