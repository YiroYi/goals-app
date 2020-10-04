const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enterGoalValue: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enterGoalValue);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
