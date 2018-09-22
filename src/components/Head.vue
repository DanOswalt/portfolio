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
          src="../assets/me.jpeg"
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
      <div class="summary-container container tile is-ancestor">
        <div class="summary-statement tile is-4"
           v-for="(statement, index) in summaryStatements"
           :key="index">
          <i class="summary-icon fas fa-hand-point-right"></i>
          <span class="is-size-7-mobile">{{ statement }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Head",
  data () {
    return {
      summaryStatements: [
        `I am a problem-solver, communicator, and innovator.`,
        `I have ${ new Date().getFullYear() - 2015 }+ years of on-the-job experience using JavaScript, HTML, and CSS to build full-stack apps and enhancements to sites and services.`,
        `I am like, *this close* to starting to learn to play my synthesizer`
      ]
    }
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
.summary-container {
  margin-top: 20px;
}
.summary-statement {
  color: #111;
  margin-top: 5px;
  text-align: left;
}
.summary-icon {
  color: #cc0000;
}
</style>
