<template>
  <main>
    <MultisectorialCommission />
    <NumbersCovid />
  </main>
</template>

<script>
import MultisectorialCommission from "../components/MultisectorialCommission.vue";
import NumbersCovid from "../components/NumbersCovid.vue";

export default {
  name: "Main",

  components: {
    MultisectorialCommission,
    NumbersCovid,
  },
};
</script>
<style scoped>
main {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
}

</style>