<template>
    <CreateMessage :page="page" />
</template>
<script>
export default {
    layout: 'admin',
    data(){
      return{
        page : 'Create Supports'
      }
    },
    components:{
        CreateMessage: () => import('~/components/Admin/Message/add.vue')
    },
}
</script>
