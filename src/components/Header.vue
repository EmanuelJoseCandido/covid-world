<template>
  <header>
    <div class="logo">
      <a href="#">
        <img src="../assets/logos/covid-19.png" alt="logo-covid" />
      </a>
    </div>

    <nav>
      <div class="menu-icons">
        <v-icon name="bars" class="icon open" />
      </div>

      <div class="container-nav">
        <ul class="links">
          <div class="menu-icons">
            <v-icon name="times" class="icon times" />
          </div>

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

  mounted() {
    const containerNav = document.querySelector(".container-nav");
    const openContainerNav = document.querySelector(".icon.open");
    const closeContainerNav = document.querySelector(".icon.times");

    openContainerNav.addEventListener("click", () => {
      containerNav.classList.toggle("open");
    });

    closeContainerNav.addEventListener("click", () => {
      containerNav.classList.remove("open");
    });

    document.body.addEventListener("click", (event) => {
      console.log(event.target.classList[0]);
      if (
        containerNav.classList.item(1) == "open" &&
        event.target.classList[0] != "container-nav" &&
        event.target.classList[0] != "icon"
      ) {
        document.body.removeAttribute("class", "open");
        containerNav.classList.remove("open");
      }
    });
  },

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
  box-shadow: 0.5rem 0.5rem 2rem 0 rgba(8, 15, 41, 0.08),
    0 0 1px 0 rgba(8, 15, 41, 0.08);
  height: 4rem;
}

.logo img {
  height: 3rem;
}

.menu-icons .icon {
  cursor: pointer;
  padding: 5px 12px 5px 12px;
  height: 30px;
  width: 30px;
  border-radius: 7px;
  transition: all 650ms ease-in-out;
}

header .icon:hover {
  color: var(--color-red);
}

header .icon.times {
  color: var(--color-red);
}

header .container-nav {
  width: 16rem;
  height: 92vh;
  background: var(--color-white);
  position: fixed;
  top: 64px;
  left: -22rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  z-index: 1;
  margin-left: -100px;
  transition: all 650ms ease-in-out;
  box-shadow: 0.5rem 0.5rem 2rem 0 rgba(8, 15, 41, 0.08),
    0 0 1px 0 rgba(8, 15, 41, 0.08);
}

.container-nav.open {
  left: 3.5rem;
}

header .container-nav li a {
  color: var(--color-gray);
  text-decoration: none;
  transition: all 0.5s ease-in-out;
}

header .container-nav li a:hover {
  color: var(--color-red);
}

header .container-nav li {
  list-style: none;
  margin: 30px;
}

header .container-nav .emergency {
  padding: 6px 20px;
  color: var(--color-red);
  border: 1px solid var(--color-red);
  border-radius: 10px;
  cursor: pointer;
  transition: all 650ms ease-in-out;
}

header .container-nav .emergency:hover {
  background: var(--color-red);
  color: var(--color-white);
}

header .footer-nav {
  display: none;
  margin-left: -40px;
}

header .footer-nav p {
  margin-left: 40px;
}

@media screen and (min-width: 858px) {
  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  header .container-nav {
    width: initial;
    height: initial;
    position: initial;
    top: initial;
    right: initial;
    display: flex;
    flex-direction: row;
    transition: initial;
    background: transparent;
    box-shadow: none;
  }

  header .icon.open {
    display: none;
  }

  header .icon.times {
    display: none;
  }

  header .container-nav .menu {
    display: flex;
    flex-wrap: nowrap;
  }

  header .container-nav li {
    display: inline-block;
    padding: 18px 15px;
  }

  header .container-nav li {
    list-style: none;
    margin: initial;
  }

  header .footer-nav {
    display: none;
  }
}
</style>