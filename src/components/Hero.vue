<template>
  <div class="hero">
    <div class="container">
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
    <div class="numbers-covid">
      <div class="item cases">
        <div class="numbers">
          <p>{{ covid.cases.total }}</p>
          <small v-if="covid.cases.new != 0">+{{ covid.cases.new }}</small>
        </div>
        <div class="text">
          <h2>Confirmados</h2>
        </div>
      </div>
      <div class="item recovered">
        <div class="numbers">
          <p>{{ covid.cases.total }}</p>
          <small v-if="covid.recovered.new != 0"
            >+{{ covid.recovered.new }}</small
          >
        </div>
        <div class="text">
          <h2>Recuperados</h2>
        </div>
      </div>
      <div class="item deaths">
        <div class="numbers">
          <p>{{ covid.cases.total }}</p>
          <small v-if="covid.deaths.new != 0">+{{ covid.deaths.new }}</small>
        </div>
        <div class="text">
          <h2>Óbitos</h2>
        </div>
      </div>
      <div class="item active">
        <div class="numbers">
          <p>{{ covid.cases.total }}</p>
          <small v-if="covid.active.new != 0">+{{ covid.active.new }}</small>
        </div>
        <div class="text">
          <h2>Activos</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Hero",

  data() {
    return {
      covid: {
        cases: {
          new: 0,
          total: 0,
        },
        recovered: {
          new: 0,
          total: 0,
        },
        deaths: {
          new: 0,
          total: 0,
        },
        active: {
          new: 0,
          total: 0,
        },
      },
    };
  },
};
</script>

<style>
.hero {
  width: 100%;
  height: 100%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.hero .container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero .container .content,
.hero .container .svg {
  width: 50%;
  padding: 0 150px;
}

.hero .container .content .text h1 {
  font-size: 28pt;
}

.hero .container .content .text p {
  text-align: justify;
}

.hero .container .content .emergency {
  margin-top: 40px;
}

.hero .container .content .emergency a {
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

.hero .container .content .emergency a:hover {
  background: var(--color-white);
  color: var(--color-red);
}

.hero .numbers-covid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 60%;
  border-radius: 10px;
  font-style: italic;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
}

.hero .numbers-covid div.item {
  text-align: center;
  margin-left: -45px;
}

.hero .numbers-covid div.item .numbers {
  display: flex;
  text-align: center;
  justify-content: center;
}

.hero .numbers-covid div.item .numbers p {
  font-size: 20pt;
  font-weight: bolder;
}

.hero .numbers-covid div.item .numbers small {
  font-size: 12pt;
  font-weight: lighter;
  position: absolute;
  margin: 20px 0 0 90px;
}

.hero .numbers-covid div.item .text {
  margin-top: -30px;
  margin-bottom: 30px;
}

.hero .numbers-covid div.item .text h2 {
  font-size: 12pt;
  font-weight: lighter;
}
</style>