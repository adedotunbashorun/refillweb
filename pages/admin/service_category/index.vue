<template>
  <SubCategory :service_categories="service_categories" :page="page" />
</template>
<script>
export default {
  layout: "admin",
  data() {
    return {
      errors: [],
      service_categories: [],
      page: "Service Categories"
    };
  },
  components: {
    SubCategory: () => import("~/components/Admin/ServiceCategory/index.vue")
  },
  mounted() {
    this.allSubCategories();
  },
  methods: {
    allSubCategories() {
      this.$store
        .dispatch("allSubCategories", this.$store.state.auth.headers)
        .then(resp => {
          this.service_categories = resp.data.subcategories;
        })
        .catch(err => console.log());
    }
  }
};
</script>
