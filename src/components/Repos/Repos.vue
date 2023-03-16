<template>
  <section class="service section">
    <div class="user__section">
      <div v-if="loading">
        <LoaderComponent />
      </div>
      <div v-else>
        <repo-card :repos="paginatedPosts" />
        <div class="pagination">
          <Pagination
            :totalPosts="repos.length"
            :pagePerShow="pagePerShow"
            :setCurrentPage="setCurrentPage"
            :currentPage="currentPage"
            :setPagePerShow="setPagePerShow"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { reactive, toRefs, watchEffect, computed } from "vue";
import RepoCard from "./RepoCard.vue";
import Pagination from "./Pagination.vue";
import LoaderComponent from "../LoaderComponent.vue"

export default {
  name: "RepoS",
  components: {
    RepoCard,
    Pagination,
    LoaderComponent
  },
  setup() {
    const state = reactive({
      repos: [],
      loading: false,
      currentPage: 1,
      pagePerShow: 6,
      url: "https://api.github.com/users/Emmy-Styles/repos",
    });

    const fetchRepo = async () => {
      state.loading = true;
      try {
        const response = await axios.get(state.url);
        state.repos = response.data;
      } catch (error) {
        console.error(error);
      } finally {
        state.loading = false;
      }
    };

    watchEffect(() => {
      fetchRepo();
    });

    const setPagePerShow = (perPage) => {
      state.pagePerShow = perPage;
    };

    const setCurrentPage = (pageNumber) => {
      state.currentPage = pageNumber;
    };

    const pageCount = computed(() => {
      const totalPages = Math.ceil(state.repos.length / state.pagePerShow);
      return totalPages;
    });

    const paginatedPosts = computed(() => {
      const lastPostIndex = state.currentPage * state.pagePerShow;
      const firstPostIndex = lastPostIndex - state.pagePerShow;
      return state.repos.slice(firstPostIndex, lastPostIndex);
    });

    return {
      ...toRefs(state),
      paginatedPosts,
      pageCount,
      setCurrentPage,
      setPagePerShow,
    };
  },
};
</script>