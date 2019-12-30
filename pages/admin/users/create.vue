<template>
    <CreateUser :page="page" />
</template>
<script>
import CreateUser from '~/components/Admin/User/add.vue'
export default {
    layout: 'admin',
    data(){
      return{
        page : 'Create User'
      }
    },
    components:{
        CreateUser
    }
}
</script>
