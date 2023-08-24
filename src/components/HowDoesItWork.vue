<template>
  <div class="card h-100">
    <div class="card-body how-does-it-work">
      <h2 class="text-primary">¿Cómo funciona?</h2>
      <div class="banner">
        <img src="@/assets/image/banner.png" alt="How-does-it-work">
        <p class="hide-movil">Este es un servicio gratuito de <span class="fw-bold text-primary">todolegal</span></p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-body.how-does-it-work {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: space-around;
}
.card-body.how-does-it-work h2{
  font-size: 2.3rem;
  font-weight: 700;
}

.card-body.how-does-it-work .banner{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
.card-body.how-does-it-work .banner img{
  width: 100%;
}

@media (max-width: 767px) {
  .card-body.how-does-it-work {
    flex-direction: row-reverse;
    justify-content: space-around;
    gap: 1rem;
  }
  .card-body.how-does-it-work .banner img{
    width: 10rem;
  }
  .card-body.how-does-it-work h2{
    font-size: 1.7rem;
  }
}
</style>