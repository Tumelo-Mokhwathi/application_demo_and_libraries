<script>
import VueButton from '../src/components/VueButton.vue';

export default {
  components: {
    VueButton,
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
        <b-col><vue-button :text="text" variantStatus="success"/></b-col>
        <b-col><vue-button :text="text" variantStatus="primary"/></b-col>
      </b-row>
    </b-container>
  </div>
</template>
