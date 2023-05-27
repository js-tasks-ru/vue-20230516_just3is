import { createApp } from './vendor/vue.esm-browser.js';

createApp({
  name: 'VueCalculator',
  data() {
    return {
      firstNumber: 0,
      secondNumber: 0,
      operator: 'sum',
    }
  },
  computed: {
    result() {
      switch (this.operator) {
        case 'subtract':
          return this.firstNumber - this.secondNumber;
        case 'multiply':
          return this.firstNumber * this.secondNumber;
        case 'divide':
          return this.firstNumber / this.secondNumber;
        default:
          return this.firstNumber + this.secondNumber;
      }
    }
  },
  template: `
    <div class="row">
      <div class="col">
        <input type="number" v-model="firstNumber" />
      </div>

      <div class="col" style="display: flex; flex-direction: column; font-family: emoji">
        <label><input type="radio" name="operator" v-model="operator" value="sum" /> ➕</label>
        <label><input type="radio" name="operator" v-model="operator" value="subtract" /> ➖</label>
        <label><input type="radio" name="operator" v-model="operator" value="multiply" /> ✖</label>
        <label><input type="radio" name="operator" v-model="operator" value="divide" /> ➗</label>
      </div>

      <div class="col">
        <input type="number" v-model="secondNumber" />
      </div>

      <div class="col">=</div>

      <output class="col" v-model="result">{{ result }}</output>
    </div>
  `
}).mount('#app');
