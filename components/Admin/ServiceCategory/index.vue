<template>
  <div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-12">
        <!-- TABLE NO PADDING -->
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">Service Category List
              <nuxt-link to="/admin/service_category/create" class="pull pull-right btn btn-outline-primary">
              Create Service Category</nuxt-link>
            </h3>
            <hr/>
          </div>
          <div class="panel-body no-padding">
            <table id="question-table" class="table">
              <thead class="bg-light">
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Action </th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="(question, index) in service_categories" :key="index">
                      <td>{{ index + 1}}</td>
                      <td><img :src="apiUrl+'/'+question.image_url" style="width:30px;height:30px" /></td>
                      <td>{{ (question.category_id != null) ? question.category_id.name : ''}}</td>
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
        <!-- END TABLE NO PADDING -->

      </div>
    </div>
  </div>
</template>
<script>
import {config} from '../../../config'
export default {
    props:['service_categories','page'],
    data(){
        return {
            apiUrl : ''
        }
    },
    mounted(){
        this.apiUrl = config.apiUrl
        setTimeout(() => {
            $('#question-table').DataTable({})
        },2000)
    },
    methods:{
        deleteQuestion(id){
            this.$store.dispatch('deleteQuestion', [id,this.$store.state.auth.headers])
            .then((resp) => {
            }).catch(err => console.log())
        }
    }
}
</script>
