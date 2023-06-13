import MeetupView from '../../06-MeetupView/components/MeetupView';
import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from '../meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  watch: {
    meetupId: function(newMeetupId) {
      this.updateMeetup(newMeetupId);
    }
  },

  components: {
    MeetupView,
    UiAlert,
    UiContainer,
  },

  data() {
    return {
      isLoading: true,
      meetup: null,
      error: null,
    };
  },

  methods: {
    updateMeetup(meetupId) {
      this.meetup = null;
      this.isLoading = true;
      this.error = null;
      fetchMeetupById(meetupId)
        .then((meetup) => {
          this.meetup = meetup;
        })
        .catch((error) => {
          this.error = error.message;
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  },

  mounted() {
    this.updateMeetup(this.meetupId);
  },

  template: `
    <div class="page-meetup">
    <!-- meetup view -->
    <MeetupView v-if="meetup" :meetup="meetup" />
    <UiContainer v-else-if="isLoading">
      <UiAlert>Загрузка...</UiAlert>
    </UiContainer>

    <UiContainer v-else-if="error">
      <UiAlert>{{ error }}</UiAlert>
    </UiContainer>
    </div>`,
});
