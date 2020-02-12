<template>
<div>
    <h3 class="page-title">{{ page }}<nuxt-link to="/admin/contacts" class="pull pull-right btn btn-outline-primary"><i class="fa fa-arrow-left"></i> Go Back</nuxt-link></h3>
    <div class="row">
      <div class="col-md-4">
        <div class="panel">
          <div class="mt-element-list">
              <div class="mt-list-head list-news font-white bg-blue">
                  <div class="list-head-title-container">
                      <h4 class="list-title">Contact Information</h4>
                      <hr />
                  </div>
              </div>

              <ul class="list-group">
                  <li class="list-group-item">
                    {{ contact.subject }}
                  </li>
                  <li class="list-group-item">
                      <strong>Submitted:</strong><br/>
                      <Adedotun :value="contact.createdAt" fn="humandate" />
                  </li>
                  <li class="list-group-item">
                      <strong>Last Updated:</strong><br/>
                      <Adedotun :value="contact.updatedAt" fn="humandate" />
                  </li>
              </ul>
              <div class="panel-footer" style="margin: 5px;">
                  {{ contact.message }}
              </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <!-- PANEL HEADLINE -->
        <div class="panel panel-headline">
          <div class="panel-heading">
              <h3 class="panel-title">Reply Contact Message </h3>
              <span class="text-uppercase panel-subtitle">Fill form to reply</span>
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
                    <input type="text" class="form-control" :value="contact.email" disabled>
                </div>

                <div class="form-group">
                    <input type="text" class="form-control" :value="'Re: '+contact.subject" placeholder="Subject" disabled>
                </div>

                <div class="form-group">
                    <textarea type="text" class="form-control" v-model="data.message" rows="4" required></textarea>
                </div>
                <div class="row">
                    <div class="col-md-12">
                      <button type="submit" class="mb-2 btn btn-primary mr-2">Reply</button>
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
export default {
  components:{
    Adedotun: () => import("~/components/Extra/adedotun")
  },
  props:['contact','page'],
  data(){
    return {
      errors: [],
      data: {
        id: null,
        subject:'',
        message:'',
      },
      success: null,
      error:null,
    }
  },
  methods: {
    async replyContact(){
      try {
        this.data.id = this.$nuxt._route.params.id;
        this.data.subject = 'Re: '+this.contact.subject;
        let resp = await this.$store.dispatch('replyContact', [this.data,this.$store.state.auth.headers])
        if(resp.data.error){
          toastr.error(resp.data.msg)
          this.error = resp.data.msg
        }else{
          toastr.success(resp.data.msg)
          this.success = resp.data.msg
          this.errors = []
        }
      } catch (error) {
        this.error = error.message
      }

    },
    checkForm: function (e) {
      if (this.data.message) {
        this.replyContact();
      return true;
      }

      this.errors = [];
      if (!this.data.message) {
      this.errors.push('Message required.');
      return false;
      }
      e.preventDefault();
    },
  }
}
</script>
