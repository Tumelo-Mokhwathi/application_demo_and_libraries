<template>
  <b-container fluid>
    <b-table
      bordered
      :current-page="currentPage"
      :busy="isBusy"
      :fields="fields"
      :filter="filter"
      @filtered="onFiltered"
      head-variant="dark"
      :id="tableId"
      :items="values"
      :per-page="perPage"
      sticky-header="true"
      striped
      show-empty
    >
      <template v-slot:table-busy>
        <b-alert show variant="info">
          <b-spinner label="Loading" small />
          <span class="pl-2">Loading</span>
        </b-alert>
      </template>
    </b-table>
    <table-pagination
      @selected-page="goToPage"
      :total-filtered-records="totalFilteredRecords"
      :page-number="currentPage"
      :per-page="perPage"
    />
  </b-container>
</template>

<script>
//import LoadingAlert from './LoadingAlert.vue';
import TablePagination from './Pagination.vue';

export default {
  components: {
    //LoadingAlert,
    TablePagination,
  },
  data() {
    return {
      currentPage: 1,
      filter: null,
      formState: null,
      perPage: 5,
      totalFilteredRecords: 0,
    };
  },
  methods: {
    displayPage(val) {
      this.perPage = val;
    },
    goToPage(page) {
      this.currentPage = page;
    },
    searchTable(val) {
      this.filter = val;
    },
    onFiltered(filteredItems) {
      this.totalFilteredRecords = filteredItems.length;
      this.currentPage = 1;
    },
  },
  mounted() {
    this.totalFilteredRecords = !this.values ? 0 : this.values.length;
  },
  name: 'TableGrid',
  props: {
    fields: {
      required: true,
      type: Array,
    },
    isBusy: {
      default: false,
      type: Boolean,
    },
    tableId: {
      default: 'TableGrid',
      required: false,
      type: String,
    },
    values: {
      required: false,
      type: Array,
    },
  },
  watch: {
    values(newV) {
      this.totalFilteredRecords = !newV ? 0 : newV.length;
    },
  },
};
</script>

<style>
</style>
