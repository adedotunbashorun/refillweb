<template>
    <ContactView :contact="contact" :page="page"/>
</template>
<script>
export default {
    layout: 'admin',
    data(){
      return{
        page: 'Reply Contact Message'
      }
    },
    components:{
        ContactView: () => import('~/components/Admin/Contact/view.vue')
    },
    mounted(){
      this.getContact()
    },
    computed:{
        contact(){
            return this.$store.state.contacts.contact
        }
    },
    methods:{
      getContact(){
          this.$store.dispatch('contactById', [this.$nuxt._route.params.id,this.$store.state.auth.headers])
          .then((resp) => {
          }).catch(err => console.log())
      },
    }
}
</script>
