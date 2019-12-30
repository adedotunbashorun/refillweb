<template>
    <Users :users="users" :page="page"/>
</template>
<script>
import Users from '~/components/Admin/User/index.vue'
export default {
    layout: 'admin',
    data(){
      return{
        page: 'Users List'
      }
    },
    components:{
        Users
    },
    mounted(){
        this.getUsers()
    },
    computed:{
        users(){
            return this.$store.state.auth.users
        }
    },
    methods:{
        getUsers(){
            this.$store.dispatch('allUsers', this.$store.state.auth.headers)
            .then((resp) => {
            }).catch(err => console.log())
        }
    }
}
</script>
