<template>
<div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-8">
        <!-- PANEL HEADLINE -->
        <div class="panel panel-headline">
          <div class="panel-heading">
              <h3 class="panel-title">Add Service <nuxt-link to="/admin/service" class="pull pull-right btn btn-outline-primary"><i class="fa fa-arrow-left"></i> Go Back</nuxt-link></h3>
              <span class="text-uppercase panel-subtitle">Fill form to create new service</span>
          </div>
          <div class="panel-body">
            <form @submit.prevent="checkForm">
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
                    <input type="text" class="form-control" v-model="category.name" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1">
                </div>

                <!-- <div class="form-group">
                    <input type="text" class="form-control" v-model="category.price" placeholder="Price" aria-label="Price" aria-describedby="basic-addon1">
                </div> -->

                <!-- <div class="form-group">
                    <input type="text" class="form-control" v-model="category.estimated_time" placeholder="Estimated Time" aria-label="Estimated Time" aria-describedby="basic-addon1">
                </div> -->

                <div class="form-group">
                    <textarea type="text" class="form-control" placeholder="Description" v-model="category.description" rows="4" aria-describedby="basic-addon1">
                    </textarea>
                </div>
                <div class="row">
                    <div class="col">
                    <button type="submit" class="pull pull-right btn btn-primary"><i class="fa fa-plus"></i>Add Service</button>
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
            category: {
                name:'',
                description:'',
                image:'',
            },
            success: '',
            error: ''
        }
    },
    methods: {
        register(){
            let component = this;
            this.$store.dispatch('addCategory', [component.category,this.$store.state.auth.headers])
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
                  this.category= {
                      name:'',
                      description:'',
                      image:'',
                  }
                  this.errors = []
                }
            })
            .catch(err => {
                this.error = ''
                this.error = err.message
            })
        },
        checkForm: function (e) {
            if (this.category.name  && this.category.description) {
            this.register();
            return true;
            }

            this.errors = [];
            if (!this.category.name) {
            this.errors.push('Name required.');
            return false;
            }
            // if (!this.category.price) {
            // this.errors.push('Price required.');
            // return false;
            // }
            if (!this.category.description) {
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
            vm.category.image = e.target.result;
          };
          reader.readAsDataURL(file);
        },
    }
}
</script>

