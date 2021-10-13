<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="https://placeholder.pics/svg/150x50/888888/EEE/Logo"
            alt="..."
            height="36"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" role="button"  :class="$route.path === '/users' ? 'active' : ''" @click="$router.push('/users')">Users</a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" role="button" :class="$route.path === '/posts' ? 'active' : ''" aria-current="page" @click="$router.push('/')">Posts</a>
            </li> -->
            <!-- <li class="nav-item">
              <a class="nav-link" role="button" :class="$route.path === '/comment' ? 'active' : ''" @click="$router.push('/comments')">Comments</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" role="button" :class="$route.path === '/albums' ? 'active' : ''" @click="$router.push('/albums')">Albums</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" role="button" :class="$route.path === '/photos' ? 'active' : ''" @click="$router.push('/photos')">Photos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" role="button" :class="$route.path === '/todos' ? 'active' : ''" @click="$router.push('/todos')">Todos</a>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  mounted () {
    this.$router.push('/users')
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
