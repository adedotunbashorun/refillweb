<template>
    <CreateSubCategory :categories="categories" :page="page" />
</template>
<script>
export default {
    layout: 'admin',
    data(){
        return {
          errors: [],
          service_categories: [],
          page: "Create Service Category"
        }
    },
    components:{
        CreateSubCategory: () => import('~/components/Admin/ServiceCategory/add.vue')
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
