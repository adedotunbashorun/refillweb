<template>
<div>
    <h3 class="page-title">{{ page }}<nuxt-link to="/admin/class" class="pull pull-right btn btn-outline-primary"><i class="fa fa-arrow-left"></i> Go Back</nuxt-link></h3>
    <div class="row">
      <div class="col-md-6">
        <!-- PANEL HEADLINE -->
        <div class="panel panel-headline">
          <div class="panel-heading">
              <h3 class="panel-title">Edit Class </h3>
              <span class="text-uppercase panel-subtitle">Fill form to update class</span>
          </div>
          <div class="panel-body">
            <form @submit.prevent="checkForm" v-if="data">
                    <p v-if="errors.length">
                        <b>Please correct the following error(s):</b>
                        <ul>
                        <li class="text-danger" v-for="error in errors" :key="error">{{ error }}</li>
                        </ul>
                    </p>
                    <div class="alert alert-success" v-if="success"><button type="button" class="pi-close" data-dismiss="alert"><i class="material-icons" data-dismiss="alert">close</i></button>{{ success }}</div>
                    <div class="alert alert-danger" v-if="error"><button type="button" class="pi-close" data-dismiss="alert"><i class="material-icons" data-dismiss="alert">close</i></button>{{ error }}</div>

                    <div class="form-group">
                        <input type="file" class="form-control" @change="onFileChange">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" v-model="data.name" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1">
                    </div>

                    <div class="form-group">
                        <textarea type="text" class="form-control" v-model="data.description" rows="4" aria-describedby="basic-addon1">
                        </textarea>
                    </div>
                    <div class="row">
                        <div class="col">
                        <button type="submit" class="mb-2 btn btn-primary mr-2">Update Class</button>
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
import Adedotun from '../../Extra/adedotun'
export default {
  props:['page'],
    data(){
      return {
        errors: [],
        data: {
            name:'',
            description:'',
            image: ''
        },
        success: '',
        error:'',
        apiUrl : ''
      }
  },
  mounted(){
    this.apiUrl = config.apiUrl
    this.getClass()
  },
  components:{
      Adedotun
  },
  methods: {
    getClass(){
        this.$store.dispatch('classById', [this.$nuxt._route.params.id,this.$store.state.auth.headers])
        .then((resp) => {
             this.data = resp.data.class
        }).catch(err => console.log())
    },

    update(){
        let component = this;
        this.$store.dispatch('updateClass', [component.data,this.$store.state.auth.headers])
        .then((resp) => {
          this.error = ''
          this.success = ''
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
            this.error = ''
            this.error = err.message
            console.log(err)
        })
    },
    checkForm: function (e) {
        if (this.data.name && this.data.description) {
        this.update();
        return true;
        }

        this.errors = [];
        if (!this.data.name) {
        this.errors.push('Name required.');
        return false;
        }
        if (!this.data.description) {
        this.errors.push('Description required.');
        return false;
        }
        e.preventDefault();
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
            vm.data.image = e.target.result;
          };
          reader.readAsDataURL(file);
        },
  }
}
</script>
