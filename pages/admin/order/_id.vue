<template>
  <OrderView :page="page" />
</template>
<script>
export default {
  layout: "admin",
  data() {
    return {
      page: "View /Edit Order"
    };
  },
  components: {
    OrderView: () => import("@/components/Admin/Order/view.vue")
  }
};
</script>
