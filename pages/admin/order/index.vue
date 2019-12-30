<template>
  <Order :orders="orders" :page="page" />
</template>
<script>
export default {
  layout: "admin",
  data() {
    return {
      page: "Orders"
    };
  },
  components: {
    Order: () => import("@/components/Admin/Order/index.vue")
  },
  mounted() {
    this.allOrders();
  },
  computed: {
    orders() {
      return this.$store.state.orders.orders;
    }
  },
  methods: {
    allOrders() {
      this.$store
        .dispatch("allOrders", this.$store.state.auth.headers)
        .then(resp => {})
        .catch(err => console.log());
    }
  }
};
</script>
