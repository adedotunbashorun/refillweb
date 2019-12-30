<template>
    <Category :categories="categories" :page="page"/>
</template>
<script>
import Category from '~/components/Admin/Services/index.vue'
export default {
    layout: 'admin',
    data(){
      return{
        page: 'Services'
      }
    },
    components:{
        Category
    },
    mounted(){
        this.allCategories()
    },
    computed:{
        categories(){
            return this.$store.state.category.categories
        }
    },
    methods:{
        allCategories(){
            this.$store.dispatch('allCategories', this.$store.state.auth.headers)
            .then((resp) => {
            }).catch(err => console.log())
        }
    }
}
</script>
