<template>
    <Contact :contacts="contacts" :page="page"/>
</template>
<script>
export default {
    layout: 'admin',
    data(){
      return{
        page: 'Contacts',
      }
    },
    components:{
        Contact: () => import('~/components/Admin/Contact/index.vue')
    },
    mounted(){
        this.allContacts()
    },
    computed:{
        contacts(){
            return this.$store.state.contacts.contacts
        }
    },
    methods:{
        allContacts(){
            this.$store.dispatch('allContact', this.$store.state.auth.headers)
            .then((resp) => {
            }).catch(err => console.log())
        }
    }
}
</script>
