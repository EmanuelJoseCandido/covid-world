<template>
  <div>
    <vue-final-modal
      v-model="showModal"
      classes="modal-container"
      content-class="modal-content"
    >
      <div class="modal__content">
        <img
          src="https://avatars0.githubusercontent.com/u/36607296?v=4="
          alt="EmanuelJoseCandido"
        />
        <div class="icons">
          <a
            href="https://github.com/EmanuelJoseCandido/covid-world"
            target="_blank"
            rel="noopener noreferrer"
            title="Codigo Fonte"
          >
            <v-icon name="code" class="icon" />
          </a>
          <a
            href="https://github.com/EmanuelJoseCandido"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <v-icon name="brands/github" class="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/emanuelcandido/"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
          >
            <v-icon name="brands/linkedin" class="icon" />
          </a>
        </div>
      </div>
      <div class="modal__action">
        <button @click="showModal = false">Fechar</button>
      </div>
    </vue-final-modal>
  </div>
</template>

<script>
export default {
  name: "ModalAuthor",

  data: () => ({
    showModal: true,
  }),
};
</script>
<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}

.modal__content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.modal__content img {
  width: 220px;
  height: 220px;
  border-radius: 50%;
}

.modal__content .icons {
  margin: 10px 0;
}

.modal__content .icons a {
  color: var(--color-gray);
  transition: all 300ms ease-in-out;
}

.modal__content .icons .icon {
  width: 20px;
  height: 20px;
  margin: 5px;
}

.modal__content .icons .icon:hover {
  width: 22px;
}

.modal__title {
  margin: 0 2rem 0 0;
  font-size: 1.5rem;
  font-weight: 700;
}

.modal__action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.modal__action button {
  padding: 7px 30px;
  border: 1px solid var(--color-gray);
  border-radius: 4px;
  background-color: transparent;
  transition: all 300ms ease-in-out;
  cursor: pointer;
}

.modal__action button:hover {
  background: var(--color-gray);
  color: var(--color-white);
}

.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.modal__close .times {
  height: 25px;
  width: 25px;
  color: var(--color-gray);
  transition: all 300ms ease-in-out;
}

.times:hover,
.close:hover {
  color: var(--color-red);
}

.close:hover {
  border: 1px solid var(--color-red);
}
</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>
