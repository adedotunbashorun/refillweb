<template>
    <Settings :page="page"/>
</template>
<script>
import Settings from '~/components/Admin/Settings/index.vue'
export default {
    layout: 'admin',
    data(){
      return{
        page: 'Settings'
      }
    },
    components:{
        Settings
    },
}
</script>
