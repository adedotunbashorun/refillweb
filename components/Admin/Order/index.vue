<template>
  <div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-12">
        <!-- TABLE NO PADDING -->
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">Orders List</h3>
            <div class="col-lg-3  pull pull-right">
            </div>
            <hr />
          </div>
          <div class="panel-body" v-if="all_orders">
            <vue-good-table
              :rows="all_orders"
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
                <span v-else-if="props.column.field == 'name'">
                  {{
                    props.row.client_id.first_name +
                      " " +
                      props.row.client_id.last_name
                  }}
                </span>
                <span v-else-if="props.column.field == 'vendor'">
                  {{
                    props.row.vendor_id.first_name +
                      " " +
                      props.row.vendor_id.last_name
                  }}
                </span>
                <span v-else-if="props.column.field == 'address'">
                  {{ props.row.client_landmark }}
                </span>
                <span v-else-if="props.column.field == 'total_amount'">
                  ₦{{ parseFloat(props.row.total_amount) }}
                </span>
                <span v-else-if="props.column.field == 'payment_option'">
                  <span class="label label-info" v-if="parseInt(props.row.payment_option) === 1">Paid Online</span>
                  <span class="label label-info" v-else-if="parseInt(props.row.payment_option) === 2">Cash On Delivery</span>
                  <span class="label label-info" v-else-if="parseInt(props.row.payment_option) === 3">Pos On Delivery</span>
                </span>
                <span v-else-if="props.column.field == 'action'">
                  <nuxt-link
                    class="btn btn-info dropdown-item"
                    :to="{
                      name: 'admin-order-id',
                      params: { id: props.row._id }
                    }"
                    title="edit / view"
                  >
                    <i class="fa fa-eye">
                    </i></nuxt-link
                  >
                </span>
                <span v-else-if="props.column.field == 'status'">
                  <label class="label label-success" v-if="props.row.status === 'completed'">
                      <i class="fa fa-check"></i> {{ props.row.status }}
                  </label>
                  <label class="label label-danger" v-else-if="props.row.status === 'failed'">
                      <i class="fa fa-times"></i> {{ props.row.status }}
                  </label>
                  <label class="label label-info" v-else>
                      <i class="fa fa-clock"></i> {{ props.row.status }}
                  </label>
                </span>
                <span v-else-if="props.column.field === 'order_date'">
                  <Adedotun :value="props.row.order_date" fn="date"/>
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
  props: ["orders", "page"],
  data() {
    return {
      apiUrl: "",
      type: "",
      columns: [
        { label: "#", field: "num", sortable: false },
        { label: "Name", field: "name", sortable: false },
        { label: "Vendor", field: "vendor", sortable: false },
        { label: "Payment Type", field: "payment_option", sortable: false },
        { label: "Amount", field: "total_amount", sortable: false },
        { label: "Address", field: "address", sortable: false },
        { label: "Status", field: "status", sortable: false },
        { label: "Date", field: "order_date" },
        { label: "Action", field: "action", sortable: false }
      ]
    };
  },
  mounted() {
    this.apiUrl = config.apiUrl;
  },
  computed: {
    all_orders() {
      return this.orders;
    }
  },
  components: {
    VueGoodTable,
    Adedotun: () => import('~/components/Extra/adedotun.vue')
  },
  methods: {
    orderByType: async event => {
      console.log(this.props.orders)
      let status = event.target.value;
      this.all_orders = await this.orders;
      if (status == "All") {
        return (this.all_orders = await this.orders);
      }
      this.all_orders = this.all_orders.filter(order => {
        return order.status === status;
      });
    }
  }
};
</script>
