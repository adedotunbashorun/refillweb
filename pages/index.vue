<template>
    <Index />
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
    Index: () => import('@/components/FrontEnd/Index.vue')
  }
}
</script>
