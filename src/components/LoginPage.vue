<template>
  <v-container>
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
      hint="At least 8 characters"
      value=""
      @click:append="show4 = !show4"
    ></v-text-field>
    <v-btn color="primary">
      Login
    </v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'LoginPage',
  }
</script>

<style lang="scss" scoped>
  h1{
    text-align: center;
  }
</style>
