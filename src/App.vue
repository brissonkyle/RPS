<template>
  <div id="app">
    <v-app>
      <v-main>
        <nav>|
          <router-link to="/LoginView.vue">Login</router-link> |
          <router-link to='/@/views/GameView.vue'>Game Page</router-link> |
        </nav>
      <router-view/>
    </v-main>
  </v-app>
  </div>
</template>

<style lang="scss">
#app {
  background-color: rgb(244, 90, 8);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #27ea92;

    &.router-link-exact-active {
      color: #27ea92;
    }
  }
}
</style>
