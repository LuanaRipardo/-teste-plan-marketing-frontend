<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Inicio</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: black;
}

.navbar-brand {
  margin-left: 15px;
}

.navbar-nav .nav-link {
  margin-left: 15px;
}
</style>

<script>
export default {
  name: 'AppNavbar',
};
</script>
