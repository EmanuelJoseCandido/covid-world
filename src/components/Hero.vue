<template>
  <div class="hero">
    <div class="content">
      <div class="text">
        <h1>Use a sua mascara e salve o mundo</h1>

        <p>
          A doença COVID-19 é uma doença infecciosa causada por um novo
          coronavírus que provoca doenças respiratórias.
        </p>
      </div>

      <div class="emergency">
        <a href="#emergencia" class="emergency">Ligar para emergência</a>
      </div>
    </div>
    <div class="svg">
      <img src="../assets/gif/person-cold.gif" alt="pessoa-doente" />
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style>
.hero {
  width: 100%;
  height: 100%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero .content,
.hero .svg {
  width: 50%;
  padding: 0 150px;
}

.hero .content .text h1 {
  font-size: 28pt;
}

.hero .content .text p {
  text-align: justify;
}

.hero .content .emergency {
  margin-top: 40px;
}

.hero .content .emergency a {
  width: 100px;
  padding: 8px 20px;
  background: var(--color-red);
  color: var(--color-white);
  border: 1px solid var(--color-red);
  text-decoration: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 650ms ease-in-out;
}

.hero .content .emergency a:hover {
  background: var(--color-white);
  color: var(--color-red);
}
</style>