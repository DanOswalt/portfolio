<template>
  <div class="tile slider">
    <figure class="image project-image">
      <img :src="imgURLs[currentImageIndex]" alt="project image">
      <div class="nav-container" v-show="multipleImages">
        <span @click="currentImageIndex--"
              v-show="!atBeginning"
              class="icon prev is-size-1">
          <i class="fas fa-chevron-circle-left"></i>
        </span>
        <span @click="currentImageIndex++"
              v-show="!atEnd"
              class="icon next is-size-1">
          <i class="fas fa-chevron-circle-right"></i>
        </span>
      </div>
    </figure>
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

.nav-container .icon {
  cursor: pointer;
  color: black;
  opacity: 0.8;
}

.nav-container .icon:hover {
  opacity: 0.6;
}

.prev {
  position: absolute;
  top: 13px;
  left: 13px;
}

.next {
  position: absolute;
  top: 13px;
  right: 13px;
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
