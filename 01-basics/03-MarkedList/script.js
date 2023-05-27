import { createApp } from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

createApp({
  name: 'MarkedList',
  data() {
    return {
      search: '',
    };
  },
  computed: {
    normalizedEmails() {
      return emails.map(this.normalize);
    }
  },
  methods: {
    normalize(email) {
      return {
        value: email,
        selected: this.search && email.includes(this.search)
      };
    }
  },
  template: `
    <div class="container">
      <div class="form-group">
        <input type="search" v-model="search" />
      </div>
      <ul>
        <li v-for="{value, selected} in normalizedEmails" :class="{ marked: selected }">{{ value }}</li>
      </ul>
    </div>
  `
}).mount('#app')
