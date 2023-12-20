import './assets/main.css'
import 'animate.css';

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    state () {
      return {
        toDoShow: false
      }
    },
    mutations: {
      flipToDo (state) {
        state.toDoShow = !state.toDoShow;
      }
    }
  })

  const app = createApp(App);
  app.use(store);
  app.mount('#app');

