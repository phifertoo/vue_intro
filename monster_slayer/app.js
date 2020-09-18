new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack: function () {
      let max = 10;
      let min = 3;
      const difference = max - min;
      let damage = Math.floor(Math.random() * difference) + min;
      this.monsterHealth -= damage;

      if (this.monsterHealth <= 0) {
        alert("You won!");
        this.gameIsRunning = false;
        return;
      }

      max = 12;
      min = 5;
      damage = Math.floor(Math.random() * difference) + min;
      this.playerHealth -= damage;

      if (this.playerHealth <= 0) {
        alert("You lost!");
        this.gameIsRunning = false;
      }
    },
    specialAttack: function () {},
    heal: function () {},
    giveUp: function () {},
  },
});
