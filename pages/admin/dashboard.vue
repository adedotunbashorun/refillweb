<template>
    <Dashboard :user="user" :result="result" :page="page"/>
</template>
<script>
export default {
    layout: 'admin',
    components:{
        Dashboard: () => import('@/components/Admin/dashboard.vue'),
    },
    data(){
      return{
        page: 'Dashboard'
      }
    },
    mounted(){
      this.getCount()
    },
    computed:{
        user(){
            return this.$store.getters.authUser
        },
        result(){
          return this.$store.state.settings.data
        }
    },
    methods:{
        getCount(){
            this.$store.dispatch('allCounts', this.$store.state.auth.headers)
            .then((resp) => {
            }).catch(err => console.log())
        }
    }
}
</script>
