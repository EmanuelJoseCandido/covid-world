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
          <a
            href="#emergencia"
            class="emergency"
            @click="openModal('emergência')"
          >
            <v-icon
              name="phone-alt"
              class="icon"
              title="Ligar para emergência"
            />
            <span class="text">
              <span class="hidden"> Ligar para </span>
              <span class="uppercase"> e</span>mergência
            </span>
          </a>
        </div>
      </div>
      <div class="svg">
        <img src="../assets/gif/person-cold.gif" alt="pessoa-doente" />
      </div>
    </div>

    <div class="numbers-covid">
      <div class="item cases">
        <div class="numbers">
          <p>
            <number
              :from="0"
              :to="covid.cases.total"
              :format="formatNumber"
              :duration="5"
              :delay="2"
              easing="Elastic.easeOut"
            />
          </p>
          <small v-if="covid.cases.new != 0"
            >+<number
              :from="0"
              :to="covid.cases.new"
              :format="formatNumber"
              :duration="5"
              :delay="2"
              easing="Elastic.easeOut"
          /></small>
        </div>
        <div class="text">
          <h2>Confirmados</h2>
        </div>
      </div>
      <div class="item recovered">
        <div class="numbers">
          <p>
            <number
              :from="0"
              :to="covid.recovered.total"
              :format="formatNumber"
              :duration="5"
              :delay="2"
              easing="Elastic.easeOut"
            />
          </p>
          <small v-if="covid.recovered.new != 0"
            >+<number
              :from="0"
              :to="covid.recovered.new"
              :format="formatNumber"
              :duration="5"
              :delay="2"
              easing="Elastic.easeOut"
          /></small>
        </div>
        <div class="text">
          <h2>Recuperados</h2>
        </div>
      </div>
      <div class="item deaths">
        <div class="numbers">
          <p>
            <number
              :from="0"
              :to="covid.deaths.total"
              :format="formatNumber"
              :duration="5"
              :delay="2"
              easing="Elastic.easeOut"
            />
          </p>
          <small v-if="covid.deaths.new != 0"
            >+<number
              :from="0"
              :to="covid.deaths.new"
              :format="formatNumber"
              :duration="5"
              :delay="2"
              easing="Elastic.easeOut"
          /></small>
        </div>
        <div class="text">
          <h2>Óbitos</h2>
        </div>
      </div>
      <div class="item active">
        <div class="numbers">
          <p>
            <number
              :from="0"
              :to="covid.active.total"
              :format="formatNumber"
              :duration="5"
              :delay="2"
              easing="Elastic.easeOut"
            />
          </p>
          <small v-if="covid.active.new != 0"
            >+<number
              :from="0"
              :to="covid.active.new"
              :format="formatNumber"
              :duration="5"
              :delay="2"
              easing="Elastic.easeOut"
          /></small>
        </div>
        <div class="text">
          <h2>Activos</h2>
        </div>
      </div>
    </div>

    <div class="more-information">
      <a href="#data" class="data" @click="openModal('ver mais dados')">
        <v-icon name="plus" class="icon" title="Ver mais dados" />
        <span class="text"> Ver mais dados </span>
      </a>
    </div>
  </div>
</template>
<script>
import http from "../services/http";
import ModalBuildPage from "./ModalBuildPage.vue";

export default {
  name: "Hero",

  created() {
    http
      .get("https://corona.lmao.ninja/v2/all")
      .then((data) => {
        let covid = data.data;

        this.covid.cases.new = covid.todayCases;
        this.covid.cases.total = covid.cases;

        this.covid.recovered.new = covid.todayRecovered;
        this.covid.recovered.total = covid.recovered;

        this.covid.deaths.new = covid.todayDeaths;
        this.covid.deaths.total = covid.deaths;

        this.covid.active.total = covid.active;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  },

  data() {
    return {
      showModal: false,
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

  methods: {
    formatNumber(number) {
      return Number(number).toLocaleString("pt-br");
    },

    openModal(page) {
      this.$modal.show(ModalBuildPage, { page: page });
    },
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
  justify-content: space-around;
}

.hero .container .content,
.hero .container .svg {
  width: 50%;
}

.hero .container .content {
  padding-left: 100px;
}

.hero .container .svg {
  padding-right: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
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

.hero .container .content .emergency a,
.hero .more-information .data {
  width: 100px;
  padding: 8px 20px;
  background: var(--color-red);
  color: var(--color-white);
  border: 1px solid var(--color-red);
  text-decoration: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0.5rem 0.5rem 2rem 0 rgba(8, 15, 41, 0.08),
    0 0 1px 0 rgba(8, 15, 41, 0.08);
  transition: all 650ms ease-in-out;
}

.hero .container .content .emergency a:hover,
.hero .more-information .data:hover {
  background: var(--color-white);
  color: var(--color-red);
}

.hero .more-information .icon {
  display: none;
}

.hero .numbers-covid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 60%;
  border-radius: 10px;
  font-style: italic;
  box-shadow: 0.5rem 0.5rem 2rem 0 rgba(8, 15, 41, 0.08),
    0 0 1px 0 rgba(8, 15, 41, 0.08);
}

.hero .numbers-covid div.item {
  text-align: center;
  padding: 10px;
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
  margin-top: 10px;
}

.hero .numbers-covid div.item .text {
  margin-top: -20px;
}

.hero .numbers-covid div.item .text h2 {
  font-size: 12pt;
  font-weight: lighter;
  margin-top: -10px;
}

.hero .numbers-covid .cases p,
.hero .numbers-covid .cases small {
  color: var(--color-red);
}

.hero .numbers-covid .recovered p,
.hero .numbers-covid .recovered small {
  color: var(--color-green);
}

.hero .numbers-covid .active p,
.hero .numbers-covid .active small {
  color: var(--color-rose);
}

.hero .more-information {
  margin-top: 25px;
}

@media screen and (max-width: 1116px) {
  .hero .container {
    margin: 50px 0px;
  }

  .hero .container .svg img {
    width: 80%;
  }

  .hero .container .content .text h1 {
    font-size: 18pt;
  }
}

@media screen and (max-width: 858px) {
  .hero .container {
    margin: 20px 0px;
    padding: 10px 0px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .hero .container .content {
    padding-left: 0px;
    padding: 10px 50px;
    width: 100%;
  }

  .hero .container .content .text p {
    text-align: center;
  }

  .hero .container .svg {
    display: none;
  }

  .hero .numbers-covid {
    width: 90%;
  }

  .hero .more-information {
    margin: 40px 0;
  }

  .hidden {
    display: none;
  }

  .uppercase {
    text-transform: uppercase;
  }
}

@media screen and (max-width: 300px) {
  .hero .container,
  .hero .container .content {
    padding: 10px;
  }

  .hero .container .content .text h1 {
    font-size: 14pt;
  }

  .hero .numbers-covid div.item .numbers p {
    font-size: 15pt;
    font-weight: bolder;
  }

  .hero .numbers-covid div.item .numbers small {
    font-size: 12pt;
    margin-top: 0px;
  }
}

@media screen and (max-width: 200px) {
  .hero .container .content .emergency .text,
  .hero .more-information .text {
    display: none;
  }

  .hero .more-information .icon {
    display: initial;
  }
}
</style>