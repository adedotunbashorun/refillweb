<template>
  <div>
    <h3 class="page-title">
      {{ page }}
      <nuxt-link
        to="/admin/users"
        class="pull pull-right btn btn-outline-primary"
        ><i class="fa fa-arrow-left"></i> Back</nuxt-link
      >
    </h3>
    <div class="panel panel-profile">
      <div class="clearfix">
        <div class="profile-left">
          <div class="profile-header">
            <div class="overlay"></div>
            <div class="profile-main">
              <img :src="user_details.cloud_image_url" class="img-circle" alt="Avatar" width="100" height="100">
              <h3 class="name">{{ capitalize(user_details.first_name) +' ' + capitalize(user_details.last_name)}}</h3>
              <label
                class="online-status status-available label-success"
                v-if="user_details.online_status === true"
                @click="toggleUserOnlineStatus()"
                > Available </label>
              <label
                class="offline-status status-available label-warning"
                v-else
                @click="toggleUserOnlineStatus()"
                > Not Available </label>
            </div>
            <div class="profile-stat">
              <div class="row">
                <div class="col-md-4 stat-item" v-if="orders">
                  {{ orders.length }} <span>Orders</span>
                </div>
                <div class="col-md-4 stat-item completed">
                   <span>{{ OrderStatus(orders, 'completed') }}</span>
                </div>
                <div class="col-md-4 stat-item uncompleted">
                  <span>{{ OrderStatus(orders, 'uncompleted') }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- END PROFILE HEADER -->

          <!-- PROFILE DETAIL -->
          <div class="profile-detail">
            <div class="profile-info">
              <h4 class="heading">Basic Info</h4>
              <ul class="list-unstyled list-justify">
                <li>
                  Mobile <span>{{ user_details.phone }}</span>
                </li>
                <li>
                  Email <span>{{ user_details.email }}</span>
                </li>
              </ul>
            </div>
            <div class="profile-info">
              <h4 class="heading">About</h4>
              <p>{{ user_details.brief }}</p>
            </div>
            <div class="text-center">
              <a
                href="#tab-bottom-left2"
                role="tab"
                data-toggle="tab"
                class="btn btn-primary"
                >Edit Profile</a
              >
            </div>
          </div>
        </div>
        <div class="profile-right">
          <div v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <div class="alert alert-danger alert-dismissible" role="alert" v-for="error in errors" :key="error">
              <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <i class="fa fa-times-circle"></i> {{ error }}
            </div>
          </div>
          <div class="alert alert-danger alert-dismissible" role="alert" v-if="error">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <i class="fa fa-times-circle"></i> {{ error }}
          </div>
          <div class="alert alert-success alert-dismissible" role="alert" v-if="success">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <i class="fa fa-check-circle"></i> {{ success }}
          </div>
          <div class="custom-tabs-line tabs-line-bottom left-aligned">
            <ul class="nav" role="tablist">
              <li class="active">
                <a href="#tab-bottom-left1" role="tab" data-toggle="tab"
                  >Recent Activity</a
                >
              </li>
              <li>
                <a href="#tab-bottom-left2" role="tab" data-toggle="tab"
                  >Edit Profile</a
                >
              </li>
              <li><a href="#tab-bottom-left4" role="tab" data-toggle="tab" v-if="user_details.user_type === 'vendor'">Assign Rider</a></li>
              <li>
                <a href="#tab-bottom-left3" role="tab" data-toggle="tab"
                  >Supports</a
                >
              </li>
              <li><a href="#tab-bottom-left5" role="tab" data-toggle="tab" v-if="orders.length > 0">Orders</a></li>
              <li><a href="#tab-bottom-left6" role="tab" data-toggle="tab">Companies</a></li>
            </ul>
          </div>
          <div class="tab-content">
            <div class="tab-pane fade in active" id="tab-bottom-left1">
              <div v-if="activities" class="table-responsive">
                <vue-good-table
                  :rows="activities"
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
                      <Adedotun :value="props.row.createdAt" fn="humandate" />
                    </span>
                  </template>
                </vue-good-table>
              </div>
            </div>
            <div class="tab-pane fade" id="tab-bottom-left2">
              <div class="table-responsive">
                <form @submit.prevent="checkForm">
                    <div class="row">
                        <div class="col-md-12">
                            <strong class="text-muted d-block mb-2"></strong>
                            <div class="form-group">
                                <select class="form-control" v-model="user_details.title">
                                    <option value="">-- Select Title --</option>
                                    <option value="Mr">Mr.</option>
                                    <option value="Mrs">Mrs.</option>
                                    <option value="Miss">Miss.</option>
                                </select>
                            </div>
                            <div class="form-group">
                               <select class="form-control" v-model="user_details.user_type" @change="userChange">
                                    <option value="">-- User Type--</option>
                                    <option value="admin">Admin</option>
                                    <option value="vendor">Vendor</option>
                                    <option value="client">Client</option>
                                    <option value="rider">Rider</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <input type="file" class="form-control" @change="onFileChange">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" v-model="user_details.first_name" placeholder="First Name">
                            </div>

                            <div class="form-group">
                                <input type="text" class="form-control" v-model="user_details.last_name" placeholder="Last Name" aria-label="Full name" aria-describedby="basic-addon1">
                            </div>
                            <div class="form-group">
                                <input type="text" v-model="user_details.phone" pattern="^\+[1-9]\d{1,14}$" class="form-control" placeholder="Phone Number" value="">
                                <span class="note">Format: +2349034268873</span>
                            </div>

                            <div class="form-group">
                                <input type="text" v-model="user_details.email" class="form-control" id="inputAddress" placeholder="Email" value="">
                            </div>
                            <div class="form-group">
                                <textarea type="text" v-model="user_details.address" placeholder="enter individual Address" class="form-control" id="inputAddress" rows="4"></textarea>
                            </div>
                            <div class="form-group">
                                <textarea type="text" v-model="user_details.brief" placeholder="brief details about yourself" class="form-control" id="inputAddress" rows="4"></textarea>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="mb-2 btn btn-primary mr-2">Update User</button>
                            </div>
                        </div>
                    </div>
                </form>
              </div>
            </div>
            <div class="tab-pane fade" id="tab-bottom-left4">
              <div class="table-responsive">
                <form @submit.prevent="assignCompanyRider">
                    <div class="row">
                        <div class="col-md-12">
                            <strong class="text-muted d-block mb-2"></strong>
                            <div class="form-group">
                                <select class="form-control" v-model="assign.company_id" required>
                                    <option value="">-- Select Company --</option>
                                    <option v-for="company in companies" :value="company._id" :key="company._id">{{ company.name }}</option>
                                </select>
                            </div>
                            <div class="form-group">
                               <select class="form-control" v-model="assign.rider_id" required>
                                    <option value="">-- Select Rider --</option>
                                    <option v-for="rider in riders" :value="rider._id" :key="rider._id">{{ rider.first_name +' '+ rider.last_name }}</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <button type="submit" class="mb-2 btn btn-primary mr-2">Assign Rider</button>
                            </div>
                        </div>
                    </div>
                </form>
              </div>
            </div>
            <div class="tab-pane fade" id="tab-bottom-left3">
              <div class="table-responsive" v-if="supports">
                <vue-good-table
                  :rows="supports"
                  :columns="support"
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
                      {{ props.row.message.substr(0, 50)}}...
                    </span>
                    <span v-else-if="props.column.field == 'action'">
                     <nuxt-link
                          class="btn btn-info"
                          :to="{
                            name: 'admin-supports-id',
                            params: { id: props.row._id }
                          }"
                          title="view"
                        >
                          <i class="fa fa-eye">
                            <!-- view -->
                            </i></nuxt-link
                        >
                    </span>
                  </template>
                </vue-good-table>
              </div>
              <label class="alert alert-info text-default" v-else>
                No Support Message</label
              >
            </div>
            <div class="tab-pane fade" id="tab-bottom-left5">
              <vue-good-table
                :rows="orders"
                :columns="order_columns"
                :pagination-options="{
                  enabled: true,
                  perPage: 5
                }"
              >
                <template slot="table-row" slot-scope="props">
                  <span v-if="props.column.field == 'num'">
                    {{ props.row.originalIndex + 1 }}
                  </span>
                  <span v-else-if="props.column.field == 'phone'">
                    {{ props.row.client_phone }}
                  </span>
                  <span v-else-if="props.column.field == 'total_amount'">
                    ₦{{ parseFloat(props.row.total_amount) }}
                  </span>
                  <span v-else-if="props.column.field == 'payment_option'">
                    <span class="label label-info" v-if="parseInt(props.row.payment_option) === 1">Paid Online</span>
                    <span class="label label-info" v-else-if="parseInt(props.row.payment_option) === 2">Cash On Delivery</span>
                    <span class="label label-info" v-else-if="parseInt(props.row.payment_option) === 3">Pos On Delivery</span>
                  </span>
                  <span v-if="props.column.field == 'status'">
                    <button class="btn btn-success" v-if="props.row.status === 'completed'">
                      <i class="fa fa-check"></i> {{ props.row.status }}
                    </button>
                    <button class="btn btn-danger" v-else-if="props.row.status === 'failed'">
                      <i class="fa fa-times"></i> {{ props.row.status }}
                    </button>
                    <button class="btn btn-info" v-else>
                      <i class="fa fa-clock"></i> {{ props.row.status }}
                    </button>
                  </span>
                </template>
              </vue-good-table>
            </div>
            <div class="tab-pane fade" id="tab-bottom-left6">
              <vue-good-table
              :rows="companies"
              :columns="companies_columns"
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
                    <a
                      class="btn btn-info"
                      style="cursor:pointer;"
                      @click="editCompany(props.row)"
                    >
                      <i class="fa fa-check"></i> Edit
                      </a
                    >
                  </div>
                </span>
              </template>
            </vue-good-table>
            <br/>
              <div id="vendor" v-if="user_details.user_type === 'vendor'">
                <form @submit.prevent="checkCompanyForm">
                  <div class="row">
                    <div class="form-group">
                        <input type="text" v-model="company.name" class="form-control" placeholder="Company Name" required>
                    </div>

                    <div class="form-group">
                        <input type="file" class="form-control" @change="onFileChanges">
                    </div>

                    <div class="form-group">
                        <input type="text" v-model="company.phone" pattern="^\+[1-9]\d{1,14}$" class="form-control" placeholder="Company Phone Number" required>
                        <span class="note">Format: +2349034268873</span>
                    </div>

                    <div class="form-group">
                        <input type="text" v-model="company.email" class="form-control" placeholder="Company Email" required>
                    </div>

                    <div class="form-group">
                      <textarea type="text" v-model="company.address" class="form-control" rows="4" required placeholder="enter company address"></textarea>
                    </div>
                    <div class="form-group">
                      <button type="submit" class="mb-2 btn btn-primary mr-2">Update Company</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Adedotun from "../../Extra/adedotun";
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";

