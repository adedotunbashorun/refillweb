<template>
  <div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-12">
        <!-- TABLE NO PADDING -->
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">Support List
              <!-- <nuxt-link to="/admin/supports/create" class="pull pull-right btn btn-outline-primary">
              Create Support</nuxt-link> -->
            </h3>
            <hr/>
          </div>
          <div class="panel-body no-padding">
            <table class="table align-items-center table-white table-flush" id="supports-table">
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Created At</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(support,index) in supports" :key="index">
                    <th scope="row">
                      {{ index+1 }}
                    </th>
                    <td>
                      {{ (support.user_id) ? support.user_id.first_name +' '+ support.user_id.last_name : '' }}
                    </td>
                    <td>
                      {{ (support.user_id) ? support.user_id.email : '' }}
                    </td>
                    <td>
                      {{ support.title }}
                    </td>
                    <td>
                      {{ support.message }}
                    </td>
                    <td><Adedotun :value="support.createdAt" fn="humandate" /></td>
                    <td><router-link :to="{name: 'admin-supports-id', params:{id : support._id}}" class="btn btn-sm btn-primary float-right" v-if="support.user_id">View Support</router-link></td>
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
import Adedotun from '../../Extra/adedotun'
import axios from 'axios';
    export default {
    props: ['page','supports'],
    components:{ Adedotun},

      mounted() {
          setTimeout(() => {
              $('#supports-table').DataTable({})
          },2000)
      },
    }
</script>



