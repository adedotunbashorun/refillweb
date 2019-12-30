<template>
<div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-8">
        <!-- PANEL HEADLINE -->
        <div class="panel panel-headline">
          <div class="panel-heading">
              <h3 class="panel-title">Add Settings <nuxt-link to="/admin/Settings" class="pull pull-right btn btn-outline-primary"><i class="fa fa-arrow-left"></i> Go Back</nuxt-link></h3>
              <span class="text-uppercase panel-subtitle">Fill form to create new Settings</span>
          </div>
          <div class="panel-body">
            <form @submit.prevent="register">
                <p v-if="errors.length">
                    <b>Please correct the following error(s):</b>
                    <ul>
                    <li class="text-danger" v-for="error in errors" :key="error">{{ error }}</li>
                    </ul>
                </p>
                <div class="alert alert-success" v-if="success"><button type="button" class="pi-close" data-dismiss="alert"><i class="material-icons" data-dismiss="alert">close</i></button>{{ success }}</div>
                <div class="alert alert-danger" v-if="error"><button type="button" class="pi-close" data-dismiss="alert"><i class="material-icons" data-dismiss="alert">close</i></button>{{ error }}</div>

                <div class="form-group">
                    <input type="text" class="form-control" v-model="settings.app_name" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1">
                </div>

                <div class="form-group">
                    <input type="email" class="form-control" v-model="settings.email" placeholder="Email" aria-describedby="basic-addon1">
                </div>

                <div class="form-group">
                    <input type="number" class="form-control" v-model="settings.maximum_km" placeholder="Maximum Km" aria-describedby="basic-addon1">
                </div>

                <div class="form-group">
                    <input type="number" class="form-control" v-model="settings.price_km" placeholder="Price Per Km" aria-describedby="basic-addon1">
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

                <div class="form-group">
                    <input type="file" class="form-control" @change="onFileChange">
                </div>

                <div class="form-group">
                    <textarea type="text" class="form-control" placeholder="Description" v-model="settings.description" rows="4" aria-describedby="basic-addon1">
                    </textarea>
                </div>
                <div class="row">
                    <div class="col">
                    <button type="submit" class="pull pull-right btn btn-primary"><i class="fa fa-plus"></i>Add Settings</button>
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
import {config} from '../../../config'
export default {
  props:['page'],
    data(){
        return {
            errors: [],
            settings: {
                app_name:'',
                email:'',
                logo:'',
                background_image:'',
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
      this.apiUrl = config.apiUrl
      this.allSettings()
    },
    methods: {
        register(){
            let component = this;
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
              (resp.data.settings == null) ? '' : this.settings = resp.data.settings.data

            }).catch(err =>{

            })
        }
    },

}
</script>

