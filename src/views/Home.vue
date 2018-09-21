<template>
  <div class="home">
    <Head/>
    <Portfolio/>
    <Foot/>
  </div>
</template>

<script>
import Head from "@/components/Head.vue"
import Foot from "@/components/Foot.vue"
import Portfolio from "@/components/Portfolio.vue"

export default {
  name: "home",
  components: {
    Head,
    Portfolio,
    Foot
  }
};
</script>

<style scoped media="screen">

</style>
