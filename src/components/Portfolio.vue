<template>
  <section class="portfolio">
    <h1 v-show="!affixPortfolioHeader" class="title portfolio-title is-size-1">Portfolio</h1>
    <h1 v-show="affixPortfolioHeader" class="affixed is-size-1">Portfolio</h1>
    <div class="container section">
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
import Project from "@/components/Project.vue";
import { db, storage } from "@/firebase/init.js";

export default {
  name: "Portfolio",
  components: {
    Project
  },
  data() {
    return {
      projects: [],
      affixPortfolioHeader: false,
      portfolioTopY: null
    };
  },
  methods: {
    handleScroll() {
      this.affixPortfolioHeader = window.scrollY > this.portfolioTopY - 50;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);

    db.collection("projects").orderBy("order", "desc")
      .get()
      .then(snapshot => {
        this.projects = snapshot.docs.map(doc => {
          return doc.data();
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  },
  mounted() {
    this.portfolioTopY = document
      .querySelector(".portfolio")
      .getBoundingClientRect().top;
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.portfolio {
  margin: 0 auto;
  width: 100%;
  background-color: #333;
}
.portfolio-title {
  color: white;
  background-color: #222;
  padding: 5px;
  margin: 0 auto;
  height: 70px;
  font-weight: lighter;
  /* border-top: #cc0000 solid 2px; */
  border-bottom: #cc0000 solid 2px;
  box-shadow: 0 8px 6px -6px black;
}
.affixed {
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  height: 70px;
  color: white;
  font-weight: lighter;
  /* border-top: #cc0000 solid 2px; */
  border-bottom: #cc0000 solid 2px;
  z-index: 1;
  background-color: #222;
  box-shadow: 0 8px 6px -6px black;
}
.project {
  border-radius: 10px;
  margin: 200px auto;
}
</style>
