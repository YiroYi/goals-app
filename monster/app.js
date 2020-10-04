const getRandomValue = (min, max) => {
  Math.floor(Math.random() * (max - min)) + min;
}


const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      mosterHealth: 100
    };
  },
  methods: {
    attackMoster() {
      const attackValue = getRandomValue(5, 12)
      this.mosterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15)
      this.playerHealth -= attackValue;
    }

  }
})

app.mount('#game');
