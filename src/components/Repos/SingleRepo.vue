<template>
    <div class="container__repo">
      <div>
        <div v-if="loading">
          <BeatLoader color="lightseagreen" loading="true" size="20" aria-label="Loading Spinner" data-testid="loader" class="loader"/>
        </div>
        <div v-else>
          <div v-for="(repo, index) in filteredRepos" :key="index" class="repo__container">
            <router-link to="/repos">
              <button class="btn__primary">
                <fa icon="fa-solid fa-backward" class="back__icon"></fa>
                <!-- <Back class="back__icon" /> -->
                &nbsp;Back to Repos
              </button>
            </router-link>
            <div class="proj_Name">
              <div class="repoDetails">
                <h2>{{ repo.name }}</h2>
                <p>{{ repo.description }}</p>
                <p>Visibility: {{ repo.visibility }}</p>
                <p>Created On: {{ repo.created_at }}</p>
              </div>
              <a :href="repo.html_url" target="_blank" rel="noreferrer">
                <button class="view">
                  <p>
                    View on <fa icon="fa-brands fa-github" class="git__icon"></fa>
                    <!-- <Github class="git__icon" /> -->
                  </p>
                </button>
              </a>
            </div>
            <h2 class="stats">Repository Statistics</h2>
            <div class="stats__container">
              <div class="statsBox">
                <!-- <Fork /> -->
                <fa icon="fa-solid fa-code-fork"></fa>
                <p>
                  {{ repo.forks }} <span>Forks</span>
                </p>
              </div>
              <div class="statsBox">
                <fa icon="fa-solid fa-warning"></fa>
                <p>
                  {{ repo.open_issues }} <span>Issues</span>
                </p>
              </div>
              <div class="statsBox">
                <fa icon="fa-solid fa-eye"></fa>
                <p>
                  {{ repo.watchers }} <span>View</span>
                </p>
              </div>
              <div class="statsBox">
                <!-- <Folder /> -->
                <fa icon="fa-regular fa-folder"></fa>
                <p>{{ repo.size }} mb </p>
              </div>
              <div class="statsBox">
                <!-- <Network /> -->
                <fa icon="fa-solid fa-wifi-strong"></fa>
                <p>{{ repo.network_count }} Count </p>
              </div>
              <div class="statsBox">
                <!-- <Subscribers /> -->
                <fa icon="fa-solid fa-people-group"></fa>
                <p>
                  {{ repo.subscribers_count }} <span>Subs</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { BeatLoader } from "vue-spinner/dist/vue-spinner.min";
  import { Fa } from '@fortawesome/vue-fontawesome'
//   import { Back, Github, Fork, Issues, Eye, Folder, Network, Subscribers } from "@/icons";
  export default {
    name: "RepoPage",
    components: {
      Fa,
      BeatLoader,
    },
    data() {
      return {
        repositories: [],
        loading: true,
      };
    },
    mounted() {
      axios
        .get("https://api.github.com/users/Emmy-Styles/repos")
        .then((response) => {
          this.repositories = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    computed: {
      filteredRepos() {
        const { name } = this.$route.params;
        return this.repositories.filter((repo) => repo.name === name);
      },
    },
  };
  </script>

<style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Fasthand&family=Fuzzy+Bubbles:wght@400;700&family=Montserrat:ital,wght@1,197&family=Poppins:wght@300;400;500;600&family=Roboto:wght@400;500;700;900&display=swap");
.repoContainer {
  margin-top: 100px;
  padding: 40px;
  color: #1f197a;
  text-align: left;
}

.stats {
  padding-left: 20px;
}

button.back {
  text-decoration: none;
  outline: none;
}

.btn__primary {
  text-decoration: none !important;
  outline: none !important;
  background: transparent;
  text-align: center;
  margin: 2rem 2rem;
  color: lightseagreen;
  font-size: 0.95rem;
  font-weight: normal;
  padding: 10px 14px;
  border: 2px solid lightseagreen;
  border-radius: 32px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn__primary:hover {
  transform: scale(0.98);
}

.view {
  text-decoration: none !important;
  outline: none !important;
  background-color: lightseagreen;
  margin-bottom: 0;
  cursor: pointer;
  border: 2px solid #fff;
  border-radius: 32px;
  text-align: center;
  margin: 0 auto;
  padding: 5px 14px;
  transition: all 0.3s ease;
}
.git__icon {
  padding-left: 4px;
  text-align: center;
  padding-top: 4px;
}
.view p {
  color: #fff;
  font-size: 0.95rem;
  font-weight: normal;
  padding: 10px 14px;
}
.view p:hover {
  color: #333;
  transition: .5s;
}
.view:before,
.btn__primary:before {
  transition: 0.5s;
  transform: scale(0.9);
}

.view:hover:before,
.btn__primary:hover:before {
  transform: scale(1.2);
  box-shadow: 0 0 15px lightseagreen;
  filter: blur(1px);
}

.view:hover,
.btn__primary:hover {
  color: #1f197a;
  box-shadow: 0 0 15px lightseagreen;
  text-shadow: 0 0 15px #f8f7ee;
}


.btn__primary:hover {
  text-shadow: 0 0 15px lightseagreen;
}

.back__icon {
  padding-top: 4px;
}
.proj_Name {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px 10px 20px;
  background-color: white;
  font-size: 16px;
  font-weight: 500;
}

.proj_Name p {
  font-size: 18px;
  font-weight: 500;
}

.repoDetails {
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));
  gap: 15px;
  padding: 10px 20px 10px 8px;
  margin-bottom: 15px;
  color: lightseagreen;
}

.repoDetails p {
  border-bottom: 1px solid lightseagreen;
  padding-bottom: 8px;
}

.stats__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 30px;
  padding: 20px 20px 40px 20px;
}

.stats {
  color: lightseagreen;
}

.statsBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow-wrap: break-word;
  padding: 15px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.statsBox p {
  color: #333;
}

.statsBox:nth-child(5n + 1) {
  background-color: #e6f3f7;
  box-shadow: 0px 5px 10px 0px #a5ccd6;
}

.statsBox:nth-child(5n + 2) {
  background-color: #fffade;
  box-shadow: 0px 5px 10px 0px #e6e0bb;
}

.statsBox:nth-child(5n + 3) {
  background-color: #e8d5b5;
  box-shadow: 0px 5px 10px 0px #e2cba3;
}

.statsBox:nth-child(5n + 4) {
  background-color: #c6fced;
  box-shadow: 0px 5px 10px 0px #a1dac9;
}

.statsBox:nth-child(5n + 5) {
  background-color: #f7ebff;
  box-shadow: 0px 5px 10px 0px #cbb9d4;
}

.statsBox:hover {
  box-shadow: 0px 5px 10px 0px lightseagreen;
}

.loader {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 8rem;
}
</style>
  
  