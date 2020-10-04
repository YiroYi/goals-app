const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addNumber() {
      this.counter ++
    },
    decreaseNumber() {
      this.counter --
    }
  }
});

app.mount('#events');
