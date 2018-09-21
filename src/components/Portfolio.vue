<template>
  <section class="portfolio section">
    <div class="container">
      <h1 class="title is-1">Portfolio</h1>
      <div class="portfolio-frame box">
        <Project v-for="(project, index) in projects"
        :key="index"
        :project="project"
        class="project" />
      </div>
    </div>
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
.portfolio {
  margin: 0 auto;
}
.portfolio-frame {
  background: #111;
}
.title {
  color: #cc0000;
}
.project {
  margin: 1em;
  border-radius: 10px;
  margin-bottom: 2.5em;
}

</style>
