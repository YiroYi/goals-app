const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      //fullname: '',
      lastName:''
    };
  },
  watch:{
    counter(value) {
      if(value > 10) {this.counter = 0}
    }
    // name(value) {
    //   if(value === '') {
    //     this.fullname = '';
    //   }else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }

    //   //en este caso el value es el nombre de la propiedad name
    //   //lo pasamos como argumento
    // },
    // lastName(value) {
    //   if(value === '') {
    //     this.fullname = '';
    //   }else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  computed:{
    fullname() {
      if(this.name === '') {
              return '';
            }
      return this.name + ' ' + this.lastName;
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
