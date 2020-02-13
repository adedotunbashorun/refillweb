<template>
<div>
    <h3 class="page-title">{{ page }}<nuxt-link to="/admin/messages" class="pull pull-right btn btn-outline-primary"><i class="fa fa-arrow-left"></i> Go Back</nuxt-link></h3>
    <div class="row">
      <div class="col-md-6">
        <div class="panel">
          <div class="mt-element-list" v-if="message">
              <div class="mt-list-head list-news font-white bg-blue">
                  <div class="list-head-title-container">
                      <h4 class="list-title">Message Information</h4>
                      <hr />
                  </div>
              </div>

              <ul class="list-group">
                  <li class="list-group-item">
                    {{ message.subject }}
                  </li>
                  <li class="list-group-item">
                      <strong>To:</strong><br/>
                      {{ message.user }}
                  </li>
                  <li class="list-group-item">
                      <strong>Through:</strong><br/>
                      {{ message.medium }}
                  </li>
                  <li class="list-group-item">
                      <strong>Submitted:</strong><br/>
                      <Adedotun :value="message.createdAt" fn="humandate" />
                  </li>
                  <li class="list-group-item">
                      <strong>Last Updated:</strong><br/>
                      <Adedotun :value="message.updatedAt" fn="humandate" />
                  </li>
              </ul>
              <div class="panel-footer" style="margin: 5px;">
                  {{ message.message }}
              </div>
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
  props:['message','page'],
  data(){
    return {
      errors: [],
      success: null,
      error:null,
    }
  },
  methods: {
  }
}
</script>
