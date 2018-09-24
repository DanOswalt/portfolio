<template>
  <div class="admin">
    <div v-if="!user" class="login">
      <form class="login-form">
        <input type="text" name="" value="" v-model="email">
        <input type="password" name="" value="" v-model="password">
        <button @click="login" type="button" name="button">Login</button>
      </form>
    </div>
    <div v-else class="add-project">
      <h1>Add Project</h1>
      <form class="add-project-form">
        <input type="text" name="title" value="" v-model="project.title" placeholder="title">
        <input type="text" name="description" value="" v-model="project.description" placeholder="description">
        <input type="text" name="tags" value="" v-model="currentTag" placeholder="tags">
        <button @click="addTag" type="button" name="button">+ Tag</button>
        <ul class="box">
          <li v-for="(tag, index) in project.tags" :key="index">{{ tag }}</li>
        </ul>
        <input type="text" name="links" value="" v-model="currentLink" placeholder="link">
        <button @click="addLink(1)" type="button" name="button">+ GitHub</button>
        <button @click="addLink(2)" type="button" name="button">+ Other</button>
        <ul class="box">
          <li v-for="(link, index) in project.links" :key="index">{{ link.url }} {{ link.icon }}</li>
        </ul>
        <textarea name="summary" rows="20" cols="80" v-model="project.summary" placeholder="summary"></textarea>
        <button @click="submitProject" type="button" name="button">Submit Project</button>
      </form>
    </div>
  </div>
</template>

<script>
import { db, storage } from "@/firebase/init.js"
import firebase from "firebase"

export default {
  name: "admin",
  data () {
    return {
      user: null,
      email: "",
      password: "",
      currentTag: "",
      currentLink: "",
      project: {
        title: "",
        description: "",
        summary: "",
        tags: [],
        links: []
      }
    }
  },
  methods: {
    login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(cred => {
        this.user = cred.user
        console.log(cred);
      })
      .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
    },
    addTag () {
      this.project.tags.push(this.currentTag)
    },
    addLink (which) {
      let icon = null

      if (which === 1) {
        icon = 'github'
      } else if (which === 2) {
        icon = 'web'
      } else {
        return
      }

      this.project.links.push({
        icon: icon,
        url: this.currentLink
      })
    },
    submitProject () {
      console.log(this.project);
    }
  },
  mounted () {
    this.user = firebase.auth().currentUser
  }
};
</script>

<style scoped media="screen">

</style>
