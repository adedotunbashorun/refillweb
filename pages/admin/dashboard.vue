<template>
    <Dashboard :user="user" :result="result" :page="page"/>
</template>
<script>
import Dashboard from '~/components/Admin/dashboard.vue'
export default {
    layout: 'admin',
    components:{
        Dashboard
    },
    data(){
      return{
        result:{},
        page: 'Dashboard'
      }
    },
    mounted(){
      console.log(this.$store.state.auth.headers)
      this.getCount()
    },
    computed:{
        user(){
            return this.$store.getters.authUser
        }
    },
    methods:{
        getCount(){
            // this.$store.dispatch('allCounts', this.$store.state.auth.headers)
            // .then((resp) => {
            //   this.result = resp.data.result
            // }).catch(err => console.log())
        }
    }
}
</script>
