<template>
  <div class="wildCard">
    <h1>404</h1>
    <p>The requested page was not found</p>
    <img src="../Images/404.png" alt="oops!" />
    <div class="btn">
      <router-link to="/"  rel="noreferrer"><button class="banner-btn">Home</button></router-link>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.wildCard {
  margin-top: 2rem;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-family: "Poppins", sans-serif;
  color: lightseagreen;
  /* font-weight: 2000px; */
  font-size: 70px;
}

p {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}
.banner-btn {
  padding: 10px 30px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  margin-right: 10px;
  transition: all 0.5s;
  color: white;
  background-color: lightseagreen;
  border: 2px solid lightseagreen;
}

.banner-btn:hover {
  color: lightseagreen;
  background: #fff;
  cursor: pointer;
}
.btn {
    margin-top: 15px;
}
</style>
