<template>
  <div id="comissao" class="commission">
    <div class="introduction">
      <h2>Comissão Multissectorial</h2>
      <p>
        A Comissão Multissectorial para Prevenção e Combate à COVID-19 é um
        órgão adhoc criado por Despacho Presidencial para gestão e coordenação
        das actividades dos distintos organismos e serviços do Estado em torno
        da contenção da pandemia da COVID-19.
      </p>
    </div>

    <div class="videos-covid-commission"></div>
  </div>
</template>
<script>
//import https from "../services/https";

export default {
  name: "MultisectorialCommission",

  /* created() {
    https
      .get(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAGwENLyoscBz2Nl_L9HWNvAIzLDinUxh8&channelId=UC7QLMVuPz9lg-0-_8YDm88A&part=snippet,id&order=date&maxResults=5&q=covid-19"
      )
      .then((data) => {
        let channelVideos = data.data.items;

        for (const iterator of channelVideos) {
          console.log("*******************************************");
          console.log("video id: " + iterator.id.videoId);
          console.log("titulo: " + iterator.snippet.title);
          console.log("descricao: " + iterator.snippet.description);
          console.log("url img: " + iterator.snippet.thumbnails.medium.url);
          console.log("publicado em: " + iterator.snippet.publishTime);
          console.log("Canal: " + iterator.snippet.channelTitle);
          console.log("*******************************************\n");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, */
};
</script>
<style scoped>
.commission {
  padding: 20px 40px;
  background: var(--color-small-gray);
}

.commission .introduction h2 {
  text-align: center;
}

.commission .introduction p {
  text-align: justify;
}
</style>