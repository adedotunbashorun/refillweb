<template>
    <Class :classes="classes" :page="page"/>
</template>
<script>
import Class from '~/components/Admin/Class/index.vue'
export default {
    layout: 'admin',
    data(){
      return{
        page: 'Classes'
      }
    },
    components:{
        Class
    },
    mounted(){
        this.allClasses()
    },
    computed:{
        classes(){
            return this.$store.state.classes.classes
        }
    },
    methods:{
        allClasses(){
            this.$store.dispatch('allClass', this.$store.state.auth.headers)
            .then((resp) => {
            }).catch(err => console.log())
        }
    }
}
</script>
