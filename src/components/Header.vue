<template>
  <header>
    <div class="logo">
      <a href="#">
        <img src="../assets/logos/covid-19.png" alt="logo-covid" />
      </a>
    </div>

    <nav>
      <div class="menu-icons open">
        <i class="fa fa-bars"></i>
      </div>

      <div class="container-nav">
        <ul class="links">
          <li><a href="#inicio" @click="openModal('inicio')">Início</a></li>
          <li>
            <a href="#decretos" @click="openModal('decreto')">Decretos</a>
          </li>
          <li>
            <a href="#comissao" @click="openModal('c.multissectorial')"
              >Comissão Multissectorial</a
            >
          </li>
          <li>
            <a
              href="#emergencia"
              class="emergency"
              @click="openModal('emergência')"
              ><v-icon
                name="phone-alt"
                class="icon"
                title="Ligar para emergência"
              />
              Emergência</a
            >
          </li>
        </ul>
        <div class="footer-nav" id="inicio">
          <p>Copyright &copy; {{ anoActual }}</p>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import ModalBuildPage from "./ModalBuildPage.vue";
export default {
  name: "Header",
  data() {
    return {
      anoActual: new Date().getFullYear(),
    };
  },

  methods: {
    openModal(page) {
      this.$modal.show(ModalBuildPage, { page: page });
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--color-white);
  width: 100%;
  position: fixed;
  z-index: 1;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  height: 4rem;
}

.logo img {
  height: 3rem;
}

.menu-icons {
  cursor: pointer;
  padding: 5px 12px 5px 12px;
  font-size: 20pt;
  border-radius: 7px;
}

.menu-icons.open {
  margin-right: 10px;
  background: var(--cor-amarela);
  color: var(--cor-roxa);
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
}

header .links {
  width: 15rem;
  height: 90vh;
  background: var(--color-white);
  position: fixed;
  top: 48px;
  left: -22rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  z-index: 1;
  margin-left: -100px;
  transition: all 650ms ease-in-out;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
}

.links.open {
  left: 3.5rem;
}

header .links li a {
  color: var(--color-gray);
  text-decoration: none;
  transition: all 0.5s ease-in-out;
}

header .links li a:hover {
  color: var(--color-red);
}

header .links li {
  list-style: none;
  margin: 30px;
}

header .links .social li {
  margin: 0px;
}

header .links .emergency {
  padding: 6px 20px;
  color: var(--color-red);
  border: 1px solid var(--color-red);
  border-radius: 10px;
  cursor: pointer;
  transition: all 650ms ease-in-out;
}

header .links .emergency:hover {
  background: var(--color-red);
  color: var(--color-white);
}

header .footer-nav {
  margin-left: -40px;
}

header .footer-nav p {
  margin-left: 40px;
}

@media screen and (min-width: 858px) {
  header .links {
    width: initial;
    height: initial;
    position: initial;
    top: initial;
    right: initial;
    display: flex;
    flex-direction: row;
    transition: initial;
    background: transparent;
    margin-top: 10px;
    box-shadow: none;
  }

  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  header .menu-icons.open {
    display: none;
  }

  header .links .menu {
    display: flex;
    flex-wrap: nowrap;
  }

  header .links li {
    display: inline-block;
    padding: 18px 15px;
  }

  header .links li {
    list-style: none;
    margin: initial;
  }

  header .footer-nav {
    display: none;
  }
}
</style>