<script>
import VueSelectInput from '../src/components/VueSelectInput.vue';

export default {
  components: {
    VueSelectInput,
  },
  computed: {
    text() {
      return 'Confirm';
    },
  },
  data() {
    return {
      options: [
          { id: 1, text: 'Option 1' },
          { id: 2, text: 'Option 2' },
        ]
    }
  },
  name: 'ServeDev',
};
</script>

<template>
  <div id="app">
    <b-container fluid class="mt-3">
      <b-row>
        <b-col><vue-select-input :options="options" /></b-col>
      </b-row>
    </b-container>
  </div>
</template>
