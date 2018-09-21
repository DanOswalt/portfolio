<template>
  <section class="portfolio section">
    <h1 class="title">Portfolio</h1>
    <Project v-for="(project, index) in projects"
             :key="index"
             :project="project" />
  </section>
</template>

<script>
import Project from "@/components/Project.vue"
import projects from '../data/mock.json'

export default {
  name: "Portfolio",
  components: {
    Project
  },
  data () {
    return {
      projects
    }
  }
}
</script>

<style scoped>
.title {
  color: #cc0000;
}
</style>
