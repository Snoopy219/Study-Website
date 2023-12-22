<script>
    export default{
        data(){
            return{
                message: "",
                checked: [],
                items: [
                ],
            };
        },
        methods:{
            handleBttnClick() {
                this.items.push({name: this.message, checked : false})
            },

            resetList() {
                this.items = [];
            }
        }
    }
</script>

<template>
    <div v-if="this.$store.state.toDoShow" class="check">
        <h3>To Do List</h3>
        <div class = "chekcBox" v-for="item in items">
            <input type="checkbox" id= {item.name} value={item.name} v-model="item.checked">
            <label class="strike" for={item.name}>{{ item.name }}</label>
        </div>
        <div class = "addItem">
            <input id = "type" v-model.trim="this.message" v-on:keyup.enter="handleBttnClick" placeholder="Homework, Exams, ..." />
            <button @click = "handleBttnClick">Add Item</button>
        </div>
        <button @click = "resetList">Reset</button>
        <h3 v-if="items.length == 0">Percent Done:</h3>
        <h3 v-else>Percent Done: {{ Math.round(((this.items.filter(item => item.checked === true).length) / items.length) * 100) }}%</h3>
    </div>
</template>

<style>

.addItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: max-content;
}
.check {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
}

button {
    padding: 5px;
    border-radius: 4px;
}

input[type=checkbox]:checked + label.strike{
  text-decoration: line-through;
}
</style>