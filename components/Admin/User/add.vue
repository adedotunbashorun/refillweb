<template>
    <div>
    <h3 class="page-title">{{ page }}</h3>
        <div class="row">
          <div class="col-md-8">
            <!-- PANEL HEADLINE -->
            <div class="panel panel-headline">
              <div class="panel-heading">
                  <h3 class="panel-title">Add User <nuxt-link to="/admin/users" class="pull pull-right btn btn-outline-primary"><i class="fa fa-arrow-left"></i> Back</nuxt-link></h3>
                  <span class="text-uppercase panel-subtitle">Fill form to create new user</span>
              </div>
              <div class="panel-body">
                <form @submit.prevent="checkForm">
                  <div class="row">
                      <div class="col">
                          <strong class="text-muted d-block mb-2"></strong>
                          <p v-if="errors.length">
                              <b>Please correct the following error(s):</b>
                              <ul>
                              <li class="text-danger" v-for="error in errors" :key="error">{{ error }}</li>
                              </ul>
                          </p>
                          <div class="alert alert-success" v-if="success"><button type="button" class="pi-close" data-dismiss="alert"><i class="material-icons" data-dismiss="alert">close</i></button>{{ success }}</div>
                          <div class="alert alert-danger" v-if="error"><button type="button" class="pi-close" data-dismiss="alert"><i class="material-icons" data-dismiss="alert">close</i></button>{{ error }}</div>
                          <div class="form-group">
                              <select class="form-control" v-model="user.title">
                                  <option value="">-- Select Title --</option>
                                  <option value="Mr">Mr.</option>
                                  <option value="Mrs">Mrs.</option>
                                  <option value="Miss">Miss.</option>
                              </select>
                          </div>
                          <div class="form-group">
                              <select class="form-control" v-model="user.user_type">
                                  <option value="">-- User Type--</option>
                                  <option value="admin">Admin</option>
                                  <option value="vendor">Vendor</option>
                                  <option value="client">Client</option>
                              </select>
                          </div>
                          <div class="form-group">
                              <input type="text" class="form-control" v-model="user.first_name" placeholder="First Name" aria-label="Full name" aria-describedby="basic-addon1">
                          </div>

                          <div class="form-group">
                              <input type="text" class="form-control" v-model="user.last_name" placeholder="Last Name" aria-label="Full name" aria-describedby="basic-addon1">
                          </div>
                          <div class="form-group">
                              <input type="text" v-model="user.phone" pattern="^\+[1-9]\d{1,14}$" class="form-control" placeholder="Phone Number" value="" required>
                              <span class="note">Format: +2349034268873</span>
                          </div>

                          <div class="form-group">
                              <input type="text" v-model="user.email" class="form-control" id="inputEmail" placeholder="Email" value="">
                          </div>

                          <div class="form-group">
                              <textarea type="text" v-model="user.address" class="form-control" id="inputAddress" rows="4">Address</textarea>
                          </div>

                          <div class="form-group">
                              <input type="password" class="form-control" v-model="user.password" id="inputPassword4" placeholder="Password" value="">
                          </div>
                      </div>
                  </div>


                  <div class="row">
                      <div class="col">
                      <button type="submit" class="pull pull-right mb-2 btn btn-primary"><i class="fa fa-plus"></i>Add User</button>
                      </div>
                  </div>
              </form>
              </div>
            </div>
            <!-- END PANEL HEADLINE -->
          </div>
      </div>


    </div>


</template>
<script>
export default {
  props:['page'],
    data(){
        return {
            errors: [],
            user: {
                title:'',
                address:'',
                user_type:'',
                first_name:'',
                last_name:'',
                email:'',
                phone:'',
                password:''
            },
            success: '',
            error: ''
        }
    },
    methods: {
        register(){
            let component = this;
            this.$store.dispatch('addUser', [component.user,this.$store.state.auth.headers])
            .then((resp) => {
                this.error = ''
                this.success = ''
                if(resp.data.error){
                  toastr.error(resp.data.msg)
                  this.error = resp.data.msg
                }else{
                  toastr.success(resp.data.msg)
                  this.success = resp.data.msg
                  this.user= {
                      title:'',
                      address:'',
                      user_type:'',
                      first_name:'',
                      last_name:'',
                      email:'',
                      phone:'',
                      password:''
                  }
                  this.errors = []
                }

            })
            .catch(err => {
                console.log(err)
                this.error = err.message
            })
        },
        checkForm: function (e) {
            if (this.user.title && this.user.first_name && this.user.last_name && this.user.email && this.user.phone && this.user.password) {
                if (!this.validEmail(this.user.email)) {
                    this.errors.push('Valid email required.');
                    return false;
                }
                this.register();
            return true;
            }

            this.errors = [];
            if (!this.user.title) {
            this.errors.push('Title required.');
            return false;
            }
            if (!this.user.first_name) {
            this.errors.push('FirstName required.');
            return false;
            }
            if (!this.user.last_name) {
            this.errors.push('LastName required.');
            return false;
            }
            if (!this.user.phone) {
            this.errors.push('Phone Number required.');
            return false;
            }
            if (!this.user.email) {
            this.errors.push('Email required.');
            return false;
            }
            if (!this.validEmail(this.user.email)) {
            this.errors.push('Valid email required.');
            return false;
            }
            if (!this.user.password) {
            this.errors.push('Password required.');
            return false;
            }
            e.preventDefault();

        },
        validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}
</script>
