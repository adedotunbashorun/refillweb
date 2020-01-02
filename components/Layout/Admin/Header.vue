<template>
    <nav class="navbar navbar-default navbar-fixed-top">
			<div class="brand">
				<nuxt-link to="/admin/dashboard"><img src="/images/refill_logo.png" style="width:50px;height:30px;" alt="ServeMe Logo" class="img-responsive logo"></nuxt-link>
			</div>
			<div class="container-fluid">
				<div class="navbar-btn">
					<button type="button" class="btn-toggle-fullwidth"><i class="lnr lnr-arrow-left-circle"></i></button>
				</div>

				<div id="navbar-menu">
					<ul class="nav navbar-nav navbar-right">
						<li class="dropdown" v-if="notifications">
							<a href="#" class="dropdown-toggle icon-menu" data-toggle="dropdown">
								<i class="lnr lnr-alarm"></i>
								<span class="badge bg-danger">{{ notifications.length }}</span>
							</a>
							<ul class="dropdown-menu notifications">
								<li v-for="(notification,index) in notifications" :key="index"><a href="#" class="notification-item" @click="markAsRead(notification._id)"><span class="dot bg-warning"></span>{{ notification.data.message.msg }}</a></li>
								<li><a href="#" class="more">See all notifications</a></li>
							</ul>
						</li>
						<li class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown"><img :src="apiUrl+'/'+user.profile_image" class="img-circle" alt="Avatar"> <span>{{user.first_name + ' ' + user.last_name}}</span> <i class="icon-submenu lnr lnr-chevron-down"></i></a>
							<ul class="dropdown-menu">
								<li><nuxt-link :to="{name: 'admin-users-profile'}"><i class="lnr lnr-user"></i> <span>My Profile</span></nuxt-link></li>
								<li><nuxt-link :to="{name: 'admin-supports'}"><i class="lnr lnr-envelope"></i> <span>Message</span></nuxt-link></li>
								<li><nuxt-link :to="{name: 'admin-settings'}"><i class="lnr lnr-cog"></i> <span>Settings</span></nuxt-link></li>
								<li><a href="#" @click="logoutUser"><i class="lnr lnr-exit"></i> <span>Logout</span></a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
</template>
<script>
const Cookie = process.client ? require('js-cookie') : undefined
import {config} from '../../../config'
export default {
    props: ['user',"settings","notifications"],
    data(){
      return{
        id : '',
        apiUrl:'',
      }
    },
    mounted(){
      this.apiUrl = config.apiUrl
      this.id = this.$store.getters.authUser._id
    },
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

      markAsRead(id){
        this.$store.dispatch('markAsRead', [id,this.$store.state.auth.headers])
          .then((resp) => {
            toastr.success(resp.data.msg)
            const index = this.notifications.findIndex(notification => notification._id === id)
            this.notifications.splice(index, 1)
          }).catch(err =>{
          })
      }
    }
}
</script>
