<template>
    <CategoryView :page="page"/>
</template>
<script>
import CategoryView from '~/components/Admin/Services/view.vue'
export default {
    layout: 'admin',
    data(){
      return{
        page: 'View /Edit Service'
      }
    },
    components:{
        CategoryView
    }
}
</script>
