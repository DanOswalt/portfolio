<template>
  <div class="tile slider">
    <div class="image project-image">
      <div class="nav-container is-clearfix" v-show="multipleImages">
        <div class="dots">
          <ul v-show="size > 1">
            <li @click="currentImageIndex--"
                  v-show="!atBeginning"
                  class="icon nav-icon prev is-size-2">
              <i class="fas fa-angle-left"></i>
            </li>
            <li @click="currentImageIndex++"
                  v-show="!atEnd"
                  class="icon nav-icon next is-size-2">
              <i class="fas fa-angle-right"></i>
            </li>
          </ul>
        </div>
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
  margin-right: 10px;
}

.next {
  margin-bottom: 6px;
  margin-left: 10px;
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
