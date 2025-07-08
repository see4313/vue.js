<template>
  <nav>
    <!--보여줘야할 url-->
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/data">Data link</router-link>
  </nav>
  <!--보여줘야할 url 위치-->
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
