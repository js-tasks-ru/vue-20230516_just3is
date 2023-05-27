import {createApp, defineComponent} from './vendor/vue.esm-browser.js';

const ButtonComponent = defineComponent({
  name: 'ButtonComponent',
  data: () => ({
    counter: 0,
  }),
  template: `<button type="button" @click="counter+=1">{{counter}}</button>`
});

createApp(ButtonComponent).mount('#app');
