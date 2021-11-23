<template>
  <div class="numbers-covid-19" id="numbers-covid-19">
    <!-- <h2>Números Covid</h2> -->
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
          <thead>
            <tr>
              <th class=""></th>
              <th class="">Confirmados</th>
              <th class="">Recuperados</th>
              <th class="">Óbitos</th>
              <th class="">Activos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span>África</span></td>
              <td data-label="Confirmados">
                <number
                  :from="0"
                  :to="covid.cases.africa.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
              <td data-label="Recuperados">
                <number
                  :from="0"
                  :to="covid.recovered.africa.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
              <td data-label="Óbitos">
                <number
                  :from="0"
                  :to="covid.deaths.africa.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
              <td data-label="Activos">
                <number
                  :from="0"
                  :to="covid.active.africa.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
            </tr>
            <tr>
              <td><span>América do Norte</span></td>
              <td data-label="Confirmados">
                <number
                  :from="0"
                  :to="covid.cases.northAmerica.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
              <td data-label="Recuperados">
                <number
                  :from="0"
                  :to="covid.recovered.northAmerica.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
              <td data-label="Óbitos">
                <number
                  :from="0"
                  :to="covid.deaths.northAmerica.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
              <td data-label="Activos">
                <number
                  :from="0"
                  :to="covid.active.northAmerica.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
            </tr>
            <tr>
              <td><span>América do Sul</span></td>
              <td data-label="Confirmados">
                <number
                  :from="0"
                  :to="covid.cases.southAmerica.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
              <td data-label="Recuperados">
                <number
                  :from="0"
                  :to="covid.recovered.southAmerica.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
              <td data-label="Óbitos">
                <number
                  :from="0"
                  :to="covid.deaths.southAmerica.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
              <td data-label="Activos">
                <number
                  :from="0"
                  :to="covid.active.southAmerica.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
            </tr>
            <tr>
              <td><span>Ásia</span></td>
              <td data-label="Confirmados">
                <number
                  :from="0"
                  :to="covid.cases.asia.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
              <td data-label="Recuperados">
                <number
                  :from="0"
                  :to="covid.recovered.asia.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
              <td data-label="Óbitos">
                <number
                  :from="0"
                  :to="covid.deaths.asia.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
              <td data-label="Activos">
                <number
                  :from="0"
                  :to="covid.active.asia.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
            </tr>
            <tr>
              <td><span>Europa</span></td>
              <td data-label="Confirmados">
                <number
                  :from="0"
                  :to="covid.cases.europe.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
              <td data-label="Recuperados">
                <number
                  :from="0"
                  :to="covid.recovered.europe.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
              <td data-label="Óbitos">
                <number
                  :from="0"
                  :to="covid.deaths.europe.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
              <td data-label="Activos">
                <number
                  :from="0"
                  :to="covid.active.europe.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
            </tr>
            <tr>
              <td class="ocenia"><span>Oceania</span></td>
              <td data-label="Confirmados">
                <number
                  :from="0"
                  :to="covid.cases.oceania.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
              <td data-label="Recuperados">
                <number
                  :from="0"
                  :to="covid.recovered.oceania.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
              <td data-label="Óbitos">
                <number
                  :from="0"
                  :to="covid.deaths.oceania.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
              <td data-label="Activos">
                <number
                  :from="0"
                  :to="covid.active.oceania.total"
                  :format="formatNumber"
                  :duration="1"
                  easing="Elastic.easeOut"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../services/api";
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
      apiKeyIpdata: process.env.VUE_APP_IPDATA_API_KEY,
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
      api
        .get(
          `https://api.ipdata.co/?api-key=${this.apiKeyIpdata}`
        )
        .then((data) => {
          this.getDataCountryAPI(data.data.country_name);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getDataOfContinents() {
      api
        .get("https://disease.sh/v3/covid-19/continents")
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
      api
        .get("https://disease.sh/v3/covid-19/countries?sort")
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
      api
        .get(`https://disease.sh/v3/covid-19/countries/${country}`)
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
  margin: 20px 0;
  width: 100%;
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

table thead th {
  padding: 10px;
  background: var(--color-gray);
  color: var(--color-white);
}

table thead th:nth-child(1) {
  border-top-left-radius: 8px;
}

table thead th:nth-child(5) {
  border-top-right-radius: 8px;
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
  font-weight: bolder;
  border: 1px solid var(--color-gray);
}

table tbody tr td:nth-child(2) {
  color: var(--color-red);
}

table tbody tr td:nth-child(3) {
  color: var(--color-green);
}

table tbody tr td:nth-child(5) {
  color: var(--color-rose);
}

.tables {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

table tbody tr td:nth-child(1) {
  text-align: left;
  background-color: var(--color-gray);
  border-radius: initial;
  box-shadow: initial;
  color: var(--color-white);
  font-weight: bold;
}

@media screen and (max-width: 858px) {
  .numbers-covid-19 .numbers-covid {
    width: 100%;
    margin-bottom: 20px;
  }

  .numbers-covid-19 .container .countries .select {
    width: 90%;
    margin: 10px 0;
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
    font-weight: 600;
  }

  table thead {
    display: none;
    font-weight: 500;
  }

  table tbody tr {
    border: 1px solid var(--color-gray);
    border-radius: 5px;
    display: block;
    padding: 30px;
    margin-bottom: 30px;
  }

  table tbody tr td {
    display: block;
    font-weight: 550;
    padding: 5px;
    position: relative;
    text-align: right;
    color: var(--color-gray);
  }

  table tbody tr td:nth-child(1) {
    text-align: center;
    padding: 9px 25px;
    background-color: var(--color-gray);
    color: var(--color-white);
    border: none;
    border-radius: 10px;
    margin-top: -45px;
    margin-bottom: 20px;
  }

  table tbody tr td:before {
    color: #2c3e50;
    content: attr(data-label);
    font-weight: 600;
    left: 5px;
    position: absolute;
  }

  table tbody tr td:nth-child(2),
  table tbody tr td:nth-child(3),
  table tbody tr td:nth-child(4) {
    border-bottom: 0px;
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