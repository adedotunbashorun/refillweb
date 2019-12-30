<template>
    <Archieve :archieves="archieves"/>
</template>
<script>
import Archieve from '~/components/Admin/Archieve/index.vue'
export default {
    layout: 'admin',
    components:{
        Archieve
    },
    data(){
        return {
            errors: [],
            archieves: []
        }
    },
    mounted(){
        this.allArchieves()
    },
    methods:{
      allArchieves(){
            this.$store.dispatch('allArchieve', this.$store.state.auth.headers)
            .then((resp) => {
                this.archieves = resp.data.archieves
            }).catch(err => console.log())
        }
    }
}
</script>
