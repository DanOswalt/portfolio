<template>
    <ul class="contact-links">
      <li>
        <a href="https://github.com/DanOswalt" target="_blank" :class="{ 'has-text-white': inHeader }">
          <i class="contact-icon is-size-3-mobile fab fa-github"></i>
          <span class="is-hidden-mobile">Github</span>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/danoswalt" target="_blank" :class="{ 'has-text-white': inHeader }">
          <i class="contact-icon is-size-3-mobile fab fa-linkedin"></i>
          <span class="is-hidden-mobile">LinkedIn</span>
        </a>
      </li>
      <li>
        <a href="https://stackoverflow.com/users/3546817/dan-oswalt" target="_blank" :class="{ 'has-text-white': inHeader }">
        <i class="contact-icon is-size-3-mobile fab fa-stack-overflow"></i>
          <span class="is-hidden-mobile">StackOverflow</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  props: {
    inHeader: Boolean
  }
}
</script>

<style scoped>
.contact-links {
  display: inline-block;
}
.contact-icon {
  margin-right: 0.3em;
  font-size: 1em;
}
.inHeader {
  color: #eee;
}

</style>
