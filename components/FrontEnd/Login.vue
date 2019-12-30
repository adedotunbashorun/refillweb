<template>
  <div class="limiter">
		<div class="container-login100">

			<div class="wrap-login100" id="login">
				<form class="login100-form validate-form" @submit.prevent="checkForm">
					<!-- <span class="login100-form-title p-b-43"> -->
						<center><img src="images/refill_icon.png" style="height:100px;width:100px;text-align:center;" /></center>
					<!-- </span> -->
          <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li class="text text-danger" v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
          </p>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" v-model="user.email" name="email">
						<span class="focus-input100"></span>
						<span class="label-input100">Email</span>
					</div>


					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<input class="input100" type="password" v-model="user.password" name="pass">
						<span class="focus-input100"></span>
						<span class="label-input100">Password</span>
					</div>

					<div class="flex-sb-m w-full p-t-3 p-b-32">
						<div class="contact100-form-checkbox">
							<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
							<label class="label-checkbox100" for="ckb1">
								Remember me
							</label>
						</div>

						<div>
							<a href="#" class="txt1" id="show_forgetpassword">
								Forgot Password?
							</a>
						</div>
					</div>
					<div class="container-login100-form-btn">
						<button type="submit" class="login100-form-btn">
							Login
						</button>
					</div>
				</form>

				<div class="login100-more" style="background-image: url('images/bg_img.png');">
				</div>
			</div>
      <div class="wrap-login100" id="forget_password">
				<form class="login100-form validate-form" @submit.prevent="forgetPassword()">
					<span class="login100-form-title p-b-43">
						Forget Password
					</span>
          <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li class="text text-danger" v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
          </p>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" v-model="login.email" name="email">
						<span class="focus-input100"></span>
						<span class="label-input100">Email</span>
					</div>

          <div>
            <a href="#" class="txt1" id="show_login">
              <h6><i class="fa fa-arrow-left"></i> Back</h6><br/>
            </a>
          </div>
					<div class="container-login100-form-btn">
						<button type="submit" class="login100-form-btn">
							Forget Password
						</button>
					</div>
				</form>

				<div class="login100-more" style="background-image: url('images/bg_img.png');">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  const Cookie = process.client ? require('js-cookie') : undefined
  export default {
    data(){
        return {
          errors: [],
          user: {
            email:'',
            password:''
          },
          login:{
            email:''
          }
        }
    },
    mounted(){
      $("#forget_password").hide();
      $('#show_login').on('click', function(){
        $("#login").show()
        $("#forget_password").hide();
      })
      $('#show_forgetpassword').on('click', function(){
        $("#login").hide()
        $("#forget_password").show();
      })
    },
    methods: {
        loginUser(){
            let component = this;
            this.$store.dispatch('login', component.user)
            .then((resp) => {
              if(resp.data.error || resp.data.name){
                component.errors.push(resp.data.message || 'error connecting to database')
              }else{
                this.$store.commit('LOGIN_SUCCESS', [resp.data.token, resp.data.user])
                Cookie.set('jwtToken', resp.data.token)
                Cookie.set('user', resp.data.user)
                this.$router.go('/admin/dashboard')
              }
            })
            .catch(err =>  {
              component.errors.push(err)
              console.log(err)
            })
        },
        checkForm: function (e) {
          if (this.user.email && this.user.password) {
            this.loginUser();
            return true;
          }

          this.errors = [];
          if (!this.user.email) {
            this.errors.push('Email required.');
            return false;
          }else if (!this.validEmail(this.user.email)) {
            this.errors.push('Valid email required.');
            return false;
          }
          if (!this.user.password) {
            this.errors.push('Password required.');
            return false;
          }
          e.preventDefault();

        },
        validEmail: function (email) {
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
        },
        forgetPassword(){
            if (!this.validEmail(this.login.email)) {
              this.errors.push('Valid email required.');
              return false;
            }
            let component = this;
            this.$store.dispatch('forgetPassword', component.login)
            .then((user) => $("#forgetPassword .close").click() )
            .catch(err => console.log(err))
        },
    }
  }
</script>
