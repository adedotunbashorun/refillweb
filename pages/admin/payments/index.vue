<template>
    <Payment :payments="payments" :page="page"/>
</template>
<script>
export default {
    layout: 'admin',
    data(){
      return{
        page: 'Payments List'
      }
    },
    components:{
        Payment : () => import('~/components/Admin/Payment/index.vue')
    },
    mounted(){
        this.getPayments()
    },
    computed:{
        payments(){
          return this.$store.state.payments.payments
        }
    },
    methods:{
        getPayments(){
            this.$store.dispatch('allPayments', this.$store.state.auth.headers)
            .then((resp) => {
            }).catch(err => console.log())
        }
    }
}
</script>
