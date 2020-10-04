const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addNumber(num) {
      this.counter = this.counter + num
    },
    decreaseNumber(num) {
      this.counter = this.counter - num
    }
  }
});

app.mount('#events');
