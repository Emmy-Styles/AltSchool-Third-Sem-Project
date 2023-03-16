<template>
  <nav>
    <router-link to="/" class="logo-link">
      <div class="logo">
        <div>
          <!-- <i class="fab fa-github"></i> -->
          <fa icon="fa-brands fa-github" class="fab fa-github"></fa>
          
        </div>
        <div class="logo__text">
          <h3>Xplore</h3>
        </div>
      </div>
    </router-link>

    <div>
      <ul :class="clicked ? 'active' : ''" id="navbar">
        <li>
          <router-link @click="hideSidebar" to="/">Home</router-link>
        </li>
        <li>
          <router-link @click="hideSidebar" to="/repos">Repos</router-link>
        </li>
        <li>
          <router-link @click="hideSidebar" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>

    <div id="mobile" @click="handleClick">
      <i :class="clicked ? 'fas fa-times' : 'fas fa-bars'" id="bar"></i>
    </div>
  </nav>
</template>

<script>
import { Fa } from '@fortawesome/vue-fontawesome';
import { ref } from 'vue';

export default {
    setup() {
        const clicked = ref(false);
        const handleClick = () => {
            clicked.value = !clicked.value;
        };
        const hideSidebar = () => {
            clicked.value = false;
        };
        return { clicked, handleClick, hideSidebar };
    },
    components: { Fa }
};
</script>

<style>
@import url('https://use.fontawesome.com/releases/v5.13.0/css/all.css');
  nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: lightseagreen;
  padding: 18px 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
}

#navbar{
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-link .fab {
  color: white;
  font-size: 2rem;
  
}

.logo-link .fab:hover {
  color: rgb(230, 248, 239);
  
}

.logo-link {
  text-decoration: none;
}

 .logo {
  display: flex;
}

.logo__text h3 {
  text-decoration: none;
  color: #fff;
  font-size: 1.8rem;
  text-align: center;
  letter-spacing: 2px;
  font-family: "Bai Jamjuree", sans-serif;
  padding-left: 4px;
}

.logo__text h3:hover {
  color: rgb(230, 248, 239);
}

#navbar li {
  list-style: none;
  padding: 0 20px;
  position: relative;
  font-family:'Poppins', sans-serif;
}

#navbar li a, Link {
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  transition: 0.3s ease-in-out;
}

#navbar li a:hover {
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
}

#navbar li a:hover::after {
  content: "";
  width: 30%;
  height: 2px;
  background: #fff;
  position: absolute;
  bottom: -4px;
  left: 20px;
}

#mobile {
  display: none;
}

#mobile {
  color: #fff;
}

@media  screen and (max-width:769px) {
  #navbar{
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    top: 90px;
    right: -300px;
    width: 300px;
    height: 100vh;
    background: rgb(7, 138, 131);
    z-index: 1;
    box-shadow: 40px 0 10px 10px rgba(190, 247, 228, 0.911);
    padding: 40px 0 0 10px;
    transition: 0.3s ease-in-out;
  }

  #navbar.active {
    right: 0px;
  }

  #navbar li {
    margin-bottom: 25px;

  }

  #mobile {
    display: block;
  }

  #mobile i {
    font-size: 35px;
    cursor: pointer;
  }
}

</style>
