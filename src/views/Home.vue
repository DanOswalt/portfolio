<template>
  <div class="home">
    <Head/>
    <Portfolio/>
  </div>
</template>

<script>
import Head from "@/components/Head.vue"
import Portfolio from "@/components/Portfolio.vue"

export default {
  name: "Home",
  components: {
    Head,
    Portfolio
  }
};
</script>

<style scoped media="screen">

</style>
