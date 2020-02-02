<template>
    <Settings :page="page"/>
</template>
<script>
export default {
    layout: 'admin',
    data(){
      return{
        page: 'Settings'
      }
    },
    components:{
        Settings: () => import('~/components/Admin/Settings/index.vue')
    },
}
</script>
