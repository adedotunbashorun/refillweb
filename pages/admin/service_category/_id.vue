<template>
    <SubCategoryView :categories="categories" :page="page" />
</template>
<script>
export default {
    layout: 'admin',
    data(){
        return {
          page: "Edit / View Service Category"
        }
    },
    components:{
        SubCategoryView : () => import('~/components/Admin/ServiceCategory/view.vue')
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
