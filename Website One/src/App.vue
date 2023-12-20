<script>
import Timer from './components/Timer.vue'
import Settings from './components/Settings.vue'
import Checklist from './components/Checklist.vue'
  export default{
    data(){
      return{
        animate: false
      }
    },
    components: {
      Timer,
      Settings,
      Checklist
    }
  }
</script>

<template>
  <div class = "set">
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
    width: 300px
  }

  .checks{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

</style>
