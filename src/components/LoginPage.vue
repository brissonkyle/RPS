<template>
  <v-container>
    <v-alert v-if="completedLogin" type="success">
      Login successful
    </v-alert>
    <h1>Welcome to RPS</h1>
    <v-text-field
      label="Email"
      placeholder="Enter Email Here"
      outlined
      dense
    ></v-text-field>
    <v-text-field
      append-icon=""
      :rules="[]"
      name="PasswordBox"
      label="Password"
      @click:append="show4 = !show4"
    ></v-text-field>
    <div class="text-center">
    <v-btn
        @click="login"
        rounded
        color="primary"
        dark
        >Login
    </v-btn>
  </div>
  </v-container>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

  export default {
    name: 'LoginPage',
    data : () => {
      return {
        username: undefined,
        password : undefined,
      }
    },
    methods: {
      login() {
        axios.request({
          method: "POST",
          url: "https://reqres.in/api/login",
          headers : {
            'Content-Type' : 'application/json'
          },
          data : {
            "email": this.username,
            "password": this.password
          }
        }).then((response)=>{
          this.completedLogin = true;
          cookies.set('loginToken', response.data.token);
        }).catch((error) => {
          console.log(error);
        })
      },
        logout(){
      cookies.remove('loginToken');
    },
  },
}
</script>

<style lang="scss" scoped>
  h1{
    color: mediumspringgreen;
    text-align: center;
  }
</style>
