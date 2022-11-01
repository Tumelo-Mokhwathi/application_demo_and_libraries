<template>
  <b-container fluid>
    <b-button :variant="variantStatus">{{text}}</b-button>
  </b-container>
</template>

<script>

export default {
  name: 'Button',
  props: {
    text: {
      required: true,
      type: String,
    },
    variantStatus: {
      default: true,
      type: String,
    }
  }
};
</script>

<style></style>
