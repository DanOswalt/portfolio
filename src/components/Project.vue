<template>
  <section class="project">
    <div class="card">
      <header class="project-header card">
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
          {{ project.summary }}
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
              <img :src="require(`@/assets/${project.imgs[0]}`)" alt="project picture">
            </figure>
          <!-- </div> -->
        </div>
        <div class="tile card-content">
          <div class="project-description content">
            <p class="project-role">
              {{ project.role }}
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: Object
  }
};
</script>

<style scoped>
card {
  border: black 1px solid;
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
