new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.isRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },

        attack: function () {
            let damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            })
            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();
        },

        specialAttack: function () {
            this.monsterHealth -= this.calculateDamage(10, 20);
            if (this.checkWin()) {
                return;
            }

            this.monsterAttack()
        },

        monsterAttack: function () {
            let damage = this.calculateDamage(5, 10);
            this.playerHealth -= damage;
            this.checkWin();
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'MOnster hits player for ' + damage
            })
        },

        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min)
        },

        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm("You won! New Game?")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
            } else if (this.playerHealth <= 0) {
                if (confirm("You lost! New Game?")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
            }
        },

        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100
            }

            this.monsterAttack();
        },

        giveUp: function () {
            this.isRunning = false;
        }
    }
})