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
              <!-- <select
                @change="orderByType($event)"
                class="form-control"
                v-model="type"
              >
                <option value="All">All orders</option>
                <option value="waiting">All waiting orders</option>
                <option value="accepted">All accepted orders</option>
                <option value="started">All started orders</option>
                <option value="completed">All completed orders</option>
              </select> -->
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
                <span v-else-if="props.column.field == 'action'">
                  <nuxt-link
                    class="btn btn-info dropdown-item"
                    :to="{
                      name: 'admin-order-id',
                      params: { id: props.row._id }
                    }"
                    title="edit / view"
                  >
                    <i class="fa fa-edit">
                      <!-- edit -->
                    </i></nuxt-link
                  >
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
        { label: "Service Category", field: "service_category_id.name", sortable: false },
        { label: "Payment Type", field: "payment_type", sortable: false },
        { label: "Status", field: "status", sortable: false },
        { label: "Address", field: "address", sortable: false },
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
    VueGoodTable
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
