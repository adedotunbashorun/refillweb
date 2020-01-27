<template>
  <div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-12">
        <!-- TABLE NO PADDING -->
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">
              User List
              <nuxt-link
                to="/admin/users/create"
                class="pull pull-right btn btn-outline-primary"
              >
                Create User</nuxt-link
              >
            </h3>
            <hr />
          </div>
          <div class="panel-body">
            <vue-good-table
              :rows="users"
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
                    <nuxt-link
                      class="btn btn-info"
                      :to="{
                        name: 'admin-users-id',
                        params: { id: props.row._id }
                      }"
                      title="edit / view"
                    >
                      <i class="fa fa-edit"></i>
                      <!-- Edit -->
                      </nuxt-link
                    >
                    <a
                      class="btn btn-success"
                      style="cursor:pointer;"
                      @click="activateUser(props.row._id, index)"
                      title="activate"
                      v-if="props.row.is_active == false"
                    >
                      <i class="fa fa-check"></i>
                      <!-- Activate -->
                      </a
                    >
                    <a
                      class="btn btn-warning"
                      style="cursor:pointer;"
                      @click="activateUser(props.row._id, index)"
                      title="Deactivate"
                      v-else
                    >
                      <i class="fa fa-times"></i>
                      <!-- Deactivate -->
                      </a
                    >
                    <a
                      class="btn btn-success"
                      style="cursor:pointer;"
                      @click="approveUser(props.row._id)"
                      title="approve"
                      v-if="
                        props.row.approval_status == false &&
                          props.row.user_type === 'vendor'
                      "
                    >
                      <i class="fa fa-check"></i>
                      <!-- Approve -->
                      </a
                    >
                    <a
                      class="btn btn-warning"
                      style="cursor:pointer;"
                      @click="approveUser(props.row._id)"
                      title="Decline User"
                      v-if="
                        props.row.approval_status == true &&
                          props.row.user_type == 'vendor'
                      "
                    >
                      <i class="fa fa-times"></i>
                      <!-- Decline -->
                      </a
                    >
                    <a
                      v-if="props.row.user_type !== 'admin'"
                      class="btn btn-danger"
                      style="cursor:pointer;"
                      @click="deleteUser(props._id)"
                      title="delete"
                    >
                      <i class="fa fa-trash"></i>
                      <!-- Delete -->
                      </a
                    >
                  </div>
                </span>
                <span v-else-if="props.column.field == 'is_active'">
                  <label class="label label-warning" v-if="props.row.is_active === false">
                      <i class="fa fa-times"></i> Pending
                  </label>
                  <label class="label label-success" v-if="props.row.is_active === true">
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
  props: ["users", "page"],
  mounted() {
  },
  methods: {
    deleteUser(id) {
      this.$store
        .dispatch("removeUser", [id, this.$store.state.auth.headers])
        .then(resp => {
          toastr.success(resp.data.msg);
        })
        .catch(err => toastr.error(err.message));
    },
    approveUser(id) {
      this.$store
        .dispatch("approveUser", [id, this.$store.state.auth.headers])
        .then(resp => {
          toastr.success(resp.data.msg);
        })
        .catch(err => toastr.error(err.message));
    },

    activateUser(id, index) {
      this.$store
        .dispatch("activateUser", id)
        .then(resp => {
          toastr.success(resp.data.msg);
          // this.$emit.users[index].is_active = (this.users[index].is_active === false) ? true : false;
        })
        .catch(err => toastr.error(err.message));
    }
  },
  components: {
    VueGoodTable
  },
  data() {
    return {
      columns: [
        { label: "#", field: "num", sortable: false },
        { label: "First Name", field: "first_name" },
        { label: "Last Name", field: "last_name" },
        { label: "Email", field: "email", sortable: false },
        { label: "Phone", field: "phone", sortable: false },
        { label: "User Type", field: "user_type" },
        { label: "Is Active", field: "is_active" },
        { label: "Action", field: "action", sortable: false }
      ]
    };
  }
};
</script>
