import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from '../meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',
  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imgSrc() {
      return `/assets/icons/icon-${agendaItemIcons[this.agendaItem.type]}.svg`
    },
    period() {
      return `${this.agendaItem.startsAt} - ${this.agendaItem.endsAt}`;
    },
    title() {
      return this.agendaItem.title ?? agendaItemDefaultTitles[this.agendaItem.type];
    },
    isTalk() {
      return this.agendaItem.type === 'talk';
    }
  },
  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="imgSrc" class="icon" :alt="agendaItem.type" />
      </div>
      <div class="agenda-item__col">{{ period }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ title }}</h3>
        <p class="agenda-item__talk">
          <span v-if="agendaItem.type === 'talk'">{{ agendaItem.speaker }}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang" v-if="isTalk">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
