<template>
    <ReplySupport :page='page' :user="user" />
</template>
<script>
import ReplySupport from '~/components/Admin/Supports/ReplySupport.vue'
export default {
    layout: 'admin',
    data(){
      return{
        page : 'View / Edit Support'
      }
    },
    components:{
        ReplySupport
    },
    computed:{
      user(){
          return this.$store.getters.authUser
      }
    }
}
</script>
