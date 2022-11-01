<template>
  <b-container fluid>
    <select class="form-select" aria-label="Default select example">
    <option selected>Select Option</option>
    <option :value="option.id" v-for="option in options" :key="option.id">{{option.text}}</option>
</select>
  </b-container>
</template>

<script>

export default {
  name: 'Select Input',
  props: {
    options: {
      required: true,
      type: Array,
    }
  }
};
</script>

<style></style>
