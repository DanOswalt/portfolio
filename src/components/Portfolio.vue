<template>
  <section class="portfolio">
    <h1 class="hero portfolio-title has-text-left">Portfolio</h1>
    <div class="container">
      <!-- <h1 class="title is-3">Portfolio</h1> -->
      <div class="portfolio-frame">
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
// import projects from '../data/mock.json'
import {db, storage} from '@/firebase/init.js'

export default {
  name: "Portfolio",
  components: {
    Project
  },
  data () {
    return {
      projects: []
    }
  },
  created () {
    db.collection('projects').get()
    .then(snapshot => {
      this.projects = snapshot.docs.map(doc => {
        return doc.data()
      })
    })
    .catch(err => {
      console.log(err.message)
    })
  }
}
</script>

<style scoped>
.portfolio {
  margin: 0 auto;
  width: 100%;
}
.portfolio-frame {
  /* background: #111; */
}
.portfolio-title {
  background-color: #222;
  color: #eee;
}
.title {
  font-weight: lighter;
  margin-bottom: 2em;
}
.project {
  margin: 1em;
  border-radius: 10px;
  margin-bottom: 2.5em;
}
</style>
