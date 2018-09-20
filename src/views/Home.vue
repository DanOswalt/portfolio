<template>
  <div class="home">
    <Head/>
    <Foot/>
  </div>
</template>

<script>
// @ is an alias to /src
import Head from "@/components/Head.vue";
import Foot from "@/components/Foot.vue";

export default {
  name: "home",
  components: {
    Head,
    Foot
  }
};
</script>

<style scoped media="screen">

</style>
