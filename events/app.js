const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  computed:{
    fullname() {
      if(this.name === '') {
              return '';
            }
      return this.name + ' ' + 'Yi'
    }
  },
  methods: {
    outputFullName() {

      if(this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Yi'
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submitted');
    },
    setName(event, name) {
      this.name = event.target.value;
    },
    addNumber(num) {
      this.counter = this.counter + num;
    },
    decreaseNumber(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
     this.name = '';
    }
  }
});

app.mount('#events');
