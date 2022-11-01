<template>
  <b-container fluid>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >{{headerText}}</label
      >
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'TextArea',
  props: {
    headerText: {
      required: true,
      type: String,
    }
  },
};
</script>

<style></style>
