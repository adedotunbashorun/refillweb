<template>
  <div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-12">
        <!-- TABLE NO PADDING -->
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">
              Message List
              <nuxt-link to="/admin/messages/create" class="pull pull-right btn btn-outline-primary">
              Send Message</nuxt-link>
            </h3>
            <hr />
          </div>
          <div class="panel-body">
            <vue-good-table
              :rows="messages"
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
                <span v-else-if="props.column.field == 'createdAt'">
                  <Adedotun :value="props.row.createdAt" fn="humandate" />
                </span>
                <span v-else-if="props.column.field == 'action'">
                  <router-link
                    :to="{
                      name: 'admin-messages-id',
                      params: { id: props.row._id }
                    }"
                    class="btn btn-sm btn-primary"
                    v-if="props.row"
                  >
                    <i class="fa fa-eye">
                    </i>
                  </router-link>
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
import Adedotun from "../../Extra/adedotun";
import axios from "axios";
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";

export default {
  props: ["page", "messages"],
  components: { Adedotun, VueGoodTable },
  data() {
    return {
      columns: [
        { label: "S/N", field: "num", sortable: false },
        { label: "Subject", field: "subject", sortable: false },
        { label: "Medium", field: "medium", sortable: false },
        { label: "User", field: "user", sortable: false },
        { label: "Message", field: "shortmessage", sortable: false },
        { label: "CreatedAt", field: "createdAt", sortable: false },
        { label: "", field: "action", sortable: false }
      ]
    };
  },
  mounted() {
  }
};
</script>
