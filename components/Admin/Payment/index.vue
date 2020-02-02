<template>
  <div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-12">
        <!-- TABLE NO PADDING -->
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">
              Payment List
            </h3>
            <hr />
          </div>
          <div class="panel-body">
            <vue-good-table
              :rows="payments"
              :columns="columns"
              :pagination-options="{
                enabled: true,
                perPage: 5
              }"
              :search-options="{
                enabled: true
              }"
            >
              <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'num'">
                  {{ props.row.originalIndex + 1 }}
                </span>
                <span v-else-if="props.column.field == 'action'">
                  <div>
                    <nuxt-link
                      class="btn btn-info"
                      :to="{
                        name: 'admin-users-id',
                        params: { id: props.row.user_id._id }
                      }"
                      title="edit / view"
                    >
                      <i class="fa fa-eye"></i> View
                      </nuxt-link
                    >
                  </div>
                </span>
                <span v-else-if="props.column.field == 'vendor'">
                  {{ props.row.vendor_id.first_name + ' ' + props.row.vendor_id.last_name }}
                </span>
                <span v-else-if="props.column.field == 'company'">
                  {{ props.row.company_id.name }}
                </span>
                <span v-else-if="props.column.field == 'client'">
                  {{ props.row.client_id.first_name + ' ' + props.row.client_id.last_name }}
                </span>
                <span v-else-if="props.column.field == 'type'">
                  <label class="label label-success">
                      <i class="fa fa-eye"></i> {{ props.row.type }}
                  </label>
                </span>
                <span v-else-if="props.column.field == 'status'">
                  <label class="label label-success" v-if="props.row.status === 'success'">
                      <i class="fa fa-check"></i> Paid
                  </label>
                  <label class="label label-info" v-else>
                      <i class="fa fa-times"></i> Pending
                  </label>
                </span>
                <span v-else-if="props.column.field == 'amount'">
                  ₦{{ parseFloat(props.row.amount) }}
                </span>
                <span v-else-if="props.column.field === 'createdAt'">
                  <Adedotun :value="props.row.createdAt" fn="date"/>
                </span>
              </template>
            </vue-good-table>
          </div>
        </div>
        <!-- END TABLE NO PADDING -->
      </div>
    </div>
  </div>
</template>
<script>
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";

export default {
  props: ["payments", "page"],
  components: {
    VueGoodTable,
    Adedotun: () => import('~/components/Extra/adedotun.vue')
  },
  data() {
    return {
      columns: [
        { label: "#", field: "num", sortable: false },
        { label: "Vendor Name", field: "vendor" },
        { label: "Company Name", field: "company" },
        { label: "Client Name", field: "client" },
        { label: "Type", field: "type" },
        { label: "Amount", field: "amount" },
        { label: "Date", field: "createdAt" },
        { label: "Status", field: "status" },
      ]
    };
  }
};
</script>
