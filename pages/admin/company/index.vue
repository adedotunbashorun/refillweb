<template>
    <Company :companies="companies" :page="page"/>
</template>
<script>
export default {
    layout: 'admin',
    data(){
      return{
        page: 'Companies List'
      }
    },
    components:{
        Company : () => import('~/components/Admin/Company/index.vue')
    },
    mounted(){
        this.getCompanies()
    },
    computed:{
        companies(){
            return this.$store.state.company.companies
        }
    },
    methods:{
        getCompanies(){
            this.$store.dispatch('allCompanies', this.$store.state.auth.headers)
            .then((resp) => {
            }).catch(err => console.log())
        }
    }
}
</script>
