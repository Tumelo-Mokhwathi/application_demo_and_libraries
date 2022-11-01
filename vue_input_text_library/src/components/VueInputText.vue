<template>
  <b-container fluid>
    <b-form-input
      id="input-text"
      :type="typeText"
      :placeholder="placeholderText"
      required
    ></b-form-input>
  </b-container>
</template>

<script>
export default {
  name: 'InputText',
  props: {
    placeholderText: {
      required: true,
      type: String,
    },
    typeText: {
      required: true,
      type: String,
    },
  },
};
</script>

<style></style>
