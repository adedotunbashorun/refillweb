<template>
  <div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-12">
        <!-- TABLE NO PADDING -->
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">
              Class List
              <nuxt-link
                to="/admin/class/create"
                class="pull pull-right btn btn-outline-primary"
              >
                Create Class</nuxt-link
              >
            </h3>
            <hr />
          </div>
          <div class="panel-body">
            <vue-good-table
              :rows="classes"
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
                <span v-else-if="props.column.field == 'image_url'">
                  <img
                    :src="apiUrl + '/' + props.row.image_url"
                    style="width:30px;height:30px"
                  />
                </span>
                <span v-else-if="props.column.field == 'shortmessage'">
                  {{ props.row.message.substr(0, 50) }}...
                </span>
                <span v-else-if="props.column.field == 'action'">
                  <nuxt-link
                    class="btn btn-info dropdown-item"
                    :to="{
                      name: 'admin-class-id',
                      params: { id: props.row._id }
                    }"
                    title="edit / view"
                  >
                    <i class="fa fa-edit">
                      <!-- edit -->
                    </i></nuxt-link
                  >
                  <!-- <div class="dropdown-divider"></div> -->
                  <a
                    class="dropdown-item btn btn-danger"
                    style="cursor:pointer;"
                    @click="deleteCategory(props.row._id)"
                    title="delete"
                  >
                    <i class="fa fa-trash">
                      <!-- delete -->
                    </i></a
                  >
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
import { config } from "../../../config";
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";

export default {
  props: ["classes", "page"],
  data() {
    return {
      apiUrl: "",
      columns: [
        { label: "#", field: "num", sortable: false },
        { label: "Image", field: "image_url", sortable: false },
        { label: "Name", field: "name", sortable: false },
        { label: "Description", field: "description", sortable: false },
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
