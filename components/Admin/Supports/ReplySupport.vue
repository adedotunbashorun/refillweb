<template>
<div>
    <h3 class="page-title">{{ page }}</h3>
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">
            <h3>Support Information</h3>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Submitted @ <Adedotun :value="support.createdAt" fn="date" /></li>
            <li class="list-group-item">Last Update @ <Adedotun :value="support.updatedAt" fn="date" /></li>
            <li class="list-group-item">
              <strong class="text text-danger">Priority</strong>
              <span v-for="(priority ,index) in priorities" :key="index"><strong v-if="priority._id == support.dispute_priority_id"> {{ priority.name }}</strong></span>
            </li>
          </ul>
          <br/>
          <button v-if="user.user_type == 'admin'" @click="Status('Active')" class="btn btn-info"><i v-if="support.status == 'Active'" class="fa fa-check"></i>Active</button>
          <button v-if="user.user_type == 'admin'" @click="Status('Resolved')" class="btn btn-success"><i v-if="support.status == 'Resolved'" class="fa fa-check"></i>Resolved</button>
          <button v-if="user.user_type == 'admin'" @click="Status('Declined')" class="btn btn-danger"><i v-if="support.status == 'Declined'" class="fa fa-check"></i>Declined</button>
        </div>
      </div>
      <div class="col-md-8">
        <!-- PANEL HEADLINE -->
        <div class="panel panel-headline">
          <div class="panel-heading">
              <h3 class="panel-title">Reply Support &nbsp;&nbsp;<strong class="badge btn-success">{{ support.status }}</strong><nuxt-link to="/admin/supports" class="pull pull-right btn btn-outline-primary"><i class="fa fa-arrow-left"></i> Go Back</nuxt-link></h3>
              <!-- <span class="text-uppercase panel-subtitle">Fill form to create new support</span> -->
          </div>
          <div class="panel-body">
            <div class="col-8">
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title">{{ user.first_name +' '+ user.last_name }}<span class="pull-right bagde badge-warning" ><Adedotun :value="support.createdAt" fn="humandate" /></span><br/> <strong><label>Ticket ID</label></strong><span style="margin-top:5px;" class="bagde badge-info pull-right">{{ support.ticket_no }}</span></h3><hr>
                    <p class="card-text text-capitalize">
                      {{ support.message }}
                    </p>
                  </div>
                </div>
                <br/>
                <div class="card">
                  <div class="card-body">
                    <div class="panel-group accordion" id="accordion3" v-if="support.status !== 2">
                        <div class="panel">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a class="accordion-toggle accordion-toggle-styled" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_1"><i class="fa fa-pencil"></i> Reply </a>
                                </h4>
                            </div>
                            <div id="collapse_3_1" class="panel-collapse collapse">
                                <div class="panel-body">
                                    <form @submit.prevent="ReplySupport">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Name <span class="required">*</span></label>
                                                    <input class="form-control" type="text" id="name" :value="user.first_name+' '+user.last_name" disabled/>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label>Email Address<span class="required">*</span></label>
                                                    <input class="form-control" type="email" id="email" :value="user.email" disabled/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Message <span class="required">*</span></label>
                                            <textarea class="form-control" v-model="reply.message" rows="5"></textarea>
                                            <input type="hidden" v-model="reply.user_id" />
                                            <input type="hidden" v-model="reply.dispute_id" />
                                        </div> <hr/>
                                        <button type="submit" class="btn btn-success" id="reply_dispute_btn"> Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="panel" style="border:1px solid lightgray; padding: 10px; margin-top: 4px;" v-for="(reply,index) in replies" :key="index">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            <i class="fa fa-user"></i> <strong>{{ reply.user_id.first_name + ' ' + reply.user_id.last_name }}</strong>
                            <span class="pull-right" style="font-size:12px;">{{ reply.created_at }}</span>
                        </h3>
                    </div>
                    <div class="panel-body">
                        {{ reply.message }}
                    </div>
                </div>
            </div>
          </div>
        </div>
        <!-- END PANEL HEADLINE -->
      </div>
    </div>


  </div>
</template>
<script>
import Adedotun from '../../Extra/adedotun'
    export default {
    props:['user','page'],
    components:{ Adedotun},
        data(){
            return {
              replies: [],
              priorities: [],
              support:{},
              reply:{
                user_id:'',
                dispute_id: '',
                message:''
              }
            }
        },
        mounted() {
            this.reply.user_id = this.user._id;
            this.getSupport();
            this.getReplies();
            this.Priorities();
        },
        methods: {
          Priorities(){
            this.$store.dispatch('allPriorities', this.$store.state.auth.headers)
            .then((resp) => {
              this.priorities = resp.data.priorities
            }).catch(err => console.log())
          },
          getSupport(){
            this.$store.dispatch('supportById', [this.$route.params.id,this.$store.state.auth.headers])
            .then((resp) => {
              // console.log(resp.data.support)
              this.support = resp.data.support
              this.reply.dispute_id = resp.data.support._id
            }).catch(err => console.log())
          },

          Status(value){
            this.$store.dispatch('updateSupport', [this.$route.params.id, value, this.$store.state.auth.headers])
            .then((resp) => {
              toastr.success(resp.data.msg)
              this.support = resp.data.support
            }).catch(err => console.log())
          },
          getReplies(){
            this.$store.dispatch('supportReplies', [this.$route.params.id,this.$store.state.auth.headers])
            .then((resp) => {
              this.replies = resp.data.replies
            }).catch(err => console.log())
          },
          ReplySupport(){
            //addSupportReply
            this.$store.dispatch('supportReplies', [this.reply,this.$store.state.auth.headers])
            .then((resp) => {
              this.reply.message = '';
              toastr.success(resp.data.msg)
              this.getSupport();
              this.getReplies();
              this.Priorities();
            }).catch(err => console.log())
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



