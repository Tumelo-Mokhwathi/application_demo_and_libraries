<script>
import VueInputText from '../src/components/VueInputText.vue';

export default {
  components: {
    VueInputText,
  },
  computed: {
    text() {
      return 'Confirm';
    },
  },
  name: 'ServeDev',
};
</script>

<template>
  <div id="app">
    <b-container fluid class="mt-3">
      <b-row>
        <b-col><vue-input-text placeholderText="Enter your text here..." typeText="text"/></b-col>
      </b-row>
    </b-container>
  </div>
</template>
