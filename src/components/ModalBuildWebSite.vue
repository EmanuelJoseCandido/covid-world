<template>
  <div class="modal-build">
    <div class="logo">
      <a href="#">
        <img src="../assets/logos/covid-19.png" alt="logo-covid" />
      </a>
    </div>
    <div class="text">
      <h1>Site em construção</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModalBuildWebSite",
};
</script>

<style scoped>
.modal-build {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.modal-build .logo img {
  margin-top: 20px;
  width: 200px;
}

.modal-build .text h1 {
    margin-top: -5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: italic;
  color: var(--color-gray);
}
</style>