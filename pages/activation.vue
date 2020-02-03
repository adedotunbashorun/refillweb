<template>
    <Activation />
</template>

<script>

export default {
  middleware: 'guest',
  layout: 'site',
  data(){
      return {

      }
  },
  methods: {
  },
  components:{
    Activation: () => import('@/components/FrontEnd/Activation.vue')
  }
}
</script>
