<template>
  <footer id="decretos">
    <div class="logo">
      <a href="#" v-scroll-to="'#inicio'">
        <img src="../assets/logos/covid-19.png" alt="logo-covid" />
      </a>
    </div>
    <div class="info">
      <div class="container emergency">
        <h3>Contactos telefónicos</h3>
        <ul>
          <li>
            <a href="tel:+111">111 (Emergência)</a>
          </li>
          <li>
            <a href="tel:+244937503349">937 503 349 (SOS Coronavírus)</a>
          </li>
        </ul>
      </div>

      <div class="container emergency">
        <h3>Links úteis</h3>
        <ul>
          <li>
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
              target="_blank"
              rel="noopener noreferrer"
            >
              Organização Mundial da Saúde
            </a>
          </li>
          <li>
            <a
              href="https://www.covid19.gov.ao/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Comissão Interministerial de Angola
            </a>
          </li>
          <li>
            <a
              href="https://disease.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Disease Data API
            </a>
          </li>
        </ul>
      </div>

      <div class="container pdf">
        <h3>Medidas e recomendações covid-19</h3>
        <ul>
          <li>
            <a
              href="documentos/comunicado-covid-alerta-geral-versao-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Comunicado covid-19 alerta geral"
              >Comunicado covid-19 (Alerta geral)</a
            >
          </li>
          <li>
            <a
              href="documentos/recomendacoes-para-quarentena-domiciliar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Recomendações para quarentena domiciliar"
              >Recomendações para quarentena domiciliar</a
            >
          </li>
        </ul>
      </div>

      <div class="container pdf">
        <h3>Decretos</h3>
        <ul>
          <li>
            <a
              href="documentos/decreto-legislativo-presidencial-provisorio-n-1-20-de-18-de-marco.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Decreto Legislativo Presidencial Provisório n.º 1/20 de 18 de Março"
              >Decreto Legislativo Presidencial Provisório</a
            >
          </li>
          <li>
            <a
              href="documentos/decreto-legislativo-presidencial-provisorio-n-1-20-de-18-de-marco-versao-dr.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="Decreto Legislativo Presidencial Provisório n.º 1/20 de 18 de Março(Versão DR)"
              >Decreto Legislativo Presidencial Provisório (V.DR)</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="author">
      Desenvolvido por:
      <button @click="showModalAuthor">Emanuel Cândido.</button>
    </div>
  </footer>
</template>
<script>
import ModalAuthor from "./ModalAuthor.vue";
export default {
  name: "Footer",

  methods: {
    showModalAuthor() {
      this.$vfm.show({
        component: ModalAuthor,
      });
    },
  },
};
</script>
<style scoped>
footer {
  width: 100%;
  background: var(--color-small-gray);
  color: var(--color-gray);
  display: flex;
  flex-direction: column;
  padding-top: 70px;
}

footer .titulo {
  color: var(--color-red);
}

footer .logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
}

footer .logo img {
  height: 10rem;
}

footer .info {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 80px;
}

footer .info .container {
  margin: 0px 20px;
}

footer .info h3 {
  text-transform: uppercase;
  color: var(--color-red);
}

footer .info .container ul {
  list-style: none;
  padding: 0;
}

footer .info .container a {
  display: block;
  padding: 8px 0;
  color: var(--color-gray);
  text-decoration: none;
  transition: all 650ms ease-in-out;
}

footer .info .container a:hover {
  color: var(--color-red);
}

footer .author {
  background: var(--color-gray);
  color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 5px;
  flex-wrap: wrap;
  padding: 10px 30px;
}

footer .author button {
  background: transparent;
  color: var(--color-white);
  border: none;
  text-decoration: none;
  font-weight: bold;
  font-style: italic;
  cursor: pointer;
  transition: all 650ms ease-in-out;
}

footer .author button:hover {
  color: var(--color-small-gray);
}

@media screen and (max-width: 858px) {
  footer .logo {
    display: flex;
    text-align: center;
    justify-content: center;
  }

  footer .logo img {
    width: 25%;
    height: 25%;
  }

  footer .info {
    padding: 0 5px;
  }

  footer .info h3 {
    font-size: 12pt;
  }
}

@media screen and (max-width: 1497px) {
  footer .info {
    display: flex;
    text-align: center;
    justify-content: center;
  }
}
</style>