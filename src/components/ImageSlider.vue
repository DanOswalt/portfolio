<template>
  <div class="tile slider">
    <div class="image project-image">
      <div class="nav-container is-clearfix" v-show="multipleImages">
        <span @click="currentImageIndex--"
              v-show="!atBeginning"
              class="icon prev is-size-2 is-pulled-left">
          <i class="fas fa-angle-left"></i>
        </span>
        <span @click="currentImageIndex++"
              v-show="!atEnd"
              class="icon next is-size-2 is-pulled-right">
          <i class="fas fa-angle-right"></i>
        </span>
      </div>
      <img :src="imgURLs[currentImageIndex]" alt="project image">
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageSlider",
  props: {
    imgURLs: Array
  },
  data () {
    return {
      currentImageIndex: 0
    }
  },
  computed: {
    size () {
      return this.imgURLs.length;
    },
    atBeginning () {
      return this.currentImageIndex === 0;
    },
    atEnd() {
      return this.currentImageIndex === this.size - 1;
    },
    multipleImages() {
      return this.size > 1
    }
  }
}
</script>

<style scoped lang="css">
.project-image {
  margin: 2em auto;
  max-width: 80%;
  height: auto;
  overflow: hidden;
}

.nav-container {
  margin-bottom: 4px;
}

.nav-container .icon {
  cursor: pointer;
  color: black;
  opacity: 0.8;
}

.nav-container .icon:hover {
  opacity: 0.6;
}

.prev {
  margin-bottom: 6px;
}

.next {
  margin-bottom: 6px;
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
</style>
