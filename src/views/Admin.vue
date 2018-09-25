<template>
  <div class="admin container">
    <div v-if="!user" class="login">
      <form class="login-form">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="text" v-model="email">
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="text" v-model="password">
          </div>
        </div>
        <button @click="login" type="button" name="button">Login</button>
      </form>
    </div>
    <div v-else class="add-project">
      <h1 class="title">Add Project</h1>
      <form class="add-project-form">
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input class="input" type="text" name="title" v-model="project.title" placeholder="title">
          </div>
          <label class="label">Description</label>
          <div class="control">
            <input class="input" type="text" name="description" v-model="project.description" placeholder="description">
          </div>
        </div>
        <div class="field">
          <label class="label">Tags</label>
          <div class="control">
            <button class="button is-small is-primary" @click="addTag" type="button">+ Tag</button>
            <button class="button is-small is-danger" @click="project.tags.pop()" type="button" name="button">- Remove last</button>
            <input class="input" @keydown.tab="addTag" type="text" name="tags" v-model="currentTag" placeholder="tags">
          </div>
          <div class="field">
            <ul class="tags-box">
              <li class="tag is-dark" v-for="(tag, index) in project.tags" :key="index">{{ tag }}</li>
            </ul>
          </div>
        </div>
        <div class="field">
          <label class="label">Links</label>
          <div class="control">
            <button class="button is-small is-primary" @click="addLink(1)" type="button" name="button">+ GitHub</button>
            <button class="button is-small is-primary" @click="addLink(2)" type="button" name="button">+ Other</button>
            <button class="button is-small is-danger" @click="project.links.pop()" type="button" name="button">- Remove last</button>
            <input class="input" type="text" name="links" v-model="currentLink" placeholder="link">
          </div>
          <ul class="links-box">
            <li v-for="(link, index) in project.links" :key="index">{{ link.url }} [{{ link.icon }}]</li>
          </ul>
        </div>
        <div class="field">
          <label class="label">Pic(s)</label>
          <div class="control">
            <input type="file" name="" value="">
          </div>
        </div>

        <textarea class="textarea" name="summary" rows="20" cols="80" v-model="project.summary" placeholder="summary"></textarea>
        <button class="button is-large is-info" @click="submitProject" type="button" name="button">Submit Project</button>
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
      this.currentTag = ""
      console.log(this.project.tags);
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
      this.currentLink = ""
    },
    // removeLastLink () {
    //   this.project.tags.pop()
    //   console.log(this.project.tags)
    // },
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
.admin {
  max-width: 400px;
}
</style>
