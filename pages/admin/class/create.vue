<template>
    <CreateClass :page="page" />
</template>
<script>
import CreateClass from '~/components/Admin/Class/add.vue'
export default {
    layout: 'admin',
    data(){
      return{
        page: 'Create Class'
      }
    },
    components:{
        CreateClass
    }
}
</script>
