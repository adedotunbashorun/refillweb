<template>
  <Login />
</template>
<script>
  export default {
    layout: 'login',
    components:{
      Login: () => import('@/components/FrontEnd/Login.vue')
    }
  }
</script>
