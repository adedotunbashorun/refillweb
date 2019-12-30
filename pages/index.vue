<template>
  <div class="container">

  </div>
</template>

<script>

export default {
  middleware: 'guest',
  layout: 'site',
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
  methods: {
      loginUser(){
          let component = this;
          this.$store.dispatch('login', component.user)
          .then((resp) => {
              const token = resp.data.token
              const user = resp.data.user
              this.$store.commit('LOGIN_SUCCESS', {token, user})
              Cookie.set('jwtToken', token)
              Cookie.set('user', user)
              this.$router.go('/admin/dashboard')
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
          let component = this;
          this.$store.dispatch('forgetPassword', component.login)
          .then((user) => $("#forgetPassword .close").click() )
          .catch(err => console.log(err))
      },
  }
}
</script>

<style>
.mx-auto {
   margin-top: 5em;
}
:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: .75rem;
}

body {
  background: #007bff;
  background: linear-gradient(to right, #0062E6, #33AEFF);
}

.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
}

.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: .1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input {
  height: auto;
  border-radius: 2rem;
}

.form-label-group>input,
.form-label-group>label {
  padding: var(--input-padding-y) var(--input-padding-x);
}

.form-label-group>label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown)~label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}

.btn-google {
  color: white;
  background-color: #ea4335;
}

.btn-facebook {
  color: white;
  background-color: #3b5998;
}
</style>
