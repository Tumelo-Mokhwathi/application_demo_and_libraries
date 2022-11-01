<script>
import VueRadioButton from '../src/components/VueRadioButton.vue';

export default {
  components: {
    VueRadioButton,
  },
  computed: {
    text() {
      return 'Acknowledge';
    },
  },
  name: 'ServeDev',
};
</script>

<template>
  <div id="app">
    <b-container fluid class="mt-3">
      <b-row>
        <b-col><vue-radio-button :text="text" /></b-col>
      </b-row>
    </b-container>
  </div>
</template>
