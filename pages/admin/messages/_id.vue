<template>
    <Message :page='page' :message="message" />
</template>
<script>
export default {
    layout: 'admin',
    data(){
      return{
        page : 'View / Edit Support'
      }
    },
    components:{
        Message: () => import('~/components/Admin/Message/view.vue')
    },
    computed:{
      message(){
          return this.$store.getters.message
      }
    },
    methods:{
      getMessage(){
          this.$store.dispatch('messageById', [this.$nuxt._route.params.id,this.$store.state.auth.headers])
          .then((resp) => {
          }).catch(err => console.log())
      },
    },
    mounted(){
      this.getMessage()
    },
}
</script>
