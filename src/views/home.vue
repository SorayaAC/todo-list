<template>
  <header class="landing">
    <nav>
      <img src="../assets/img/header-logo.png" alt="CreditFast Bank Logo" />
    </nav>
    <div class="title">
      <h1>Tu banco digital</h1>
      <p>
        Consulta nuestra oferta de préstamos personales y créditos, tenemos la
        financiación que necesitas.
      </p>
      <router-link :to="{ name: 'form' }">
        <button id="myButton">Solicita un préstamo</button>
      </router-link>
    </div>
  </header>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Header',
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      const response = await axios.get(
        'https://api7.cloudframework.io/recruitment/fullstack/users?id=2'
      );
      this.users = response.data;
      console.log(this.users);
    },
  },
};
</script>

<style>
.landing {
  min-height: 100vh;
  width: 100%;
  background-image: url('../assets/img/hero.png');
  background-size: cover;
  background-position: center;
  position: relative;
  background-repeat: no-repeat;
}
nav {
  display: flex;
}
nav img {
  width: 300px;
  padding: 30px;
}

.title {
  width: 90%;
  color: var(--font-gray-color);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.title h1 {
  font-size: 62px;
}
.title p {
  margin: 10px 0px 40px;
  font-size: 14px;
}
button {
  display: inline-block;
  border: 1px solid var(--font-gray-color);
  padding: 12px 34px;
  background-color: transparent;
  color: var(--gold);
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  transition: 0.5s;
}
button:hover {
  background-color: var(--font-gray-color);
  border: 1px solid var(--gold);
}
@media screen and (max-width: 850px) {
  .title h1 {
    font-size: 3rem;
  }
  .title p {
    font-size: 1rem;
  }
}
</style>
