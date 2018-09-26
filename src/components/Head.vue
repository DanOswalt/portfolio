<template>
  <section class="head">
    <div class="hero is-bold">
      <div class="hero-body">
        <div class="titles container">
          <div class="title is-size-2-mobile is-size-1">
            Dan Oswalt
          </div>
          &nbsp&nbsp&nbsp
          <div class="subtitle is-size-3-mobile is-size-2">
            Web Developer
          </div>
        </div>
      </div>
    </div>
    <div class="hero-bottom container">
      <div class="tile is-ancestor">
        <div class="tile is-5">
          <img alt="Picture of Dan Oswalt"
          src="https://firebasestorage.googleapis.com/v0/b/danoswalt-161b1.appspot.com/o/me.jpeg?alt=media&token=7d1b7f98-42f5-463a-9abd-ecf8bc3167c9"
          class="profile-pic"/>
        </div>
        <div class="tile is-7">
          <ul class="contact-links">
            <li>
              <a href="https://github.com/DanOswalt" target="_blank">
                <i class="contact-icon is-size-3-mobile fab fa-github"></i>
                <span class="is-hidden-mobile">Github</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/danoswalt" target="_blank">
                <i class="contact-icon is-size-3-mobile fab fa-linkedin"></i>
                <span class="is-hidden-mobile">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://stackoverflow.com/users/3546817/dan-oswalt" target="_blank">
                <i class="contact-icon is-size-3-mobile fab fa-stack-overflow" target="_blank"></i>
                  <span class="is-hidden-mobile">StackOverflow</span>
                </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="summary section is-hidden-mobile">
      <div class="summary-containers columns">
        <div v-for="(statement, index) in summaryStatements"
             :key="index"
             class="summary-container column">
          <p class="summary-statement box">
            <i class="summary-icon fas fa-hand-point-right"></i>
            {{ statement }}
          </p>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="!scrolled" @click="scrollToPortfolio" class="view-portfolio-container has-text-centered">
        <i class="view-portfolio-arrow fas fa-chevron-circle-down"></i>
        <span class="arrow-label">My Work</span>
      </div>
    </transition>
  </section>
</template>

<script>
import { storage } from "@/firebase/init.js"

export default {
  name: "Head",
  data () {
    return {
      summaryStatements: [
        `I am a problem-solver, communicator, and innovator.`,
        `I have ${ new Date().getFullYear() - 2015 }+ years of on-the-job experience using JavaScript, HTML, and CSS to build full-stack apps and enhancements to sites and services.`,
        `I am like, *this close* to starting to learn to play my synthesizer`
      ],
      scrolled: true,
      showLabel: false,
      labelIsVisible: true
    }
  },
  methods: {
    scrollToPortfolio () {
      document.querySelector('.project').scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    },
    handleScroll () {
      this.scrolled = window.scrollY > 0;
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);

    // fade in the down arrow and label
    setTimeout(() => { this.scrolled = false }, 1000)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head {
  height: 100vh;
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
.hero-bottom {
  width: 70%;
}
.profile-pic {
  display: inline-block;
  max-width: 200px;
  max-height: 200px;
  margin: -15px auto;
  border-radius: 100%;
  border: white solid 5px;
}
.contact-links {
  margin-top: 20px;
}
.contact-icon {
  margin-right: 0.3em;
  font-size: 1.2em;
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
