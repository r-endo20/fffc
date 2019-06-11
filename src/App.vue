<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">のくたーんのでーた</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>v0.2.1</b-nav-item>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/battle">Battle</b-nav-item>
          <b-nav-item href="/gatherer">Gatherer</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/about">About</b-nav-item>
          <b-nav-item href="/history">History</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view/>
  </div>
</template>




<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
