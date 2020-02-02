<template>
<div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-12">
        <!-- PANEL HEADLINE -->
        <div class="panel panel-headline">
          <div class="panel-heading">
              <h3 class="panel-title">Add Settings <nuxt-link to="/admin/Settings" class="pull pull-right btn btn-outline-primary"><i class="fa fa-arrow-left"></i> Go Back</nuxt-link></h3>
              <span class="text-uppercase panel-subtitle">Fill form to create and update Settings</span>
          </div>
          <div class="panel-body">
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
                  >Systen Settings</a>
              </li>
              <li>
                <a href="#tab-bottom-left2" role="tab" data-toggle="tab"
                  >Payment Settings</a>
              </li>
              <li>
                <a href="#tab-bottom-left3" role="tab" data-toggle="tab"
                  >Pusher Settings</a>
              </li>
            </ul>
          </div>
          <div class="tab-content">
              <div class="tab-pane fade in active" id="tab-bottom-left1">
                <form @submit.prevent="register">
                  <div class="form-group">
                      <input type="text" class="form-control" v-model="settings.app_name" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1">
                  </div>
                  <div class="form-group">
                      <input type="email" class="form-control" v-model="settings.email" placeholder="Email" aria-describedby="basic-addon1">
                  </div>
                  <div class="form-group">
                      <textarea type="text" class="form-control" placeholder="Description" v-model="settings.description" rows="4" aria-describedby="basic-addon1">
                      </textarea>
                  </div>
                  <div class="row">
                    <div class="col">
                    <button type="submit" class="pull pull-right btn btn-primary"><i class="fa fa-plus"></i>Save System Settings</button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="tab-pane fade" id="tab-bottom-left2">
                <form @submit.prevent="register">
                  <div class="form-group">
                    <input type="number" class="form-control" v-model="settings.maximum_km" placeholder="Maximum Km" aria-describedby="basic-addon1">
                  </div>

                  <div class="form-group">
                    <input type="number" class="form-control" v-model="settings.price_km" placeholder="Price Per Km" aria-describedby="basic-addon1">
                  </div>

                  <div class="form-group">
                    <input type="number" class="form-control" v-model="settings.base_price" placeholder="Delivery Base Price" aria-describedby="basic-addon1">
                  </div>

                  <div class="form-group">
                    <input type="text" class="form-control" v-model="settings.paystack_live_public_key" placeholder="Paystack Live Public Key" aria-label="Name" aria-describedby="basic-addon1">
                  </div>

                  <div class="form-group">
                    <input type="text" class="form-control" v-model="settings.paystack_live_secret_key" placeholder=" Paystack Live Secret Key" aria-label="Name" aria-describedby="basic-addon1">
                  </div>

                  <div class="form-group">
                    <input type="text" class="form-control" v-model="settings.paystack_test_public_key" placeholder="Paystack Test Public Key" aria-label="Name" aria-describedby="basic-addon1">
                  </div>

                  <div class="form-group">
                    <input type="text" class="form-control" v-model="settings.paystack_test_secret_key" placeholder="Paystack Test Secret Key" aria-label="Name" aria-describedby="basic-addon1">
                  </div>
                  <div class="row">
                    <div class="col">
                    <button type="submit" class="pull pull-right btn btn-primary"><i class="fa fa-plus"></i>Save Payment Settings</button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="tab-pane fade" id="tab-bottom-left3">
                <form @submit.prevent="register">
                  <div class="form-group">
                      <input type="text" class="form-control" v-model="settings.pusher_app_id" placeholder="Pusher Id" aria-describedby="basic-addon1">
                  </div>

                  <div class="form-group">
                      <input type="text" class="form-control" v-model="settings.pusher_app_key" placeholder="Pusher Key" aria-describedby="basic-addon1">
                  </div>

                  <div class="form-group">
                      <input type="text" class="form-control" v-model="settings.pusher_app_secret" placeholder="Pusher Secret" aria-describedby="basic-addon1">
                  </div>

                  <div class="form-group">
                      <input type="text" class="form-control" v-model="settings.pusher_app_cluster" placeholder="Pusher Cluster" aria-describedby="basic-addon1">
                  </div>

                  <div class="form-group">
                      <input type="text" class="form-control" v-model="settings.pusher_app_encrypted" placeholder="Pusher Encryption" aria-describedby="basic-addon1">
                  </div>
                  <div class="row">
                    <div class="col">
                      <button type="submit" class="pull pull-right btn btn-primary"><i class="fa fa-plus"></i>Save Pusher Settings</button>
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
export default {
  props:['page'],
    data(){
      return {
          errors: [],
          id: null,
          settings: {
              app_name:'',
              email:'',
              base_price: '',
              paystack_live_public_key:'',
              paystack_secret_public_key:'',
              pusher_app_id: '',
              pusher_app_key: '',
              pusher_app_secret: '',
              pusher_app_cluster: '',
              pusher_app_encrypted: '',
              description:'',
              maximum_km: '',
              price_km: ''
          },
          success: '',
          error: ''
      }
    },
    mounted(){
      this.allSettings()
    },
    methods: {
        register(){
            let component = this;
            (this.id === null) ? '' : component.settings.id = this.id
            this.$store.dispatch('addSettings', [component.settings,this.$store.state.auth.headers])
            .then((resp) => {
               this.error = ''
                this.success = ''
                if(resp.data.error){
                  toastr.error(resp.data.msg)
                  this.error = resp.data.msg
                }else{
                  toastr.success(resp.data.msg)
                  this.success = ''
                  this.success = resp.data.msg
                  this.errors = []
                  this.allSettings()
                }
            })
            .catch(err => {
                this.error = ''
                this.error = err.message
                console.log(err)
            })
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
            vm.settings.logo = e.target.result;
          };
          reader.readAsDataURL(file);
        },
        allSettings(){
          this.$store.dispatch('allSettings', this.$store.state.auth.headers)
            .then((resp) => {
              this.settings = resp.data.settings.data
              this.id = resp.data.settings._id
            }).catch(err =>{

            })
        }
    },

}
</script>

