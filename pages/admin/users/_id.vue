<template>
    <CreateUser :page='page' />
</template>
<script>
import CreateUser from '~/components/Admin/User/profile.vue'
export default {
    layout: 'admin',
    data(){
      return{
        page : 'View / Edit User'
      }
    },
    components:{
        CreateUser
    }
}
</script>
