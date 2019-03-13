<template>
  <div id="overall">
    <div class="info">
      <b-container>
        <br>
        <div style="padding: 0 50px">
          <div class="icon-container">
            <font-awesome-icon
              style="color: white; margin: 5px; transform: rotate(320deg)"
              icon="key"
              size="1x"
            />
          </div>
          <div style="margin-top: 30px">
            <b class="open-sans" style="font-size: 18px">Hi there!</b>
            <br>
            <br>
            <b style="font-size: 14px" class="montserrat">Sign in to institutional Ranking</b>
            <br>
            <br>
            <br>
            <b
              style="font-size: 14px; color: #03913F"
              class="montserrat"
            >> Learn more aout the ranking methodology</b>
          </div>
        </div>
      </b-container>
    </div>
    <div class="login-form">
      <b-container>
        <div style="padding: 0 50px">
          <b-form @submit.prevent="login">
            <br>
            <br>
            <b class="montserrat" style="font-size: 14px; color: #000;">Email Address</b>
            <b-form-input v-model="user.email" type="email" required placeholder="Email"/>
            <br>
            <b-row>
              <b-col sm="5">
                <b class="montserrat" style="font-size: 14px; color: #000;">Password</b>
              </b-col>
              <b-col sm="7">
                <b class="montserrat" style="font-size: 14px; color: #03913F;">Forgot your password?</b>
              </b-col>
            </b-row>
            <b-form-input v-model="user.password" type="password" required placeholder="Password"/>
            <br>
            <b-button type="submit" @click="login" class="signup">Sign in</b-button>
            <br>
            <b></b>
            <br>
            <br>
            <br>
          </b-form>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import { url } from '@/config.js'

export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login: function () {
      this.$http.post(url + 'login', this.user).then((response) => {
        const authUser = {}
        authUser.token = response.data.token.token
        authUser.refreshToken = response.data.token.refreshToken
        window.localStorage.setItem('authUser', JSON.stringify(authUser))
        this.$router.push('/institution');
      });
    }
  }
}
</script>

<style>
#overall {
  width: 100%;
  height: 100%;
  padding: 0px;
}
.icon-container {
  width: 50px;
  height: 50px;
  padding: 10px;
  background: #03913f;
  border-radius: 7px;
  transform: rotate(45deg);
}
.info {
  width: 100%;
  height: auto;
}
.login-form {
  background: #f5f6f7;
  width: 100%;
  max-height: 100%;
  margin-top: 40px;
}
.open-sans {
  font-family: "Open Sans", sans-serif;
  color: #262626;
}
.montserrat {
  font-family: Montserrat, sans-serif;
  color: #59626a;
}
.signup {
  width: 100%;
  background: #03913f !important;
  border-radius: 6px !important;
}
.form-control {
  margin-top: 5px;
  border-radius: 6px !important;
}
</style>
