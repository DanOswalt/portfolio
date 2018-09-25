<template>
  <section class="portfolio">
    <hr class="divider"/>
    <h1 class="title portfolio-title is-size-1">Portfolio</h1>
    <hr class="divider"/>
    <div class="container">
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
.portfolio-title {
  color: #222;
  padding: 0;
  margin: 0 auto;
  font-weight: lighter;
}
.divider {
  background-color: #cc0000;
}
.project {
  border-radius: 10px;
  margin: 200px auto;
}
</style>
