<script>
import Timer from './components/Timer.vue'
import Settings from './components/Settings.vue'
  export default{
    data(){
      return{
        animate: false
      }
    },
    components: {
      Timer,
      Settings
    }
  }
</script>

<template>
  <div class="set">
    <Settings />
  </div>
  <Timer />
</template>

<style>
  .set{
    position: fixed;
    top: 0;
    left:0;
    width: 300px
  }
</style>
