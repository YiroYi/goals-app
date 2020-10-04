const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name
    },
    submitForm() {
      alert('Submitted');
    },
    setName(eventn, name) {
      this.name = event.target.value + name
    },
    addNumber(num) {
      this.counter = this.counter + num
    },
    decreaseNumber(num) {
      this.counter = this.counter - num
    }
  }
});

app.mount('#events');
