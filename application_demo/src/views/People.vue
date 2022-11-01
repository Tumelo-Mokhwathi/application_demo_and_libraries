<template>
  <b-container fluid class="mt-3 pt-5">
    <h3 class="text-center">Users</h3>
    <vue-button
      class="text-right mb-2"
      text="Create User"
      variantStatus="secondary"
      v-b-modal.modal-1
    />
    <vue-table :fields="fields" :values="items" tableId="table-id" />
    <b-modal id="modal-1" title="Create New User">
      <vue-input-text
        placeholderText="Enter your first name"
        typeText="text"
        class="mb-3"
      />
      <vue-select-input :options="options" class="mb-2" />
      <vue-text-area headerText="Comment" />
      <vue-radio-toggle text="I confirm that I am a Software Developer" />
    </b-modal>
  </b-container>
</template>

<script>
import VueTable from "vue_table_library";
import VueButton from "vue_button_library";
import VueInputText from "vue_input_text_library";
import VueRadioToggle from "vue_radio_toggle_library";
import VueSelectInput from "vue_select_input_library";
import VueTextArea from "vue_text_area_library";

export default {
  components: {
    VueTextArea,
    VueSelectInput,
    VueRadioToggle,
    VueInputText,
    VueButton,
    VueTable,
  },
  computed: {
    fields() {
      return [
        {
          key: "id",
          label: "ID",
        },
        {
          key: "first_name",
          label: "First Name",
        },
        {
          key: "last_name",
          label: "Last Name",
        },
        {
          key: "age",
          label: "Age",
        },
      ];
    },
  },
  data() {
    return {
      options: [
        { id: 1, text: "Option 1" },
        { id: 2, text: "Option 2" },
      ],
      items: [
        { id: 1, age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { id: 2, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { id: 3, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { id: 4, age: 38, first_name: "Jami", last_name: "Carney" },
        { id: 5, age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { id: 6, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { id: 7, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { id: 8, age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
  name: "People",
};
</script>
