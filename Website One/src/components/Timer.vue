<script>

    export default{
        data(){
            return {
                currentTime: 0,
                startTime: 6000,
                secPass: 0,
                work: true,
                running: false,
                totalPomodoros: 0,
            };
        },
        computed: {
            seconds() {
                if(Math.floor((this.currentTime / 1000) % 60) < 10){
                    return String(Math.floor((this.currentTime / 1000) % 60)).padStart(2, '0');
                }else{
                    return Math.floor((this.currentTime / 1000) % 60);
                }
            },
            minutes() {
                return Math.floor(this.currentTime / 60000);
            },
            buttonText(){
                if(!this.work && this.secPass == 0){
                    return "Start Break Time!";
                }else if(this.secPass == 0){
                    return "Start Studying!";
                }else if(this.running){
                    return "Pause";
                }else{
                    return "Resume";
                }
            },
            workOrPlay(){
                if(this.work){
                    return "📚 Time to Study 📚";
                }else{
                    return "🏖️ Break Time 🏖️";
                }
            },
            cycle(){
                return (Math.ceil(this.totalPomodoros / 2)) % ((this.$store.state.numCycles) + 1);
                // if(this.totalPomodoros == 0){
                //     return (Math.ceil(this.totalPomodoros / 2)) % ((8 / 2) + 1);
                // }else if((this.totalPomodoros % 8 == 0)
                //     ||(this.totalPomodoros % 7 == 0)){
                //     console.log(this.totalPomodoros);
                //     return 4;
                // }else if((this.totalPomodoros % 6 == 0) 
                //     ||(this.totalPomodoros % 5 == 0)){
                //     return 3;
                // }else if((this.totalPomodoros % 4 == 0)
                //     ||(this.totalPomodoros % 3 == 0)){
                //     return 2;
                // }else{
                //     return 1;
                // }
            }
        },
        methods:{
            countdown(){
                if(this.running){
                    this.currentTime = this.startTime - this.secPass * 1000;
                    if(this.currentTime > 0){
                        this.secPass++;
                        setTimeout(this.countdown, 1000);
                    }else{
                        this.currentTime = 0;
                        this.secPass = 0;
                        this.work = !this.work;
                        this.running = false;
                    }
                }
            },
            timeReset(){
                setTimeout(() => {
                    if(!this.running && this.currentTime == 0){
                        this.running = true;
                        this.totalPomodoros++;
                        if(this.work){
                            this.startTime = this.$store.state.timeStudy * 60000;
                        }else if(!this.work && (this.totalPomodoros % (this.$store.state.numCycles * 2) == 0)){
                            this.startTime = this.$store.state.timeLongBreak * 60000;
                        }else{
                            this.startTime = this.$store.state.timeShortBreak * 60000;
                        }
                        setTimeout(this.countdown, 1000);
                    }else if(!this.running){
                        this.running = true;
                        setTimeout(this.countdown, 1000);
                    }else{
                        this.running = false;
                    } 
                }, 500);
            }
        }


    }
</script>

<template>
<div class = "items">
    <h1>{{ workOrPlay }}</h1>
    <h5>Cycle: {{ cycle }}</h5>
    <h1>{{ minutes }}  :  {{ seconds }}</h1>
    <br>
    <div>
        <button @click="timeReset">{{ buttonText }}</button>
    </div>  
</div>
</template>

<style>
button{
    background-color:#F1FAEE;
    color:#1D3557;
    margin: 15px;
    padding:10px;
    border-radius: 8px;
    transition-duration: 0.5s;
}

button:hover{
    background-color:#1D3557;
    color:#F1FAEE;
}

h1{
    margin:auto;
    text-align:center
}

.items{
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #A8DADC;
    height: 300px;
    width:450px;
    border: 0.5rem dashed #1D3557;
    border-radius: 15px;
}
</style>