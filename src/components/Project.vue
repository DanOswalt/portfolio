<template>
  <section class="project">
    <h2>{{ project.title }}</h2>
    <img :src="require(`@/assets/${project.imgs[0]}`)" alt="">
    <p>{{ project.summary }}</p>
    <ul>
      <li v-for="(tag, index) in project.tags"
          :key="index"
          >{{ tag }}</li>
    </ul>
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
</style>
