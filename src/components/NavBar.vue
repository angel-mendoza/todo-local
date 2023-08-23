<template>
  <nav class="navbar fixed-top" data-bs-theme="dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/logo.png" alt="Logo" height="40" class="d-inline-block align-text-top">
      </router-link >
      <div class="navbar-right">
        <h3 class="m-0 hide-movil">
          Smart <span class="text-primary">Contracts</span> Suites
        </h3>
        <button class="btn btn-outline-primary" type="button">
          <font-awesome-icon  icon="fa-solid fa-bars" />
        </button>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.navbar-right{
  display: flex;
  gap: 1rem;
  align-items: center;
}
</style>