<template>
  <section class="project">
    <div class="card">
      <header class="project-header card">
        <h4 class="project-title title card-header-title">
          {{ project.title }}
        </h4>
        <a v-for="(link, index) in project.links"
           :key="index"
           :href="link.url"
           class="project-link"
           target="_blank"><i class="fab fa-github"></i></a>
      </header>
      <div class="card-content">
        <ul>
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
            <h4 class="subtitle">
              Summary:
            </h4>
            <p class="">
              {{ project.summary }}
            </p>
            <h4 class="subtitle">
              My Role:
            </h4>
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
.project-header {
  text-align: left;
}
.project-title {
  display: inline-block;
  margin-bottom: 0;
  font-size: 2.5em;
  color: #111;
  font-weight: lighter;
}
.project-link {
  font-size: 1.5em;
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
.project .subtitle {
  color: #cc0000;
}
/* .project-tag {
  margin: 0.75em 0.5em;
} */
</style>
