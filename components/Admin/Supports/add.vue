<template>
<div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-8">
        <!-- PANEL HEADLINE -->
        <div class="panel panel-headline">
          <div class="panel-heading">
              <h3 class="panel-title">Add Support <nuxt-link to="/admin/supports" class="pull pull-right btn btn-outline-primary"><i class="fa fa-arrow-left"></i> Go Back</nuxt-link></h3>
              <span class="text-uppercase panel-subtitle">Fill form to create new support</span>
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

                <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-first-name">First name</label>
                        <input type="text" id="input-first-name" class="form-control form-control-alternative" v-model="support.user.first_name" placeholder="First name" readonly>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-last-name">Last name</label>
                        <input type="text" id="input-last-name" class="form-control form-control-alternative" placeholder="Last name" v-model="support.user.last_name" readonly>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-email">Email address</label>
                        <input type="email" id="input-email" class="form-control form-control-alternative" v-model="support.user.email" placeholder="jesse@example.com" disabled>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-type">Priority</label>
                        <select  type="text" id="input-type" class="form-control form-control-alternative" v-model="support.dispute_priority_id">
                          <option value="">Select Priority</option>
                          <option v-for="priority in priorities" :key="priority._id" :value="priority._id">{{ priority.name }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-title">Title</label>
                        <input type="text" id="input-title" class="form-control form-control-alternative" v-model="support.title" placeholder="Title">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-md-group">
                        <label class="form-control-label" for="input-message">Message</label>
                        <textarea id="input-message" class="form-control" rows="5" placeholder="Message" v-model="support.message"></textarea>
                      </div>
                    </div>
                  </div>


                <div class="row">
                  <br/>
                  <div class="col-md-12">
                    <button type="submit" class="pull pull-right btn btn-primary"><i class="fa fa-plus"></i>Add Support</button>
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
import axios from 'axios';
export default {
    props: ['page','user'],
    data(){
        return {
          errors: [],
          priorities: [],
          error:'',
          success:'',
          support:{
            dispute_priority_id: '',
            message:'',
            title:'',
            user:{}
          },
        }
    },
    mounted() {
      this.support.user = this.user
      this.Priorities();
    },
    methods: {
      Priorities(){
        this.$store.dispatch('allPriorities', this.$store.state.auth.headers)
        .then((resp) => {
          this.priorities = resp.data.priorities
        }).catch(err => console.log())
      },
      create(){
        let component = this;
            this.$store.dispatch('addSupport', [component.support,this.$store.state.auth.headers])
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
                  this.support= {
                    dispute_priority_id: '',
                    message:'',
                    title:'',
                    user: this.user
                  }
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
        if (this.support.title && this.support.dispute_priority_id && this.support.message ) {
          this.create();
          return true;
        }

        this.errors = [];
        if (!this.support.title) {
          this.errors.push('Title required.');
          return false;
        }
        if (!this.support.dispute_priority_id) {
          this.errors.push('Priority required.');
          return false;
        }
        if (!this.support.message) {
          this.errors.push('Message required.');
          return false;
        }
        e.preventDefault();

      },
    }
}
</script>



