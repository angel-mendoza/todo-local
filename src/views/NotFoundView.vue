<template>
  <div class="page-not-fount">
    <div class="card">
      <div class="card-body text-center">
        <h3 class="card-title">404</h3>
        <p class="card-text">An error occurred, please try again later..</p>
        <router-link class="btn btn-primary" to="/">Go Back</router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .page-not-fount{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card{
    width: 20rem;
  }
</style>