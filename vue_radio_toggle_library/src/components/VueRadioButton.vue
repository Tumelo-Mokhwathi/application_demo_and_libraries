<template>
  <b-container fluid>
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
      />
      <label class="form-check-label" for="flexSwitchCheckDefault">{{
        text
      }}</label>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'Radio Button',
  props: {
    text: {
      required: true,
      type: String,
    },
  },
};
</script>

<style></style>
