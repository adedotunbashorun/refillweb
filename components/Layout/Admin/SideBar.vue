<template>
    <div id="sidebar-nav" class="sidebar">
			<div class="sidebar-scroll">
				<nav>
	          <ul class="nav">
					    <li><nuxt-link to="/admin/dashboard" class=""><i class="lnr lnr-home"></i> <span>Dashboard</span></nuxt-link></li>

              <li><nuxt-link to="/admin/users" class=""><i class="fa fa-users"></i> <span>Users</span></nuxt-link></li>

							<li><nuxt-link to="/admin/company" class=""><i class="lnr lnr-code"></i> <span>Companies</span></nuxt-link></li>

							<li><nuxt-link to="/admin/payments" class=""><i class="fa fa-money"></i> <span>Payments</span></nuxt-link></li>

              <li><nuxt-link to="/admin/order" class=""><i class="lnr lnr-chart-bars"></i> <span>Orders</span></nuxt-link></li>

              <!-- <li><nuxt-link to="/admin/supports" class=""><i class="fa fa-support"></i> <span>Support</span></nuxt-link></li> -->

              <li><nuxt-link to="/admin/contacts" class=""><i class="fa fa-address-book"></i> <span>Contacts</span></nuxt-link></li>

              <li><nuxt-link to="/admin/messages" class=""><i class="fa fa-envelope"></i> <span>Messages</span></nuxt-link></li>

              <li><nuxt-link to="/admin/settings" class=""><i class="fa fa-cogs"></i> <span>Settings</span></nuxt-link></li>

							<li><a @click="logoutUser"><i class="lnr lnr-exit"></i> <span>Logout</span></a></li>
	          </ul>
        </nav>
			</div>
		</div>
</template>
<script>
const Cookie = process.client ? require('js-cookie') : undefined
export default {
    methods:{
        logoutUser() {
          let component = this;
          this.$store.dispatch('logout',this.$store.state.auth.headers)
          .then(() => {
            Cookie.remove('jwtToken')
            Cookie.remove('user')
            this.$router.go('/login')
          })
          .catch(err => {
            Cookie.remove('jwtToken')
            Cookie.remove('user')
            this.$router.go('/login')
          })
      },
    }
}
</script>
