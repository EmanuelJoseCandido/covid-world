<template>
  <div class="numbers-covid-19">
    <h2>Números covid</h2>
    <div class="container">
      <div class="countries">
        <div class="select">
          <multiselect
            v-model="api.selectedCountry"
            :options="api.countries"
            :loading="api.isLoadingCountry"
            :custom-label="customLabelCountry"
            placeholder="Selecione um país"
            :show-labels="false"
            class="multiselect"
          >
            <span slot="noOptions">Sem resultados.</span>
          </multiselect>
        </div>

        <div class="numbers-covid">
          <div class="item cases">
            <div class="numbers">
              <p>
                <number
                  :from="0"
                  :to="covid.cases.country.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </p>
              <small v-if="covid.cases.country.new != 0"
                >+<number
                  :from="0"
                  :to="covid.cases.country.new"
                  :format="formatNumber"
                  :duration="1"
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
                  :to="covid.recovered.country.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </p>
              <small v-if="covid.recovered.country.new != 0"
                >+<number
                  :from="0"
                  :to="covid.recovered.country.new"
                  :format="formatNumber"
                  :duration="1"
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
                  :to="covid.deaths.country.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </p>
              <small v-if="covid.deaths.country.new != 0"
                >+<number
                  :from="0"
                  :to="covid.deaths.country.new"
                  :format="formatNumber"
                  :duration="1"
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
                  :to="covid.active.country.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </p>
              <small v-if="covid.active.country.new != 0"
                >+<number
                  :from="0"
                  :to="covid.active.country.new"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
              /></small>
            </div>
            <div class="text">
              <h2>Activos</h2>
            </div>
          </div>
        </div>
      </div>

      <div class="tables">
        <table>
          <caption>
            Estado do Covid-19 nos Continentes
          </caption>
          <thead>
            <tr>
              <th class=""></th>
              <th class="">
                <span class="pc">Confirmados</span>
              </th>
              <th class="">Recup<span class="pc">erados</span></th>
              <th class="">Óbitos</th>
              <th class="">Ativos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>África</span></td>
              <td data-label="Casos">{{ covid.cases.africa.total }}</td>
              <td data-label="Recup.">{{ covid.recovered.africa.total }}</td>
              <td data-label="Óbitos">{{ covid.deaths.africa.total }}</td>
              <td data-label="Ativos">{{ covid.active.africa.total }}</td>
            </tr>
            <tr>
              <td><span>América do Norte</span></td>
              <td data-label="Casos">{{ covid.cases.northAmerica.total }}</td>
              <td data-label="Recup.">
                {{ covid.recovered.northAmerica.total }}
              </td>
              <td data-label="Óbitos">{{ covid.deaths.northAmerica.total }}</td>
              <td data-label="Ativos">{{ covid.active.northAmerica.total }}</td>
            </tr>
            <tr>
              <td><span>América do Sul</span></td>
              <td data-label="Casos">{{ covid.cases.southAmerica.total }}</td>
              <td data-label="Recup.">
                {{ covid.recovered.southAmerica.total }}
              </td>
              <td data-label="Óbitos">{{ covid.deaths.southAmerica.total }}</td>
              <td data-label="Ativos">{{ covid.active.southAmerica.total }}</td>
            </tr>
            <tr>
              <td><span>Ásia</span></td>
              <td data-label="Casos">{{ covid.cases.asia.total }}</td>
              <td data-label="Recup.">{{ covid.recovered.asia.total }}</td>
              <td data-label="Óbitos">{{ covid.deaths.asia.total }}</td>
              <td data-label="Ativos">{{ covid.active.asia.total }}</td>
            </tr>
            <tr>
              <td><span>Europa</span></td>
              <td data-label="Casos">{{ covid.cases.europe.total }}</td>
              <td data-label="Recup.">{{ covid.recovered.europe.total }}</td>
              <td data-label="Óbitos">{{ covid.deaths.europe.total }}</td>
              <td data-label="Ativos">{{ covid.active.europe.total }}</td>
            </tr>
            <tr>
              <td class="ocenia"><span>Oceania</span></td>
              <td data-label="Casos">{{ covid.cases.oceania.total }}</td>
              <td data-label="Recup.">{{ covid.recovered.oceania.total }}</td>
              <td data-label="Óbitos">{{ covid.deaths.oceania.total }}</td>
              <td data-label="Ativos">{{ covid.active.oceania.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import http from "../services/http";
import https from "../services/https";
import Multiselect from "vue-multiselect";
export default {
  name: "NumbersCovid",

  created() {
    this.getDataAllCountries();
    this.getDataOfContinents();
  },

  components: { Multiselect },

  data() {
    return {
      covid: {
        cases: {
          africa: {
            new: 0,
            total: 0,
          },
          southAmerica: {
            new: 0,
            total: 0,
          },
          northAmerica: {
            new: 0,
            total: 0,
          },
          asia: {
            new: 0,
            total: 0,
          },
          europe: {
            new: 0,
            total: 0,
          },
          oceania: {
            new: 0,
            total: 0,
          },
          country: {
            new: 0,
            total: 0,
          },
        },
        recovered: {
          africa: {
            new: 0,
            total: 0,
          },
          southAmerica: {
            new: 0,
            total: 0,
          },
          northAmerica: {
            new: 0,
            total: 0,
          },
          asia: {
            new: 0,
            total: 0,
          },
          europe: {
            new: 0,
            total: 0,
          },
          oceania: {
            new: 0,
            total: 0,
          },
          country: {
            new: 0,
            total: 0,
          },
        },
        deaths: {
          africa: {
            new: 0,
            total: 0,
          },
          southAmerica: {
            new: 0,
            total: 0,
          },
          northAmerica: {
            new: 0,
            total: 0,
          },
          asia: {
            new: 0,
            total: 0,
          },
          europe: {
            new: 0,
            total: 0,
          },
          oceania: {
            new: 0,
            total: 0,
          },
          country: {
            new: 0,
            total: 0,
          },
        },
        active: {
          africa: {
            new: 0,
            total: 0,
          },
          southAmerica: {
            new: 0,
            total: 0,
          },
          northAmerica: {
            new: 0,
            total: 0,
          },
          asia: {
            new: 0,
            total: 0,
          },
          europe: {
            new: 0,
            total: 0,
          },
          oceania: {
            new: 0,
            total: 0,
          },
          country: {
            new: 0,
            total: 0,
          },
        },
      },
      api: {
        country: null,
        countries: [],
        selectedCountry: null,
        isLoadingCountry: false,
      },
    };
  },

  watch: {
    "api.selectedCountry"(country) {
      if (country != null && country != "") {
        this.getDataCountry(country.country);
      }
    },
  },

  methods: {
    formatNumber(number) {
      return Number(number).toLocaleString("pt-br");
    },

    getCodeISO() {
      https
        .get(
          "https://api.ipdata.co/?api-key=68202fe14f4c400b719bad0626e5e74a476af993e8b0b808619e3f32"
        )
        .then((data) => {
          this.getDataCountryAPI(data.data.country_name);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getDataOfContinents() {
      https
        .get("https://corona.lmao.ninja/v2/continents")
        .then((data) => {
          let continents = data.data;

          this.getDataAfrica(
            this.getFilterDataOfContinent(continents, "Africa")
          );

          this.getDataNorthAmerica(
            this.getFilterDataOfContinent(continents, "North America")
          );

          this.getDataSouthAmerica(
            this.getFilterDataOfContinent(continents, "South America")
          );

          this.getDataAsia(this.getFilterDataOfContinent(continents, "Asia"));

          this.getDataEurope(
            this.getFilterDataOfContinent(continents, "Europe")
          );

          this.getDataOceania(
            this.getFilterDataOfContinent(continents, "Australia-Oceania")
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getFilterDataOfContinent(data, continent) {
      return data.find((continents) => {
        return continents.continent == continent;
      });
    },

    getDataAfrica(africa) {
      this.covid.cases.africa.new = africa.todayCases;
      this.covid.cases.africa.total = africa.cases;

      this.covid.recovered.africa.new = africa.todayRecovered;
      this.covid.recovered.africa.total = africa.recovered;

      this.covid.deaths.africa.new = africa.todayDeaths;
      this.covid.deaths.africa.total = africa.deaths;

      this.covid.active.africa.total = africa.active;
    },

    getDataNorthAmerica(northAmerica) {
      this.covid.cases.northAmerica.new = northAmerica.todayCases;
      this.covid.cases.northAmerica.total = northAmerica.cases;

      this.covid.recovered.northAmerica.new = northAmerica.todayRecovered;
      this.covid.recovered.northAmerica.total = northAmerica.recovered;

      this.covid.deaths.northAmerica.new = northAmerica.todayDeaths;
      this.covid.deaths.northAmerica.total = northAmerica.deaths;

      this.covid.active.northAmerica.total = northAmerica.active;
    },

    getDataSouthAmerica(southAmerica) {
      this.covid.cases.southAmerica.new = southAmerica.todayCases;
      this.covid.cases.southAmerica.total = southAmerica.cases;

      this.covid.recovered.southAmerica.new = southAmerica.todayRecovered;
      this.covid.recovered.southAmerica.total = southAmerica.recovered;

      this.covid.deaths.southAmerica.new = southAmerica.todayDeaths;
      this.covid.deaths.southAmerica.total = southAmerica.deaths;

      this.covid.active.southAmerica.total = southAmerica.active;
    },

    getDataAsia(asia) {
      this.covid.cases.asia.new = asia.todayCases;
      this.covid.cases.asia.total = asia.cases;

      this.covid.recovered.asia.new = asia.todayRecovered;
      this.covid.recovered.asia.total = asia.recovered;

      this.covid.deaths.asia.new = asia.todayDeaths;
      this.covid.deaths.asia.total = asia.deaths;

      this.covid.active.asia.total = asia.active;
    },

    getDataEurope(europe) {
      this.covid.cases.europe.new = europe.todayCases;
      this.covid.cases.europe.total = europe.cases;

      this.covid.recovered.europe.new = europe.todayRecovered;
      this.covid.recovered.europe.total = europe.recovered;

      this.covid.deaths.europe.new = europe.todayDeaths;
      this.covid.deaths.europe.total = europe.deaths;

      this.covid.active.europe.total = europe.active;
    },

    getDataOceania(oceania) {
      this.covid.cases.oceania.new = oceania.todayCases;
      this.covid.cases.oceania.total = oceania.cases;

      this.covid.recovered.oceania.new = oceania.todayRecovered;
      this.covid.recovered.oceania.total = oceania.recovered;

      this.covid.deaths.oceania.new = oceania.todayDeaths;
      this.covid.deaths.oceania.total = oceania.deaths;

      this.covid.active.oceania.total = oceania.active;
    },

    getDataAllCountries() {
      this.api.isLoadingCountry = true;
      http
        .get("https://corona.lmao.ninja/v2/countries?sort")
        .then((data) => {
          this.api.countries.push({ country: "Todos" });

          data.data.forEach((element) => {
            this.api.countries.push(element);
          });

          this.getCodeISO();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.api.isLoadingCountry = false;
        });
    },

    getDataCountry(country) {
      this.api.country = this.api.countries.find((country_api) => {
        return country_api.country == country;
      });

      this.covid.cases.country.new = this.api.country.todayCases;
      this.covid.cases.country.total = this.api.country.cases;

      this.covid.recovered.country.new = this.api.country.todayRecovered;
      this.covid.recovered.country.total = this.api.country.recovered;

      this.covid.deaths.country.new = this.api.country.todayDeaths;
      this.covid.deaths.country.total = this.api.country.deaths;

      this.covid.active.country.total = this.api.country.active;
    },

    getDataCountryAPI(country) {
      http
        .get(
          `https://corona.lmao.ninja/v2/countries/${country}?strict=true&query`
        )
        .then((data) => {
          this.api.selectedCountry = data.data;
          this.api.country = this.api.selectedCountry;
          this.covid.cases.country.new = this.api.country.todayCases;
          this.covid.cases.country.total = this.api.country.cases;

          this.covid.recovered.country.new = this.api.country.todayRecovered;
          this.covid.recovered.country.total = this.api.country.recovered;

          this.covid.deaths.country.new = this.api.country.todayDeaths;
          this.covid.deaths.country.total = this.api.country.deaths;

          this.covid.active.country.total = this.api.country.active;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    customLabelCountry({ country }) {
      return country;
    },
  },
};
</script>

<style>
.numbers-covid-19 {
  width: 100%;
  font-style: italic;
}

.numbers-covid-19 .container {
  padding: 0 25px 25px 25px;
}

.numbers-covid-19 .container .countries {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 0;
}

.numbers-covid-19 .container .countries .select {
  width: 300px;
  margin: 10px 0;
}

.numbers-covid-19 .numbers-covid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 50%;
  border-radius: 10px;
  font-style: italic;
  box-shadow: 0.5rem 0.5rem 2rem 0 rgba(8, 15, 41, 0.08),
    0 0 1px 0 rgba(8, 15, 41, 0.08);
}

.numbers-covid-19 .numbers-covid div.item {
  text-align: center;
  padding: 10px;
}

.numbers-covid-19 .numbers-covid div.item .numbers {
  display: flex;
  text-align: center;
  justify-content: center;
}

.numbers-covid-19 .numbers-covid div.item .numbers p {
  font-size: 20pt;
  font-weight: bolder;
}

.numbers-covid-19 .numbers-covid div.item .numbers small {
  font-size: 12pt;
  font-weight: lighter;
  position: absolute;
  margin-top: 10px;
}

.numbers-covid-19 .numbers-covid div.item .text {
  margin-top: -20px;
}

.numbers-covid-19 .numbers-covid div.item .text h2 {
  font-size: 12pt;
  font-weight: lighter;
  margin-top: -10px;
}

.numbers-covid-19 .numbers-covid .cases p,
.numbers-covid-19 .numbers-covid .cases small {
  color: var(--color-red);
}

.numbers-covid-19 .numbers-covid .recovered p,
.numbers-covid-19 .numbers-covid .recovered small {
  color: var(--color-green);
}

.numbers-covid-19 .numbers-covid .active p,
.numbers-covid-19 .numbers-covid .active small {
  color: var(--color-rose);
}

table {
  border-collapse: collapse;
  max-width: 992px;
  text-align: left;
  width: 100%;
}

table caption {
  font-size: 20pt;
  margin-bottom: 0px;
}

table thead {
  display: table-header-group;
}

td {
  border: 1px solid var(--color-small-gray);
}

table thead th:nth-child(5) {
  border-radius: 0px 8px 0px 0px;
}

table thead th:nth-child(1) {
  border-radius: 8px 0px 0px 0px;
}

table thead th {
  padding: 10px;
  background: var(--color-small-gray);
  color: #e84c3d;
}

table tbody {
  font-size: 0.875em;
}

table tbody tr {
  border: none;
  display: table-row;
}

table tbody tr td {
  display: table-cell;
  font-weight: 400;
  padding: 10px;
  text-align: left;
}

.tables {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

table tbody tr td:nth-child(1) {
  text-align: left;
  background-color: var(--color-small-gray);
  border-radius: initial;
  box-shadow: initial;
  color: #e84c3d;
  font-weight: bold;
}

table tbody tr td:before {
  display: none;
}

@media screen and (max-width: 858px) {
  .numbers-covid-19 .numbers-covid {
    width: 90%;
  }

  #numbers .info-covid .tables {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  table {
    font-weight: 400;
    width: 100%;
    font-size: 15pt;
  }

  table caption {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 13pt;
    color: #e84c3d;
  }

  table thead {
    display: none;
    font-weight: 500;
  }

  table tbody tr {
    border: 2px solid var(--color-small-gray);
    border-radius: 5px;
    display: block;
    padding: 30px;
    margin-bottom: 30px;
  }

  table tbody tr td {
    display: block;
    font-weight: 500;
    padding: 5px;
    position: relative;
    text-align: right;
    color: var(--color-gray);
  }

  table tbody tr td:nth-child(1) {
    text-align: center;
    padding: 9px 25px;
    background-color: var(--color-small-gray);
    color: #e84c3d;
    border: none;
    border-radius: 50px;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
    margin-top: -45px;
    margin-bottom: 20px;
  }

  table tbody tr td:before {
    color: #e1e3e4;
    content: attr(data-label);
    font-weight: 400;
    left: 5px;
    position: absolute;
  }
  /* Numbers */
}

@media screen and (max-width: 300px) {
  .numbers-covid-19 .numbers-covid div.item .numbers p {
    font-size: 15pt;
    font-weight: bolder;
  }

  .numbers-covid-19 .numbers-covid div.item .numbers small {
    font-size: 12pt;
    margin-top: 0px;
  }
}
</style>