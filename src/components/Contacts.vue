<template>
  <div class="contacts" :class="{ 'is-pulled-right': inHeader }">
    <ul class="contact-links">
      <li>
        <a href="https://github.com/DanOswalt" target="_blank" :class="{ headerStyles: inHeader }">
          <i class="contact-icon fab fa-github"></i>
          <span v-show="!inHeader" class="is-hidden-mobile">Github</span>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/danoswalt" target="_blank" :class="{ headerStyles: inHeader }">
          <i class="contact-icon fab fa-linkedin"></i>
          <span v-show="!inHeader" class="is-hidden-mobile">LinkedIn</span>
        </a>
      </li>
      <li>
        <a href="https://stackoverflow.com/users/3546817/dan-oswalt" target="_blank" :class="{ headerStyles: inHeader }">
        <i class="contact-icon fab fa-stack-overflow"></i>
          <span v-show="!inHeader" class="is-hidden-mobile">StackOverflow</span>
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
};
</script>

<style scoped>
.contacts {
  display: inline-block;
}
.contact-icon {
  margin-right: 0.3em;
  font-size: 1.8rem;
}
.headerStyles {
  color: #eee;
  font-size: 1.8rem;
  margin-top: 25px;
  margin-right: 15px;
}
</style>
