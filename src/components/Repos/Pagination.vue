<template>
  <div class="pagination">
    <button
      v-if="currentPage > 1"
      @click="setCurrentPage(currentPage - 1)"
      class="pages__btns"
    >
      Prev
    </button>

    <button
      v-for="page in pageCount"
      :key="page"
      @click="setCurrentPage(page)"
      :class="{ 'active__page': currentPage === page, 'pages__btns': currentPage !== page }"
    >
      {{ page }}
    </button>

    <button
      v-if="currentPage < pageCount"
      @click="setCurrentPage(currentPage + 1)"
      class="pages__btns"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  name: 'Pagi-nation',
  props: {
    totalPosts: {
      type: Number,
      required: true,
    },
    pagePerShow: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    setCurrentPage: {
      type: Function,
      required: true,
    },
  },
  computed: {
    pageCount() {
      return Math.ceil(this.totalPosts / this.pagePerShow);
    },
  },
};
</script>
  
  <style scoped>
  .disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .pages__btns {
    background-color: #fff;
    color: #333;
    border-color: lightseagreen !important;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    font-family: 'Arial', sans-serif;
    text-align: center;
    padding: 5px;
    margin: 20px 10px;
}

.pages__btns:hover {
    background-color: lightblue;
}

.active__page {
    background-color: lightseagreen;
    color: #333;
    border: none;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    font-family: 'Arial', sans-serif;
    text-align: center;
    padding: 5px;
    margin: 20px 10px;
}

.active__page:hover {
    background-color: lightblue;
}

.pagination {
    align-items: center;
    justify-content: center;
    position: relative;
    text-align: center;
    margin-bottom: 4rem;
    
}
  </style>
  