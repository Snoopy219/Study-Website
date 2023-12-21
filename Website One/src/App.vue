<script>
import Timer from './components/Timer.vue'
import Settings from './components/Settings.vue'
import Checklist from './components/Checklist.vue'
import AddEl from './components/AddEl.vue'
  export default{
    data(){
      return{
        animate: false
      }
    },
    components: {
      Timer,
      Settings,
      Checklist,
      AddEl
    }
  }
</script>

<template>
  <div class = "set">
    <AddEl />
    <Settings />
  </div>
  <div class = "checks">
    <Timer />
    <Checklist />
  </div>
</template>

<style>
  .set{
    position: fixed;
    top: 0;
    left:0;
    display: flex;
    width: 400px;
  }

  .set > * {
    padding: 5px;
  }

  .checks{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
  }

</style>
