<template>
    <CreateCategory :page="page"/>
</template>
<script>
import CreateCategory from '~/components/Admin/Services/add.vue'
export default {
    layout: 'admin',
    data(){
      return{
        page: 'Create Service'
      }
    },
    components:{
        CreateCategory
    }
}
</script>
