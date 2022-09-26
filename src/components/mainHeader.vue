<template>
  <header class="header">
    <nav>
      <a href=""> <img src="../assets/img/header-logo.png" alt="" /></a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header {
  height: 150px;
  width: 100%;
  background-image: url('../assets/img/banner.png');
  background-size: cover;
  background-position: center;
  position: relative;
  background-repeat: no-repeat;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 6%;
  color: var(--font-gray-color);
}
nav img {
  width: 300px;
}

@media screen and (max-width: 850px) {
  nav {
    padding: 5% 6%;
  }
}
@media screen and (max-width: 400px) {
  nav {
    padding: 15% 6%;
  }
  nav img {
    width: 250px;
  }
}
</style>
