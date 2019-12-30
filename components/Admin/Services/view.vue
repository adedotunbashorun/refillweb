<template>
<div>
    <h3 class="page-title">{{ page }}<nuxt-link to="/admin/service" class="pull pull-right btn btn-outline-primary"><i class="fa fa-arrow-left"></i> Go Back</nuxt-link></h3>
    <div class="row">
      <div class="col-md-6">
        <!-- PANEL HEADLINE -->
        <div class="panel panel-headline">
          <div class="panel-heading">
              <h3 class="panel-title">Edit Service </h3>
              <span class="text-uppercase panel-subtitle">Fill form to update service</span>
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
                        <input type="text" class="form-control" v-model="data.name" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1">
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-control" v-model="data.price" placeholder="Price" aria-label="Price" aria-describedby="basic-addon1">
                    </div>

                    <div class="form-group">
                        <input type="text" class="form-control" v-model="data.estimated_time" placeholder="Estimated Time" aria-label="Price" aria-describedby="basic-addon1">
                    </div>

                    <div class="form-group">
                        <textarea type="text" class="form-control" v-model="data.description" rows="4" aria-describedby="basic-addon1">
                        </textarea>
                    </div>
                    <div class="row">
                        <div class="col">
                        <button type="submit" class="mb-2 btn btn-primary mr-2">Update Service</button>
                        </div>
                    </div>
                </form>
          </div>
        </div>
        <!-- END PANEL HEADLINE -->
      </div>
      <div class="col-md-6">
        <div class="panel panel-headline">
          <div class="panel-heading">
              <h3 class="panel-title">List Service Category</h3>
          </div>
          <div class="panel-body">
            <table id="question-table" class="table">
              <thead class="bg-light">
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Action </th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="(question, index) in service_categories" :key="index">
                      <td>{{ index + 1}}</td>
                      <td><img :src="apiUrl+'/'+question.image_url" style="width:30px;height:30px" /></td>
                      <td>{{ question.name}}</td>
                      <td>{{question.description}}</td>
                      <td>
                        <div class="dropdown">
                          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Action
                          </button>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <nuxt-link class="" :to="{name: 'admin-service_category-id', params:{id : question._id}}" title="edit / view">
                            <i class="material-icons">edit</i></nuxt-link>
                            <div class="dropdown-divider"></div>
                            <a class="text-danger" style="cursor:pointer;" @click="deleteQuestion(question._id)" title="delete">
                            <i class="material-icons text-danger">delete</i></a>
                          </div>
                        </div>
                      </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
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
            estimated_time: '',
            image: '',
            price: ''
        },
        service_categories:[],
        success: '',
        error:'',
        apiUrl : ''
      }
  },
  mounted(){
    this.apiUrl = config.apiUrl
    this.getCategory()
    setTimeout(() => {
        $('#question-table').DataTable({})
    },2000)
  },
  components:{
      Adedotun
  },
  methods: {
    getCategory(){
        this.$store.dispatch('categoryById', [this.$nuxt._route.params.id,this.$store.state.auth.headers])
        .then((resp) => {
             this.data = resp.data.category
            this.service_categories = resp.data.service_categories
        }).catch(err => console.log())
    },

    update(){
        let component = this;
        this.$store.dispatch('updateCategory', [component.data,this.$store.state.auth.headers])
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
        if (this.data.name && this.data.price && this.data.description) {
        this.update();
        return true;
        }

        this.errors = [];
        if (!this.data.name) {
        this.errors.push('Name required.');
        return false;
        }

        if (!this.data.price) {
        this.errors.push('Price required.');
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
