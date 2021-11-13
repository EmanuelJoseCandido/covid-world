<template>
  <div class="container-covid">
    <div class="videos">
      <iframe
        v-for="video in videos"
        :key="video.id.videoId"
        :video-id="video.id.videoId"
        :src="`https://www.youtube.com/embed/${video.id.videoId}`"
        :title="video.snippet.title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="button">
      <a
        href="https://www.youtube.com/channel/UC7QLMVuPz9lg-0-_8YDm88A/search?query=covid"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-icon name="plus" class="icon" title="Ver mais dados" />
        <span class="text"> Ver mais vídeos </span>
      </a>
    </div>
  </div>
</template>

<script>
import https from "../services/https";
export default {
  name: "SliderYoutube",

  created() {
    https
      .get(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAGwENLyoscBz2Nl_L9HWNvAIzLDinUxh8&channelId=UC7QLMVuPz9lg-0-_8YDm88A&part=snippet,id&order=date&maxResults=2&q=covid-19"
      )
      .then((data) => {
        this.videos = data.data.items;
      })
      .catch(() => {});
  },

  data() {
    return {
      videos: {},
    };
  },
};
</script>

<style scoped>
.container-covid {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.container-covid .videos {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.container-covid .videos iframe {
  width: 640px;
  height: 400px;
  padding: 20px;
  border-radius: 7px;
}

.container-covid .button {
  margin-top: 20px;
}

.container-covid .button a {
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

.container-covid .button a:hover {
  background: var(--color-white);
  color: var(--color-red);
}

@media screen and (max-width: 670px) {
  .container-covid .videos iframe {
    width: 100%;
    height: 250px;
    padding: 20px;
    border-radius: 7px;
  }
}
</style>