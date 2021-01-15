<template>
  <div class="contacts" :class="{ 'is-pulled-right': inHeader }">
    <ul class="contact-links">
      <li>
        <a href="https://github.com/DanOswalt" target="_blank" :class="{ headerStyles: inHeader }">
          <i class="contact-icon fab fa-github"></i>
          <span v-show="!inHeader" class="contact-label is-hidden-mobile">Github</span>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/danoswalt" target="_blank" :class="{ headerStyles: inHeader }">
          <i class="contact-icon fab fa-linkedin"></i>
          <span v-show="!inHeader" class="contact-label is-hidden-mobile">LinkedIn</span>
        </a>
      </li>
      <li>
        <a href="https://stackoverflow.com/users/3546817/dan-oswalt" target="_blank" :class="{ headerStyles: inHeader }">
        <i class="contact-icon fab fa-stack-overflow"></i>
          <span v-show="!inHeader" class="contact-label is-hidden-mobile">StackOverflow</span>
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
  margin-right: 10px;
}
.contact-icon {
  margin-left: 0px;
  margin-right: 0px;
  font-size: 1.8rem;
  color: #ccc;
}
.contact-label {
  margin-left: 4px;
  color: #ccc;
}
.headerStyles {
  color: #ccc;
  font-size: 1.8rem;
  margin-top: 25px;
  margin-right: 4px;
}
</style>
