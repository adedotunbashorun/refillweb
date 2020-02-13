<template>
<div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-8">
        <div class="panel panel-headline">
          <div class="panel-heading">
              <h3 class="panel-title">Send Message <nuxt-link to="/admin/messages" class="pull pull-right btn btn-outline-primary"><i class="fa fa-arrow-left"></i> Go Back</nuxt-link></h3>
              <span class="text-uppercase panel-subtitle">Fill form to create new message</span>
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
                  <div class="col-lg-12">
                    <div class="form-group">
                      <label class="form-control-label" for="input-type">Users</label>
                      <select  type="text" id="input-type" class="form-control form-control-alternative" v-model="message.user">
                        <option value="">Select User</option>
                        <option value="admin">Administrator</option>
                        <option value="client">Client</option>
                        <option value="vendor">Vendor</option>
                        <option value="rider">Rider</option>
                        <option value="all">All</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label class="form-control-label" for="input-title">Subject</label>
                      <input type="text" id="input-title" class="form-control form-control-alternative" v-model="message.subject" placeholder="Title">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <label class="form-control-label" for="input-title">Medium</label>
                      <select  type="text" id="input-type" class="form-control form-control-alternative" v-model="message.medium">
                        <option value="">Select Medium</option>
                        <option value="sms">Sms</option>
                        <option value="email">Email</option>
                        <option value="app">Mobile App Notification</option>
                        <option value="all">All</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-md-group">
                      <label class="form-control-label" for="input-message">Message</label>
                      <textarea id="input-message" class="form-control" rows="5" placeholder="Message" v-model="message.message"></textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <br/>
                  <div class="col-md-12">
                    <button type="submit" class="pull pull-right btn btn-primary"><i class="fa fa-plus"></i>Broadcast Message</button>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>


</div>
</template>
<script>
import axios from 'axios';
export default {
    props: ['page'],
    data(){
        return {
          errors: [],
          priorities: [],
          error: null,
          success: null,
          message:{
            user: '',
            message:'',
            subject:'',
            medium: '',
          },
        }
    },
    methods: {
      async create(){
        try {
          const resp = await this.$store.dispatch('createMessage', [this.message,this.$store.state.auth.headers]);
          this.error = null
          this.success = null
          if(resp.data.error){
            toastr.error(resp.data.msg)
            this.error = resp.data.msg
          }else{
            toastr.success(resp.data.msg)
            this.success = resp.data.msg
            this.message = {
              user: '',
              message:'',
              subject:'',
              medium: '',
            }
            this.errors = []
          }
        } catch (error) {
          this.error = error.message
        }

      },
      checkForm: function (e) {
        if (this.message.subject && this.message.user && this.message.message && this.message.medium ) {
          this.create();
          return true;
        }

        this.errors = [];
        if (!this.message.user) {
          this.errors.push('User required.');
          return false;
        }
        if (!this.message.subject) {
          this.errors.push('Subject required.');
          return false;
        }
        if (!this.message.medium) {
          this.errors.push('Medium required.');
          return false;
        }
        if (!this.message.message) {
          this.errors.push('Message required.');
          return false;
        }
        e.preventDefault();

      },
    }
}
</script>



