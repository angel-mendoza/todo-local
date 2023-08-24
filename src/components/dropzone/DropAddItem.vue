<template>
  <div class="card">
    <div class="card-body">
      <div class="item-bars">
        <font-awesome-icon  icon="fa-solid fa-plus" />
      </div>
      <div class="item-title text-primary">
        <p>
          Añadir más documentos
        </p>
      </div>
      <div class="item-info text-primary">
        <span>5 máx</span>
        <span>20 mb</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card{
  margin-bottom: 10px;
  background-color: transparent;
  border: 1px solid var(--bs-white);
  cursor: pointer;
}
.card-body{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 16px;
}

.item-bars{
  padding-right: 16px;
  border-right: 1px solid var(--bs-white);
}
.item-info{
  padding-left: 16px;
  border-left: 1px solid var(--bs-white);
  display: flex;
  flex-direction: column;
  font-size: 12px;
}
.item-info img{
  width: 1.1rem;
}

.item-title{
  color: var(--bs-gray-600);
  padding: 0 10px;
}
@media (max-width: 767px) {
  .card-body{
    flex-direction: column;
  }
  .item-info{
    border: none;
    flex-direction: row;
    gap: 10px;
    padding-left: 0;
  }
  .item-bars {
    display: none;
  }
  .item-title p{
    margin: 0;
    font-size: 12px;
  }
}
</style>