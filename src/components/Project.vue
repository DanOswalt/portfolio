<template>
  <section class="project">
    <div class="card">
      <header class="project-header">
        <div class="title-and-links-container">
          <h4 class="project-title title card-header-title">
            {{ project.title }}
          </h4>
          <a v-for="(link, index) in project.links"
             :key="index"
             :href="link.url"
             class="project-link"
             target="_blank"><i class="fab fa-github"></i></a>
        </div>
        <h5 class="project-subtitle subtitle card-header-title">
          {{ project.description }}
        </h5>
      </header>
      <div class="card-content">
        <ul class="project-tags">
          <li v-for="(tag, index) in project.tags"
              :key="index"
              class="project-tag"
          ><span class="tag is-dark">{{ tag }}</span></li>
        </ul>
      </div>
      <div class="tile is-ancestor">
        <div class="tile">
          <!-- <div class="card-image"> -->
            <figure class="image project-image">
              <!-- <img :src="require(`@/assets/${project.imgs[0]}`)" alt="project picture"> -->
              <img :src="imageSrc" alt="">
            </figure>
          <!-- </div> -->
        </div>
        <div class="tile card-content">
          <div class="project-description content">
            <p class="project-summary">
              {{ project.summary }}
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { db, storage } from "@/firebase/init.js"

export default {
  name: "Project",
  props: {
    project: Object
  },
  data () {
    return {
      imageSrc: ""
    }
  },
  mounted () {
    const storageRef = storage.ref()

    storageRef.child("images/" + this.project.imgs[0]).getDownloadURL()
    .then(url => {
      this.imageSrc = url
    })
    .catch(error => {
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object_not_found':
          // File doesn't exist
          break;

        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;

        case 'storage/canceled':
          // User canceled the upload
          break;

        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    })
  }
};
</script>

<style scoped>
.card {
  border: dashed black 1px;
  max-width: 800px;
  margin: 50px auto;
}
.project-header {
  text-align: left;
  background-color: #111;
  border-bottom: 4px solid #cc0000;
}
.project-title {
  display: inline-block;
  margin-bottom: 0;
  font-size: 2.5em;
  color: #eee;
  font-weight: lighter;
}
.project-subtitle {
  color: #aaa;
  font-weight: lighter;
  padding-top: 0.1em;
}
.project-tags {
  text-align: left;
}
.project-tag {
  margin: 0.1em;
}
.project-link {
  font-size: 1.5em;
  color: #eee;
}
.project-image {
  margin: 2em auto;
  max-width: 80%;
  height: auto;
  overflow: hidden;
}
.project-description {
  text-align: left;
  width: 100%;
  margin-top: 0.5em;
}
</style>
