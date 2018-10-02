<template>
  <section class="head">
    <div class="hero is-bold">
      <div class="hero-body">

        <div v-if="!shrunkenHeader" class="titles container">
          <div class="title is-size-2-mobile is-size-1">
            Dan Oswalt
          </div>
          &nbsp;&nbsp;&nbsp;
          <div class="subtitle is-size-3-mobile is-size-2">
            Web Developer
          </div>
        </div>

        <div v-else class="shrunken-header titles has-text-left">
          <span class="title is-size-3">
            Dan Oswalt
          </span>
          &nbsp;&nbsp;
          <span class="subtitle is-hidden-mobile is-size-5">
            Web Developer
          </span>
          <Contacts v-show="showLinksInHeader" :inHeader="showLinksInHeader"/>
        </div>

      </div>
    </div>
    <div class="hero-bottom container">
      <div class="tile is-ancestor">
        <div class="tile is-5">
          <img alt="Picture of Dan Oswalt"
          src="../assets/portfolio_pic.jpeg"
          class="profile-pic"/>
        </div>
        <div class="contacts-adjust tile is-7">
          <Contacts/>
        </div>
      </div>
    </div>

    <div class="summary section">
      <div class="summary-containers columns">
        <div v-for="(statement, index) in summaryStatements"
             :key="index"
             class="summary-container column">
          <p class="summary-statement is-size-7-mobile box">
            <i class="summary-icon fas fa-hand-point-right"></i>
            {{ statement }}
          </p>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="!scrolled" @click="scrollToPortfolio" class="view-portfolio-container has-text-centered is-hidden-mobile">
        <i class="view-portfolio-arrow fas fa-chevron-circle-down"></i>
        <span class="arrow-label">My Work</span>
      </div>
    </transition>
  </section>
</template>

<script>
import { storage } from "@/firebase/init.js";
import Contacts from "@/components/Contacts.vue";

export default {
  name: "Head",
  components: {
    Contacts
  },
  data() {
    return {
      summaryStatements: [
        `I have ${new Date().getFullYear() -
          2015}+ years of on-the-job experience using JavaScript, HTML, and CSS to build full-stack apps and enhancements to sites and services.`,
        `I aim to create great user experiences. Beautiful things work better.`,
        `I am like, *this close* to starting to learn to play my synthesizer`
      ],
      scrolled: true,
      shrunkenHeader: false,
      showLabel: false,
      showLinksInHeader: false,
      labelIsVisible: true,
      profilePicURL: ""
    };
  },
  methods: {
    scrollToPortfolio () {
      document.querySelector(".portfolio").scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    },
    handleScroll () {
      this.scrolled = window.scrollY > 0;
      this.shrunkenHeader = window.scrollY > 120;
      this.showLinksInHeader = window.scrollY > 350;
    }
  },
  created () {
    window.addEventListener("scroll", this.handleScroll);

    // fade in the down arrow and label
    setTimeout(() => {
      this.scrolled = false;
    }, 1000);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head {
  min-height: 150vh;
}
.hero {
  background: #111;
  height: 10em;
}
.title {
  display: inline-block;
  padding: 0;
  margin: 0.1em auto;
  color: #eee;
}
.subtitle {
  display: inline-block;
  padding: 0;
  color: #cc0000;
}
.shrunken-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  background: #111;
  z-index: 1;
}
.shrunken-header .title {
  margin-left: 10px;
}
.hero-bottom {
  width: 70%;
}
.contacts-adjust {
  margin-top: 20px;
}
.profile-pic {
  display: inline-block;
  max-width: 200px;
  max-height: 200px;
  margin: -15px auto;
  border-radius: 100%;
  border: white solid 5px;
}
.summary-containers {
  margin-top: 10px;
}
.summary-container {
  margin: 0 10px;
}
.summary-statement {
  color: #666;
  margin-top: 5px;
  text-align: left;
}
.summary-icon {
  color: #cc0000;
}
.view-portfolio-container {
  position: fixed;
  bottom: 2em;
  left: 50%;
  transform: translate(-50%, 0);
}
.view-portfolio-arrow {
  font-size: 3em;
  cursor: pointer;
  box-shadow: 0 8px 6px -6px black;
  border-radius: 100%;
}
.view-portfolio-arrow:hover {
  opacity: 0.6;
}
.arrow-label {
  color: #cc0000;
  margin-left: 20px;
  font-size: 1.5em;
}

/* animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media only screen and (min-device-width: 768px) {
  .head {
    min-height: 120vh;
  }
}
</style>
