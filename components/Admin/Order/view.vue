<template>
  <div>
    <h3 class="page-title">
      {{ page
      }}<nuxt-link
        to="/admin/order"
        class="pull pull-right btn btn-outline-primary"
        ><i class="fa fa-arrow-left"></i> Go Back</nuxt-link
      >
    </h3>
    <div class="row">
      <div class="col-md-12">
        <!-- PANEL HEADLINE -->
        <div class="panel panel-headline">
          <div class="panel-heading">
            <h3 class="panel-title">View Order</h3>
            <hr />
            <div v-if="data" class="row">
              <!--REVIEW ORDER-->
              <div class="col-md-4 col-lg-4 col-sm-12">
                <div class="panel panel-default">
                  <div class="panel-heading text-center">
                    <h4>Client Details</h4>
                  </div>
                  <div class="panel-body">
                    <strong>Name</strong>
                    <div class="pull-right">
                      <span>{{
                        data.client_id.first_name +
                          " " +
                          data.client_id.last_name
                      }}</span>
                    </div>
                    <hr />
                    <strong>Phone</strong>
                    <div class="pull-right">
                      <span>{{ data.client_id.phone }}</span>
                    </div>
                    <hr />
                    <strong>Email</strong>
                    <div class="pull-right">
                      <span>{{ data.client_id.email }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-lg-4 col-sm-12">
                <div class="panel panel-default">
                  <div class="panel-heading text-center">
                    <h4>Order Details</h4>
                  </div>
                  <div class="panel-body">
                    <strong>Payment Type</strong>
                    <div class="pull-right">
                      <span class="label label-info" v-if="parseInt(data.payment_option) === 1">Paid Online</span>
                      <span class="label label-info" v-else-if="parseInt(data.payment_option) === 2">Cash On Delivery</span>
                      <span class="label label-info" v-else-if="parseInt(data.payment_option) === 3">Pos On Delivery</span>
                    </div>
                    <hr />
                    <strong>Delivery Option</strong>
                    <div class="pull-right">
                      <span class="label label-info" v-if="parseInt(data.delivery_option) === 1">Express Delivery</span>
                      <span class="label label-info" v-else-if="parseInt(data.delivery_option) === 2">Custom Delivery</span>
                    </div>
                    <hr />
                    <strong>Cylinder size</strong>
                    <div class="pull-right">
                      <span>{{ data.cylinder_size }}</span>
                    </div>
                    <hr />
                    <strong>Kg </strong>
                    <div class="pull-right">
                      <span>{{ data.kg }}</span>
                    </div>
                    <hr />
                    <strong>Total Amount</strong>
                    <div class="pull-right">
                      <span>₦{{ data.total_amount }}</span>
                    </div>
                    <hr />
                    <strong>Delivery Address</strong>
                    <div class="pull-right">
                      <span>{{ data.client_landmark }}</span>
                    </div>
                    <br/>
                    <hr />
                    <strong>Status</strong>
                    <div class="pull-right">
                      <span>
                      <label class="label label-success" v-if="data.status === 'completed'">
                          <i class="fa fa-check"></i> {{ data.status }}
                      </label>
                      <label class="label label-danger" v-else-if="data.status === 'failed'">
                          <i class="fa fa-times"></i> {{ data.status }}
                      </label>
                      <label class="label label-info" v-else>
                          <i class="fa fa-clock"></i> {{ data.status }}
                      </label>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-lg-4 col-sm-12">
                <div class="panel panel-default">
                  <div class="panel-heading text-center">
                    <h4>Company Details</h4>
                  </div>
                  <div class="panel-body">
                    <strong>Name</strong>
                    <div class="pull-right">
                      <span>{{ data.company_id.name }}</span>
                    </div>
                    <hr />
                    <strong>Phone</strong>
                    <div class="pull-right">
                      <span>{{ data.company_id.phone }}</span>
                    </div>
                    <hr />
                    <strong>Email</strong>
                    <div class="pull-right">
                      <span>{{ data.company_id.email }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--REVIEW ORDER END-->
          </div>
          <div class="panel-body"></div>
        </div>
        <!-- END PANEL HEADLINE -->
      </div>
    </div>
  </div>
</template>
<script>
import { config } from "../../../config";
import Adedotun from "../../Extra/adedotun";
export default {
  props: ["page"],
  data() {
    return {
      errors: [],
      data: null,
      success: "",
      error: "",
      apiUrl: ""
    };
  },
  mounted() {
    this.apiUrl = config.apiUrl;
    this.getOrder();
  },
  components: {
    Adedotun: () => import('~/components/Extra/adedotun.vue')
  },
  methods: {
    getOrder() {
      this.$store
        .dispatch("orderById", [
          this.$nuxt._route.params.id,
          this.$store.state.auth.headers
        ])
        .then(resp => {
          this.data = resp.data.order;
        })
        .catch(err => console.log());
    }
  }
};
</script>
