<script>
import VueTable from '../src/components/VueTable.vue';

export default {
  components: {
    VueTable,
  },
  computed: {
    fields() {
      return [
        {
          key: 'id',
          label: 'ID'
        },
        {
          key: 'first_name',
          label: 'First Name'
        },
        {
          key: 'last_name',
          label: 'Last Name'
        },
        {
          key: 'age',
          label: 'Age'
        },
      ];
    },
    text() {
      return 'Confirm';
    },
  },
  data() {
    return {
      items: [
        { id: 1, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { id: 2, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { id: 3, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { id: 4, age: 38, first_name: 'Jami', last_name: 'Carney' },
        { id: 1, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { id: 2, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { id: 3, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { id: 4, age: 38, first_name: 'Jami', last_name: 'Carney' },
      ],
    };
  },
  name: 'ServeDev',
};
</script>

<template>
  <div id="app">
    <b-container fluid class="mt-3">
      <b-row>
        <h3 class="Text-center">Users</h3>
        <vue-table :fields="fields" :values="items" tableId="table-id"/>
      </b-row>
    </b-container>
  </div>
</template>
