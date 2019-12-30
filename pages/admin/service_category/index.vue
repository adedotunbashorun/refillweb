<template>
    <Question :service_categories="service_categories" :page="page"/>
</template>
<script>
import Question from '~/components/Admin/ServiceCategory/index.vue'
export default {
    layout: 'admin',
    data(){
        return {
            errors: [],
            service_categories: [],
            page: "Service Categories"
        }
    },
    components:{
        Question
    },
    mounted(){
        this.allQuestions()
    },
    methods:{
        allQuestions(){
            this.$store.dispatch('allQuestions', this.$store.state.auth.headers)
            .then((resp) => { this.service_categories = resp.data.subcategories
            }).catch(err => console.log())
        }
    }
}
</script>
