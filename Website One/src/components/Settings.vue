<script>
    export default{
        data(){
            return{
                show: false,
                numCycles: this.$store.state.numCycles,
                timeLongBreak: this.$store.state.timeLongBreak,
                timeShortBreak: this.$store.state.timeShortBreak,
                timeStudy: this.$store.state.timeStudy
            };
        },
        methods:{
            handleClick(){
                this.show=!this.show;
            },

            saveSet() {
                this.$store.state.numCycles = this.numCycles;
                this.$store.state.timeLongBreak = this.timeLongBreak;
                this.$store.state.timeShortBreak = this.timeShortBreak;
                this.$store.state.timeStudy = this.timeStudy;
                this.handleClick();
            }
        }
    }
</script>

<template>
    <div class="settings">
        <img v-if="!show" src="../assets/images/gear.png" width="50" @click="handleClick">
        <div v-if="show" class="settings1">
            <button @click = "saveSet">Save</button>
            <span>
                <h3>Num Cycles</h3>
                <input v-model.trim = "this.numCycles" placeholder = 4>
            </span>
            <span>
                <h3>Study Time</h3>
                <input v-model.trim = "this.timeStudy" placeholder = 25>
            </span>
            <span>
                <h3>Long Break</h3>
                <input v-model.trim = "this.timeLongBreak" placeholder = 15>
            </span>
            <span>
                <h3>Short Break</h3>
                <input v-model.trim = "this.timeShortBreak" placeholder = 5>
            </span>
        </div>
    </div>
</template>

<style>
    .settings1{
        background-color: #A8DADC;
        display: flex;
        align-items: center;
        flex-direction: column;

    }

    span {
        display: flex;
        align-items: row;
    }
    
    input {
        max-width: 25px;
    }

    h3{
        text-align:center;
        margin:5px;
    }
</style>