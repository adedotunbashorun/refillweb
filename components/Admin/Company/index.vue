<template>
  <div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-12">
        <!-- TABLE NO PADDING -->
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">
              Company List
            </h3>
            <hr />
          </div>
          <div class="panel-body">
            <vue-good-table
              :rows="companies"
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
                <span v-else-if="props.column.field == 'action'">
                  <div>
                    <nuxt-link v-if="props.row.user_id"
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
                    <a
                      class="btn btn-success"
                      @click="approveCompany(props.row._id)"
                      title="approve"
                      v-if="props.row.status === false"
                    >
                      <i class="fa fa-check"></i> Approve
                      </a
                    >
                    <a
                      class="btn btn-danger"
                      @click="approveCompany(props.row._id)"
                      title="Decline User"
                      v-if="props.row.status === true"
                    >
                      <i class="fa fa-times"></i> Decline
                      </a
                    >
                  </div>
                </span>
                <span v-else-if="props.column.field == 'vendor'">
                  {{ (props.row.user_id) ? props.row.user_id.first_name + ' ' + props.row.user_id.last_name : '' }}
                </span>
                <span v-else-if="props.column.field == 'email'">
                  {{ props.row.email }}
                </span>
                <span v-else-if="props.column.field == 'phone'">
                  {{ props.row.phone }}
                </span>
                <span v-else-if="props.column.field == 'status'">
                  <label class="label label-warning" v-if="props.row.status === false">
                      <i class="fa fa-times"></i> Pending
                  </label>
                  <label class="label label-success" v-if="props.row.status === true">
                      <i class="fa fa-check"></i> Approved
                  </label>
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
  props: ["companies", "page"],
  methods: {
    approveCompany(id) {
      this.$store
        .dispatch("approveCompany", [id, this.$store.state.auth.headers])
        .then(resp => {
          toastr.success(resp.data.msg);
        })
        .catch(err => toastr.error(err.message));
    },
  },
  components: {
    VueGoodTable
  },
  data() {
    return {
      columns: [
        { label: "#", field: "num", sortable: false },
        { label: "Vendor Name", field: "vendor" },
        { label: "Company Name", field: "name" },
        { label: "Telephone", field: "phone" },
        { label: "Email", field: "email" },
        { label: "Is Active", field: "status" },
        { label: "Action", field: "action", sortable: false }
      ]
    };
  }
};
</script>
