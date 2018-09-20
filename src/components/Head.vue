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
          <div class="profile-pic-outer-circle">
            <img alt="Picture of Dan Oswalt"
            src="../assets/me.jpeg"
            class="profile-pic"/>
          </div>
        </div>
        <div class="tile is-7">
          <div class="summary-statement is-size-6 is-size-7-tablet">
            <p class="summary-point" v-for="(point, index) in summaryPoints" :key="index">
              <i class="summary-icon fas fa-hand-point-right"></i>
              {{ point }}
            </p>
          </div>
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
      summaryPoints: [
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
.hero {
  background: #111;
  height: 10em;
}
.title {
  display: inline-block;
  padding: 0;
  margin-bottom: 0.2em;
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
.profile-pic-outer-circle {
  display: inline-block;
  background-color: white;
  margin: -15px auto;
  height: 205px;
  width: 205px;
  border-radius: 100%;
  border: dashed #cc0000 1px;
}
.profile-pic {
  display: block;
  max-width: 200px;
  border-radius: 100%;
  margin: 2.5px;
}
.summary-statement {
  color: #111;
  margin-top: 40px;
  text-align: left;
}
.summary-point {
  margin-bottom: 0.75em;
}
.summary-icon {
  color: #cc0000;
}
</style>
