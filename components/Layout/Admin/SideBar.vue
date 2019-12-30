<template>
    <!-- <aside class="main-sidebar col-12 col-md-3 col-lg-2 px-0 bg-serveme">
        <div class="main-navbar">
        <nav class="navbar align-items-stretch navbar-light bg-serveme flex-md-nowrap border-bottom p-0">
            <a class="navbar-brand w-100 mr-0" href="#" style="line-height: 25px;">
            <div class="d-table m-auto">
                <img id="main-logo" class="d-inline-block align-top mr-1" style="max-width: 25px; max-height: 25px;" src="/images/servme-logo-dark.png" alt="Shards Dashboard">
                <span class="d-none d-md-inline ml-1 text-white">ServeMe</span>
            </div>
            </a>
            <a class="toggle-sidebar d-sm-inline d-md-none d-lg-none">
            <i class="material-icons">&#xE5C4;</i>
            </a>
        </nav>
        </div>
        <form action="#" class="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
        <div class="input-group input-group-seamless ml-3">
            <div class="input-group-prepend">
            <div class="input-group-text">
                <i class="fas fa-search"></i>
            </div>
            </div>
            <input class="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search"> </div>
        </form>
        <div class="nav-wrapper">
        <ul class="nav flex-column">
            <li class="nav-item">
            <nuxt-link class="nav-link" to="/admin/dashboard">
                <i class="material-icons">home</i>
                <span><strong>Dashboard</strong></span>
            </nuxt-link>
            </li>
            <li class="nav-item">
            <nuxt-link class="nav-link" to="/admin/users">
                <i class="material-icons">person</i>
                <span><strong>Users</strong></span>
            </nuxt-link>
            </li>
            <li class="nav-item">
            <nuxt-link class="nav-link " to="/admin/service">
                <i class="material-icons">vertical_split</i>
                <span><strong>Service</strong></span>
            </nuxt-link>
            </li>
            <li class="nav-item">
            <nuxt-link class="nav-link " to="/admin/service_category">
                <i class="material-icons">view_module</i>
                <span><strong>Service Category</strong></span>
            </nuxt-link>
            </li>
            <li class="nav-item">
            <a class="nav-link" style="cursor:pointer;" @click="logoutUser">
                <i class="material-icons">logout</i>
                <span><strong>Logout</strong></span>
            </a>
            </li>
        </ul>
        </div>
    </aside> -->
    <div id="sidebar-nav" class="sidebar">
			<div class="sidebar-scroll">
				<nav>
	          <ul class="nav">
					    <li><nuxt-link to="/admin/dashboard" class=""><i class="lnr lnr-home"></i> <span>Dashboard</span></nuxt-link></li>

              <li><nuxt-link to="/admin/class" class=""><i class="fa fa-list"></i> <span>Classes</span></nuxt-link></li>

              <li><nuxt-link to="/admin/users" class=""><i class="fa fa-users"></i> <span>Users</span></nuxt-link></li>

							<li><nuxt-link to="/admin/service" class=""><i class="lnr lnr-code"></i> <span>Service</span></nuxt-link></li>

							<li><nuxt-link to="/admin/service_category" class=""><i class="lnr lnr-chart-bars"></i> <span>Service Category</span></nuxt-link></li>

              <li><nuxt-link to="/admin/supports" class=""><i class="fa fa-support"></i> <span>Support</span></nuxt-link></li>

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
