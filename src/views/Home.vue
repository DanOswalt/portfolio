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
import { db, storage } from "@/firebase/init.js"

export default {
  name: "home",
  components: {
    Head,
    Portfolio,
    Foot
  },
  created () {
    console.log(db)
    console.log(storage)
  }
};
</script>

<style scoped media="screen">

</style>
