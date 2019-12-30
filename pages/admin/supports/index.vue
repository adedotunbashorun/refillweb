<template>
    <Supports :page="page" :supports="supports"/>
</template>
<script>
import Supports from '~/components/Admin/Supports/index.vue'
export default {
    layout: 'admin',
    data(){
      return{
        page: 'Support List'
      }
    },
    components:{
        Supports
    },
    mounted(){
        this.getSupports()
    },
    computed:{
        supports(){
            return this.$store.getters.allSupports
        },
        user(){
          return this.$store.getters.authUser
        }
    },
    methods:{
        getSupports(){
            this.$store.dispatch('allSupports', [this.$store.getters.authUser.user_type, this.$store.getters.authUser._id,this.$store.state.auth.headers])
            .then((resp) => {
            }).catch(err => console.log())
        }
    }
}
</script>
