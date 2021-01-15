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
      <form @change="updateJSON" class="add-project-form">
        <div class="field">
          <label class="label">Order</label>
          <div class="control">
            <input class="input" type="number" name="title" v-model="project.order" placeholder="order">
          </div>
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
            <input class="input" @change="uploadFile($event)" type="file" multiple>
            <div v-for="(img, index) in project.imgs" :key="index" class="progress-bars">
              <ul>
                <li>{{ img }}</li>
              </ul>
            </div>
          </div>
        </div>

        <textarea class="textarea" name="summary" rows="20" cols="80" v-model="project.summary" placeholder="summary"></textarea>
        <div class="view-json section">
          <h1 class="title">JSON for submitted project:</h1>
          <code>
            {{ prettyJSON }}
          </code>
        </div>
        <button class="button is-large is-info" @click="submitProject" type="button" name="button">Submit Project</button>
      </form>
    </div>
  </div>
</template>

<script>
import { db, storage } from "@/firebase/init.js";
import firebase from "firebase";

export default {
  name: "admin",
  data() {
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
        imgs: [],
        tags: [],
        links: [],
        order: 0
      },
      prettyJSON: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(cred => {
          this.user = cred.user;
          console.log(cred);
        })
        .catch(function(error) {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    },
    addTag() {
      this.project.tags.push(this.currentTag);
      this.currentTag = "";
    },
    addLink(which) {
      let icon = null;

      if (which === 1) {
        icon = "fab fa-github";
      } else if (which === 2) {
        icon = "fas fa-link";
      } else {
        return;
      }

      this.project.links.push({
        icon: icon,
        url: this.currentLink
      });
      this.currentLink = "";
    },
    uploadFile(e) {
      const files = e.target.files;

      for (let i = 0; i < files.length; i += 1) {
        //store the image names in projects
        this.project.imgs.push(files[i].name);

        //put() the file into bucket
        const storageRef = storage.ref("images/" + files[i].name);
        storageRef.put(files[i]);
      }
    },
    updateJSON() {
      this.prettyJSON = JSON.stringify(this.project, null, 4);
    },
    submitProject() {
      db.collection("projects")
        .add(this.project)
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch(error => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  },
  mounted() {
    this.user = firebase.auth().currentUser;
  }
};
</script>

<style scoped media="screen">
.admin {
  max-width: 400px;
}
</style>
