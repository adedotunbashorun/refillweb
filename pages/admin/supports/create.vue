<template>
    <CreateSupports :page="page" :user="user" />
</template>
<script>
import CreateSupports from '~/components/Admin/Supports/add.vue'
export default {
    layout: 'admin',
    data(){
      return{
        page : 'Create Supports'
      }
    },
    components:{
        CreateSupports,
    },
    computed:{
      user(){
          return this.$store.getters.authUser
      }
    },
}
</script>