export default {
  props: ["page"],
  data() {
    return {
      columns: [
        { label: "S/N", field: "num", sortable: false },
        { label: "Description", field: "description", sortable: false },
        { label: "Action", field: "action", sortable: false }
      ],
      order_columns: [
        { label: "#", field: "num", sortable: false },
        { label: "Client Phone", field: "phone", sortable: false },
        { label: "Payment Type", field: "payment_option", sortable: false },
        { label: "Amount", field: "total_amount", sortable: false },
        { label: "Status", field: "status", sortable: false },
        { label: "Action", field: "action", sortable: false }
      ],
      support: [
        { label: "S/N", field: "num", sortable: false },
        { label: "Ticket No", field: "ticket_no", sortable: false },
        { label: "Subject", field: "title", sortable: false },
        { label: "Message", field: "shortmessage", sortable: false },
        { label: "Action", field: "action", sortable: false }
      ],
      companies_columns: [
        { label: "#", field: "num", sortable: false },
        { label: "Company Name", field: "name" },
        { label: "Telephone", field: "phone" },
        { label: "Email", field: "email" },
        { label: "Action", field: "action", sortable: false }
      ],
      errors: [],
      user_details: {
          title:'',
          user_type: '',
          address:'',
          first_name:'',
          last_name:'',
          email:'',
          phone:'',
          brief : '',
          profile_image: '',
      },
      assign:{
        company_id: '',
        rider_id: '',
        vendor_id: ''
      },
      company: {
        name: '',
        email: '',
        phone: '',
        address: '',
        image: ''
      },
      image: '',
      activities:[],
      riders: [],
      companies: [],
      supports:[],
      orders: [],
      roles:[],
      permission:[],
      success: null,
      error: null
    };
  },
  components: {
    Adedotun,
    VueGoodTable
  },
  mounted() {
    $('#vendor').hide()
    this.getUser()
    this.userChange();
  },
  methods: {
    capitalize(s) {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    },
    async OrderStatus(orders, status) {
      let count = 0
      if(status === 'completed') {
        await orders.forEach(order => {
          if(order.status === 'completed') {
            count += 1;
          }
        });
        $('.completed').html(`${count} completed orders`)
      }else {
        await orders.forEach(order => {
          if(order.status !== 'completed') {
            count += 1;
          }
        });
        $('.uncompleted').html(`${count} uncompleted orders`)
      }
    },
    editCompany(company) {
      this.company = company
    },
    userChange(){
      if(this.user_details.user_type == 'vendor'){
        $('#vendor').show()
      }else{
        $('#vendor').hide()
      }
    },
    assignCompanyRider(){
      this.assign.vendor_id = this.user_details._id
      this.$store.dispatch('assignCompanyRider', [this.assign,this.$store.state.auth.headers])
        .then((resp) => {
            this.error = null
            this.success = null
            if(resp.data.error){
              toastr.error(resp.data.msg)
              this.error = resp.data.msg
            }else{
              toastr.success(resp.data.msg)
              this.success = resp.data.msg
              this.errors = []
            }
        }).catch(err => console.log())
    },
    getUserCompany(){
      this.$store.dispatch('getUserCompany', [(this.$nuxt._route.params.id) ? this.$nuxt._route.params.id : this.$store.getters.authUser._id,this.$store.state.auth.headers])
        .then((resp) => {
            this.companies = resp.data.companies
        }).catch(err => console.log())
    },
    getUnassignRider(){
      this.$store.dispatch('getUnassignRider', this.$store.state.auth.headers)
        .then((resp) => {
            this.riders = resp.data.riders
        }).catch(err => console.log())
    },
    toggleUserOnlineStatus() {
      this.$store
        .dispatch("toggleUserOnlineStatus", [
          this.$nuxt._route.params.id
            ? this.$nuxt._route.params.id
            : this.$store.getters.authUser._id,
          this.$store.state.auth.headers
        ])
        .then(resp => {
          toastr.success(resp.data.msg);
          this.user_details = resp.data.user;
        })
        .catch(err => console.log());
    },
    getUser(){
        this.$store.dispatch('userById', [(this.$nuxt._route.params.id) ? this.$nuxt._route.params.id : this.$store.getters.authUser._id,this.$store.state.auth.headers])
        .then((resp) => {
            this.user_details = resp.data.user
            if(resp.data.user.user_type == 'vendor'){
              $('#vendor').show()
              this.getUserCompany()
              this.getUnassignRider()
            }
            this.activities = resp.data.activities
            this.supports  = resp.data.supports
            this.orders = resp.data.orders
        }).catch(err => console.log())
    },
    update(){
        let component = this;
        this.$store.dispatch('updateUser', [component.user_details,this.$store.state.auth.headers])
        .then((resp) => {
          this.error = null
          this.success = null
          if(resp.data.error){
            toastr.error(resp.data.msg)
            this.error = resp.data.msg
          }else{
            toastr.success(resp.data.msg)
            this.success = resp.data.msg
            this.errors = []
          }
        })
        .catch(err => {
          this.error = null
          let msg = '';
          if(this.user_details.profile_image !== ''){
            msg += 'your file size should not be greater than 2mb and ';
          }
          msg += 'please verify that data entered are correct.';
          this.error = msg;
        })
    },
    updateCompany(){
        let component = this;
        this.$store.dispatch('updateCompany', [component.company,this.$store.state.auth.headers])
        .then((resp) => {
          this.error = null
          this.success = null
          if(resp.data.error){
            toastr.error(resp.data.msg)
            this.error = resp.data.msg
          }else{
            toastr.success(resp.data.msg)
            this.success = resp.data.msg
            this.errors = []
            this.company = {
              name: '',
              email: '',
              phone: '',
              address: '',
              image: ''
            },
            this.getUserCompany();
          }
        })
        .catch(err => {
          this.error = null
          this.error = 'please verify that the data entered are correct.'
        })
    },
    checkCompanyForm: function (e) {
        if (this.company.name && this.company.email && this.company.address && this.company.phone && this.company.image) {
        this.updateCompany();
        return true;
        }

        this.errors = [];
        if (!this.company.name) {
          this.errors.push('Company required.');
        }
        if (!this.company.phone) {
          this.errors.push('Phone Number required.');
        }
        if (!this.company.email) {
          this.errors.push('Email required.');
        }else if (!this.validEmail(this.company.email)) {
          this.errors.push('Valid email required.');
        }
        if (!this.company.address) {
          this.errors.push('Address required.');
        }
        if (!this.company.image) {
          this.errors.push('Image required.');
        }
        e.preventDefault();

    },
    checkForm: function (e) {
        if (this.user_details.title && this.user_details.first_name && this.user_details.last_name && this.user_details.email && this.user_details.phone) {
        this.update();
        return true;
        }

        this.errors = [];
        if (!this.user_details.title) {
          this.errors.push('Title required.');
        }
        if (!this.user_details.first_name) {
          this.errors.push('FirstName required.');
        }
        if (!this.user_details.last_name) {
          this.errors.push('LastName required.');
        }
        if (!this.user_details.phone) {
          this.errors.push('Phone Number required.');
        }
        if (!this.user_details.email) {
          this.errors.push('Email required.');
        }else if (!this.validEmail(this.user_details.email)) {
          this.errors.push('Valid email required.');
        }
        e.preventDefault();

    },
    validEmail: function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.user_details.profile_image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    onFileChanges(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImages(files[0]);
    },
    createImages(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.company.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  }
};
</script>
