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
             target="_blank"><i :class="link.icon"></i></a>
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
          ><span class="tag">{{ tag }}</span></li>
        </ul>
      </div>
      <div class="tile is-ancestor">
        <ImageSlider :imgURLs="imgURLs"/>
        <div class="tile card-content">
          <div class="project-description content">
            <div class="project-summary" v-html="project.summary">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageSlider from "@/components/ImageSlider.vue";
import { storage } from "@/firebase/init.js";

export default {
  name: "Project",
  props: {
    project: Object
  },
  components: {
    ImageSlider
  },
  data() {
    return {
      imgURLs: []
    };
  },
  mounted() {
    const storageRef = storage.ref();

    this.project.imgs.forEach(name => {
      storageRef
        .child("images/" + name)
        .getDownloadURL()
        .then(url => {
          this.imgURLs.push(url);
        })
        .catch(error => {
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/object_not_found":
              // File doesn't exist
              break;

            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;

            case "storage/canceled":
              // User canceled the upload
              break;

            case "storage/unknown":
              // Unknown error occurred, inspect the server response
              break;
          }
        });
    });
  }
};
</script>

<style scoped>
.card {
  /* border: solid black 1px; */
  max-width: 800px;
  margin: 50px auto;
  box-shadow: 0 8px 6px -6px black;
  background: #222;
  color: #ccc;
}
.project-header {
  text-align: left;
  background-color: #111;
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
.project-summary {
  max-width: 90%;
  margin: auto;
}
.project-tags {
  text-align: left;
}
.tag {
  background-color: #cc0000;
  color: white;
}
.project-tag {
  margin: 0.1em;
}
.project-link {
  font-size: 1.5em;
  color: #eee;
  margin-left: 15px;
}
.project-summary >>> .red-hilite {
  color: #cc0000;
}
.project-description {
  text-align: left;
  width: 100%;
  margin-top: 0.5em;
}
pre {
  white-space: -moz-pre-line;
  white-space: -pre-line;
  white-space: -o-pre-line;
  white-space: pre-line;
  word-wrap: break-word;
  background: #fff;
  font-family: "Ubuntu";
}
</style>
