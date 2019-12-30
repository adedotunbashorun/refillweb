<template>
  <div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-12">
        <!-- TABLE NO PADDING -->
        <div class="panel">
          <div class="panel-heading">
            <h3 class="panel-title">User List
              <nuxt-link to="/admin/users/create" class="pull pull-right btn btn-outline-primary">
              Create User</nuxt-link>
            </h3>
            <hr/>
          </div>
          <div class="panel-body no-padding">
            <table id="user-table" class="table">
              <thead>
                <tr>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>User Type</th>
                    <th>Is Active</th>
                    <th> Action </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user,index) in users" :key="index">
                    <td>{{ index +1 }}</td>
                    <td>{{ user.first_name + ' ' + user.last_name}}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone }}</td>
                    <td>{{ user.user_type }}</td>
                    <td style="color: #3ED60E">{{ user.is_active }}</td>
                    <td>
                      <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Action
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <nuxt-link class="" :to="{name: 'admin-users-id', params:{id : user._id}}" title="edit / view">
                          <i class="fa fa-edit"></i> Edit</nuxt-link>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item text-success" style="cursor:pointer;" @click="activateUser(user._id)" title="activate" v-if="user.is_active == false">
                          <i class="fa fa-check" ></i> Activate</a>
                          <a class="dropdown-item text-danger" style="cursor:pointer;" @click="activateUser(user._id)" title="Deactivate" v-else>
                          <i class="fa fa-times" ></i> Deactivate</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item text-success" style="cursor:pointer;" @click="approveUser(user._id)" title="approve" v-if="user.approval_status == false && user.user_type == 'vendor'">
                          <i class="fa fa-check" ></i> Approve</a>
                          <a class="dropdown-item text-danger" style="cursor:pointer;" @click="approveUser(user._id)" title="Decline User" v-if="user.approval_status == true && user.user_type == 'vendor'">
                          <i class="fa fa-times" ></i> Decline</a>
                          <div class="dropdown-divider"></div>
                          <a v-if="user.user_type !== 'admin'" class="text-danger" style="cursor:pointer;" @click="deleteUser(user._id)" title="delete">
                          <i class="fa fa-delete text-danger"></i> Delete</a>
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
export default {
    props:['users','page'],
    mounted(){
        setTimeout(() => {
            $('#user-table').DataTable({})
        },2000)
    },
    methods:{
        deleteUser(id){
            this.$store.dispatch('removeUser', [id,this.$store.state.auth.headers])
            .then((resp) => {
              toastr.success(resp.data.msg)
            }).catch(err => toastr.error(err.message))
        },
        approveUser(id){
            this.$store.dispatch('approveUser', [id,this.$store.state.auth.headers])
            .then((resp) => { toastr.success(resp.data.msg)
            }).catch(err => toastr.error(err.message))
        },

        activateUser(id){
            this.$store.dispatch('activateUser', id)
            .then((resp) => { toastr.success(resp.data.msg)
            }).catch(err => toastr.error(err.message))
        }
    }
}
</script>
