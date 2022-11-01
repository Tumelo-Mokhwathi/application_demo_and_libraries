<script>
import VueTextArea from '../src/components/VueTextArea.vue';

export default {
  components: {
    VueTextArea,
  },
  name: 'ServeDev',
};
</script>

<template>
  <div id="app">
    <b-container fluid class="mt-3">
      <b-row>
        <b-col><vue-text-area headerText="Comment" /></b-col>
      </b-row>
    </b-container>
  </div>
</template>
