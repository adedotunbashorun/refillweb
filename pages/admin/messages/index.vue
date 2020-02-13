<template>
    <Messages :page="page" :messages="messages"/>
</template>
<script>
export default {
    layout: 'admin',
    data(){
      return{
        page: 'Message List'
      }
    },
    components:{
        Messages: () => import('~/components/Admin/Message/index.vue')
    },
    mounted(){
        this.getMessages()
    },
    computed:{
        messages(){
            return this.$store.getters.allMessages
        },
    },
    methods:{
        getMessages(){
            this.$store.dispatch('allMessages', this.$store.state.auth.headers)
            .then((resp) => {
            }).catch(err => console.log())
        }
    }
}
</script>
