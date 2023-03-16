<template>
  <div class="container">
    <div v-for="(repo, index) in repos" :key="index" class="single-repo">
      <router-link :to="`/repos/${repo.name}`" class="link">
        <div class="repoIcon">
          <div>
            <h1 class="heading">{{ repo.name }}</h1>
          </div>
          <div>
            <fa icon="fa-solid fa-expand" class="icon-item"></fa>
          </div>
        </div>
        <p>{{ repo.description }}</p>
      </router-link>
    </div>
  </div>
</template>

  
  <script>
//   import { BiArrowsAngleExpand } from "../../../node_modules/vue-icons/icons";
  import { Fa } from '@fortawesome/vue-fontawesome';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'RepoCard',
    props: {
      repos: Array
    },
    components: { Fa }
  })
  </script>
  
  <style scoped>
 @import url("https://fonts.googleapis.com/css2?family=Fasthand&family=Fuzzy+Bubbles:wght@400;700&family=Montserrat:ital,wght@1,197&family=Poppins:wght@300;400;500;600&family=Roboto:wght@400;500;700;900&display=swap");

.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    padding-left: 10px;
    margin: 60px 150px;
    align-self: center;
  }

.single-repo {
  padding: 20px 15px;
  background-color: #e6f3f7;
  border-radius: 8px;
  text-align: left;
  
}

.link {
  text-decoration: none;
  color: lightseagreen;
  text-align: left
}

.link p {
  padding: 10px;
  font-family:'Poppins', sans-serif;
}
.repoIcon {
    display: flex;
    justify-content: space-between;
    align-content: center;
}

.repoIcon h1 {
  font-family:'Poppins', sans-serif;
  padding-right: 1rem;
}
.single-repo:nth-child(+1) {
    background-color: #f7ebff;
    box-shadow: 0px 5px 10px 0px #cbb9d4;
}
.single-repo:nth-child(+2) {
    background-color: #e6f3f7;
    box-shadow: 0px 5px 10px 0px #a5ccd6;
}
.single-repo:nth-child(+3) {
    background-color: #fffade;
    box-shadow: 0px 5px 10px 0px #e6e0bb;
}
.single-repo:nth-child(+4) {
    text-decoration: none;
    background-color: #e8d5b5;
    box-shadow: 0px 5px 10px 0px #e2cba3;
}
.single-repo:nth-child(+5) {
    background-color: #f7ebff;
    box-shadow: 0px 5px 10px 0px #cbb9d4;
}

.single-repo:hover {
    
    transition: 0.3s;
    box-shadow: 0px 5px 10px 0px lightseagreen;
}

.loader {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 15rem;
    margin-top: 5rem;
}

@media screen and ( max-width: 615px ) {
    .container {
        margin: 40px 40px;
    }
}

@media screen and ( max-width: 400px ) {
    .container {
        margin: 40px 30px;
    }
}
@media screen and ( max-width: 290px ) {
    .container {
        margin: 40px 5px;
    }
}
  </style>
  