<template>
    <div id="wrapper">
      <Header :user="user" :settings="settings" :notifications="notifications" />
        <SideBar/>
        <div class="main">
          <div class="main-content">
            <div class="container-fluid">
                <nuxt />
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
        <Footer :settings="settings"/>
    </div>
</template>
<script>
import {config} from '../config'
import axios from 'axios'
export default {
  middleware: 'auth',
  props: ['page'],
    head () {
        return {
            bodyAttrs: {
                class: ''
            },
            link: [
                { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
                { rel: 'stylesheet',href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700'},
                { rel: 'stylesheet', href: '/assets/vendor/bootstrap/css/bootstrap.min.css' },
                { rel: 'stylesheet', href: '/assets/vendor/font-awesome/css/font-awesome.min.css' },
                { rel: 'stylesheet',href: '/assets/vendor/linearicons/style.css'},
                { rel: 'stylesheet',href: 'https://fonts.googleapis.com/css?family=Overpass|Raleway'},
                {rel: ' stylesheet', href: '/assets/vendor/toastr/toastr.min.css'},
                { rel: 'stylesheet',href: '/assets/css/main.css'},
                { rel: 'stylesheet', href: '/assets/css/demo.css'}
            ],
            script: [
                { src: '/assets/vendor/jquery/jquery.min.js' },
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' },
                { src: '/assets/vendor/bootstrap/js/bootstrap.min.js'},
                { src: '/assets/vendor/jquery-slimscroll/jquery.slimscroll.min.js' },
                { src: '/assets/scripts/klorofil-common.js' },
                { src: '/assets/vendor/toastr/toastr.min.js'},
                { src: "https://js.pusher.com/4.1/pusher.min.js"}
            ]
        }
    },
    data(){
        return {
          notifications: []
            // user: {}
        }
    },
    components: {
        Header: () => import('~/components/Layout/Admin/Header.vue'),
        Footer: () => import('~/components/Layout/Admin/Footer.vue'),
        SideBar: () => import('~/components/Layout/Admin/SideBar.vue')
    },
    computed:{
        user(){
            return this.$store.getters.authUser
        },
        settings(){
          return this.$store.getters.allSettings
        }
    },
    mounted(){
      if(this.user.user_type !== 'admin'){
        this.$router.push('/login')
      }
      this.listenPusher()
      this.allNotifications()
    },
    methods:{
      listenPusher(){
        var pusher = new Pusher('334bfb1fc2ed027d88e7', { cluster: 'eu', forceTLS: true });

        // retrieve the socket ID once we're connected
        pusher.connection.bind('connected', function () {
            // attach the socket ID to all outgoing Axios requests
            axios.defaults.headers.common['X-Socket-Id'] = pusher.connection.socket_id;
        });

        // request permission to display notifications, if we don't alreay have it
        Notification.requestPermission();
        pusher.subscribe('notifications')
        .bind('users', function ({user, message}) {
            // if we're on the home page, show an "Updated" badge
            var notification = new Notification(user.first_name + " "+ user.last_name,{
                body: message.msg, // content for the alert
                icon: '/images/refill_logo.png'
            });
            notification.onclick = function (event) {
                window.location.href = 'admin/users/' + user._id;
                event.preventDefault();
                notification.close();
            }
            this.allNotifications()
        })
        .bind('orders', function ({order, message}) {
            // if we're on the home page, show an "Updated" badge
            var notification = new Notification('new order',{
                body: message.msg, // content for the alert
                icon: '/images/refill_logo.png'
            });
            notification.onclick = function (event) {
                window.location.href = '/order/' + order._id;
                event.preventDefault();
                notification.close();
            }
            this.allNotifications()
        })
        .bind('settings', function ({user, message}) {
            // if we're on the home page, show an "Updated" badge
            var notification = new Notification(settings.data.app_name ,{
                body: message.msg, // content for the alert
                icon: '/images/refill_logo.png'
            });
            notification.onclick = function (event) {
                window.location.href = 'admin/users/' + user._id;
                event.preventDefault();
                notification.close();
            }
            this.allSettings()
        });
      },

      allSettings(){
          this.$store.dispatch('allSettings', this.$store.state.auth.headers)
            .then((resp) => {
            }).catch(err =>{
            })
      },
      allNotifications(){
        this.$store.dispatch('allNotifications', this.$store.state.auth.headers)
          .then((resp) => {
            this.notifications = resp.data.notifications
          }).catch(err =>{
          })
      },
    }
}
</script>
