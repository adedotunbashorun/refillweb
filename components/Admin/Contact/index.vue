<template>
  <div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-12">
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">
              Contacts Messages
            </h3>
            <hr />
          </div>
          <div class="panel-body">
            <vue-good-table
              :rows="contacts"
              :columns="columns"
              :pagination-options="{
                enabled: true,
                perPage: 5
              }"
            >
              <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'num'">
                  {{ props.row.originalIndex + 1 }}
                </span>
                <span v-else-if="props.column.field == 'shortmessage'">
                  {{ props.row.message.substr(0, 50) }}...
                </span>
                <span v-else-if="props.column.field == 'action'">
                  <nuxt-link v-if="props.row.replied === 'false'"
                    class="btn btn-info dropdown-item"
                    :to="{
                      name: 'admin-contacts-id',
                      params: { id: props.row._id }
                    }"
                    title="reply"
                  >
                    <i class="fa fa-reply">
                    </i></nuxt-link
                  >
                  <label class="label label-success" v-else>
                      <i class="fa fa-check"></i> Replied
                  </label>
                </span>
              </template>
            </vue-good-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { config } from "../../../config";
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";

export default {
  props: ["contacts", "page"],
  data() {
    return {
      apiUrl: "",
      columns: [
        { label: "#", field: "num", sortable: false },
        { label: "Email", field: "email", sortable: false },
        { label: "Name", field: "full_name", sortable: false },
        { label: "Telephone", field: "phone", sortable: false },
        { label: "Subject", field: "subject", sortable: false },
        { label: "Message", field: "shortmessage", sortable: false },
        { label: "Action", field: "action", sortable: false }
      ]
    };
  },
  mounted() {
    this.apiUrl = config.apiUrl;
  },
  components: {
    VueGoodTable
  },
  methods: {
    deleteCategory(id) {
      this.$store
        .dispatch("removeClass", [id, this.$store.state.auth.headers])
        .then(resp => {})
        .catch(err => console.log());
    }
  }
};
</script>
