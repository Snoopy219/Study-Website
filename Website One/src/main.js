import './assets/main.css'
import 'animate.css';

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    state () {
      return {
        toDoShow: false,
        numCycles: 4,
        timeShortBreak: 5,
        timeLongBreak: 15,
        timeStudy: 25
      }
    },
    mutations: {
      flipToDo (state) {
        state.toDoShow = !state.toDoShow;
      },

      setCycles (state, numCycles, timeShortBreak, timeLongBreak, timeStudy) {
        state.numCycles = numCycles;
        state.timeShortBreak = timeShortBreak;
        state.timeLongBreak = timeLongBreak;
        state.timeStudy = timeStudy;
      }
    }
  })

  const app = createApp(App);
  app.use(store);
  app.mount('#app');

