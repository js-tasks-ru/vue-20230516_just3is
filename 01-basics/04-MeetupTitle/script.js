import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

createApp({
  name: 'MeetupTitle',
  data() {
    return {
      title: '',
      meetupId: null,
    }
  },
  watch: {
    meetupId(id) {
      fetchMeetupById(id).then((data) => this.title = data.title)
    }
  },
  template: `
    <div>
      <label><input type="radio" name="meetupId" value="1" v-model="meetupId" /> 1</label>
      <label><input type="radio" name="meetupId" value="2" v-model="meetupId" /> 2</label>
      <label><input type="radio" name="meetupId" value="3" v-model="meetupId" /> 3</label>
      <label><input type="radio" name="meetupId" value="4" v-model="meetupId" /> 4</label>
      <label><input type="radio" name="meetupId" value="5" v-model="meetupId" /> 5</label>

      <hr />

      <h3>{{ title }}</h3>
    </div>
  `
}).mount('#app')
