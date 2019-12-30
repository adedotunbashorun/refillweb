<template>
    <QuestionView :categories="categories" :page="page" />
</template>
<script>
import QuestionView from '~/components/Admin/ServiceCategory/view.vue'
export default {
    layout: 'admin',
    data(){
        return {
          page: "Edit / View Service Category"
        }
    },
    components:{
        QuestionView
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
