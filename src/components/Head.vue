<template>
  <section class="Head">
    <div class="hero is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">
            Dan Oswalt
          </h1>
          <h2 class="subtitle">
            Web Developer
          </h2>
        </div>
      </div>
    </div>
    <div class="under-head container">
      <div class="tile is-ancestor">
        <div class="tile">
          <div class="profile-pic-container">
            <img alt="Picture of Dan Oswalt"
            src="../assets/me.jpeg"
            class="profile-pic"/>
          </div>
        </div>
        <div class="tile">
          <div class="summary-statement is-size-7">
            <p>
              "I am a problem-solver, communicator, and innovator, looking for a full transition into web development.
            </p>
            <br>
            <p>
              I have 3+ years of on-the-job experience using JavaScript, HTML, and CSS to build full-stack apps and enhancements to sites and services."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Head"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero {
  background: #111;
  height: 35vh;
}
.title {
  color: #eee;
}
.subtitle {
  color: #cc0000;
}
.under-head {
  width: 50%;
}
.profile-pic-container {
  display: inline-block;
  background-color: white;
  margin-top: -35px;
  height: 205px;
  width: 205px;
  border-radius: 100%;
  border: dashed #cc0000 1px;
}
.profile-pic {
  max-width: 200px;
  margin-top: 2.5px;
  border-radius: 100%;
}
.summary-statement {
  color: #111;
  margin-top: 40px;
}
</style>
