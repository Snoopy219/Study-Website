<script>
    export default{
        data(){
            return{
                show: false,
                elShown: [false, false, false]
            };
        },
        methods:{
            handleClick(){
                this.show=!this.show;
            },
            handleClickEl(num){
                switch (num){
                    case 1:
                        console.log(1);
                        break;
                    case 2:
                        console.log(2);
                        break;
                    case 3:
                        this.$store.commit('flipToDo');
                        break;
                }
                this.elShown[num - 1] = !this.elShown[num - 1];
            }
        }
    }
</script>

<template>
    <div class="sett">
        <img v-if="!show" src="../assets/images/plus.png" width="50" @click="handleClick">
        <div v-if="show" class="sett1">
            <button @click="handleClick">Close</button>
                <h1>Add Elements</h1>
                <div class="back">
                    <h3>Background</h3>
                    <img v-if= "this.elShown[0]" src="../assets/images/minus.png" width="20" @click="handleClickEl(1)">
                    <img v-else src="../assets/images/plus.png" width="20" @click="handleClickEl(1)">
                </div>
                <div class="music">
                    <h3>Music</h3>
                    <img v-if= "this.elShown[1]" src="../assets/images/minus.png" width="20" @click="handleClickEl(2)">
                    <img v-else src="../assets/images/plus.png" width="20" @click="handleClickEl(2)">
                </div>
                <div class="todo">
                    <h3>To-Do List</h3>
                    <img v-if= "this.elShown[2]" src="../assets/images/minus.png" width="20" @click="handleClickEl(3)">
                    <img v-else src="../assets/images/plus.png" width="20" @click="handleClickEl(3)">
                </div>
        </div>
    </div>
</template>

<style>
    .sett1{
        background-color: #A8DADC;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 5px;

    }

    h3{
        text-align:center;
        margin:5px;
    }
    .back, .music, .todo{
        display: flex;
        align-items: center;
    }
</style>