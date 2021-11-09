<template>
  <main>
  </main>
</template>

<script>
//import http from "../services/http";

export default {
  name: "Main",

  /* created() {
    http
      .get("countries/Angola?yesterday=true&strict=true&query")
      .then((data) => {
        console.log(data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, */

  methods: {},
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
}

main h1{
    font-style: italic;
}
</style>