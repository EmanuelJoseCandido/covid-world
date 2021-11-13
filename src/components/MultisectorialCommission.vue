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

    <IframesYoutube />
  </div>
</template>
<script>
import IframesYoutube from "./IframesYoutube.vue";
export default {
  name: "MultisectorialCommission",
  components: {
    IframesYoutube,
  },
};
</script>
<style scoped>
.commission {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 0px 50px 0px;
  background: var(--color-small-gray);
}

.commission .introduction {
  padding: 0 100px;
}

.commission .introduction p {
  text-align: justify;
}

.commission .videos-covid {
  width: 100%;
}

@media screen and (max-width: 858px) {
  .commission .introduction {
    padding: 0px;
    width: 90%;
  }
}
</style>