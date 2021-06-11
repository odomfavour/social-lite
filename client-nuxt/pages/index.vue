<template>
  <div id="hero">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <nuxt-link class="btn btn-danger" to="/login">Login</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="btn btn-outline-success" to="/register">Register</nuxt-link>
      </li>
    </ul>
  </div>
      </div>
  
</nav>
<div class="container text-white">
  <div class="row">
    <div class="col-md-6">
      <h1 class="hero-title">Spend Quality Time with Friends and Family</h1>
    </div>
    <div class="col-md-6"></div>
  </div>
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #hero {
    background: linear-gradient(45deg, rgb(0 0 0 / 90%), rgb(0 0 0 / 36%)),url(/dev.jpg) no-repeat;
    background-size: cover;
    height: 100vh;
  }

  .navbar {
    height: 70px;
  }

  .nav-item {
    margin-right: 20px;
  }
  .hero-title {
    margin-top: 300px;
    font-size: 50px;
  }
</style>