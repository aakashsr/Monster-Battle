new Vue({
    el: '#app',
    data: {
        playerHealth: 10,
        monsterHealth: 100,
        isRunning: false
    },
    methods: {
        toggleGame: function () {
            this.isRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        }
    }
})