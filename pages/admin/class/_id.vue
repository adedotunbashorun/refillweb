<template>
    <ClassView :page="page"/>
</template>
<script>
import ClassView from '~/components/Admin/Class/view.vue'
export default {
    layout: 'admin',
    data(){
      return{
        page: 'View /Edit Class'
      }
    },
    components:{
        ClassView
    }
}
</script>
