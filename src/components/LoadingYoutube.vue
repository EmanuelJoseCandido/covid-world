<template>
  <div class="youtube-container" v-show="!active">
    <section class="youtube-loading">
      <div class="error-container" v-if="error.text != ''">
        <span class="text">
          {{ error.text }}
        </span>
        <span class="icon">
          <v-icon name="times" scale="3"></v-icon>
        </span>
      </div>
      <v-icon label="loading-play-youtube" v-else>
        <v-icon name="play"></v-icon>
        <v-icon name="spinner" scale="3" pulse></v-icon>
      </v-icon>
    </section>

    <section class="youtube-loading">
      <div class="error-container" v-if="error.text != ''">
        <span class="text">
          {{ error.text }}
        </span>
        <span class="icon">
          <v-icon name="times" scale="3"></v-icon>
        </span>
      </div>
      <v-icon label="loading-play-youtube" v-else>
        <v-icon name="play"></v-icon>
        <v-icon name="spinner" scale="3" pulse></v-icon>
      </v-icon>
    </section>
  </div>
</template>
<script>
export default {
  name: "LoadingYoutube",

  props: {
    active: {
      type: Boolean,
      default: false,
    },

    error: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.youtube-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
}

.youtube-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 640px;
  height: 400px;
  margin: 10px 20px;
  border-radius: 10px;
  box-shadow: 0.5rem 0.5rem 2rem 0 rgba(8, 15, 41, 0.08),
    0 0 1px 0 rgba(8, 15, 41, 0.08);
  background: linear-gradient(0.25turn, transparent, #fff, transparent),
    linear-gradient(#eee, #eee), linear-gradient(#eee, #eee);
  background-repeat: no-repeat;
  background-size: 640px 400px, 640px 180px, 0px 0px, 225px 30px;
  background-position: -640px 0, 0 0, 0px 190px, 50px 195px;
  animation: loading 1.5s infinite;
}

.error-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--color-red);
}

@keyframes loading {
  to {
    background-position: 640px 0, 0 0, 0 190px, 50px 195px;
  }
}

@media screen and (max-width: 670px) {
  .youtube-loading {
    width: 90%;
    height: 250px;
    border-radius: 7px;
  }
}
</style>