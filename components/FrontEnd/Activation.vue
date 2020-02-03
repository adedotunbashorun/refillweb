<template>
  <div>
    <section id="hero" class="wow fadeIn">
      <div class="hero-container">
        <h1>Welcome to Refill</h1>
        <h2>Order for gas at your convenience &amp; more...</h2>
        <div
            class="alert alert-danger alert-dismissible"
            role="alert"
            v-if="error"
          >
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <i class="fa fa-times-circle"></i> {{ error }}
          </div>
          <div
            class="alert alert-success alert-dismissible"
            role="alert"
            v-if="success"
          >
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <i class="fa fa-check-circle"></i> {{ success }}
          </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { config } from "../../config";
export default {
  props: [],
  data() {
    return {
      success: null,
      error: null
    }
  },
  mounted() {
    this.activate();
  },
  methods: {
    async activate() {
      try {
        let resp = await axios.patch(`${config.apiUrl}/api/activate/${this.$route.query.slug}`);
        if(resp.data.error) {
          this.error = resp.data.msg;
        }else {
          this.success = resp.data.msg;
        }
      } catch (error) {
        this.error = error.msg;
      }
    }
  }
}
</script>

<style>

</style>
