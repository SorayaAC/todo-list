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

<style>
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
.nav-links {
  flex: 1;
  text-align: right;
}
.nav-links ul li {
  display: inline-block;
  padding: 8px 12px;
  position: relative;
  font-size: 20px;
  cursor: pointer;
}
.nav-links ul li::after {
  content: '';
  width: 0%;
  height: 2px;
  background-color: var(--gold);
  display: block;
  margin: auto;
  transition: 0.5s;
}
.nav-links ul li:hover::after {
  width: 100%;
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
.nav--open {
  display: none;
}
.nav--close {
  display: none;
}
@media screen and (max-width: 850px) {
  .nav-links ul li {
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    display: block;
  }
  .title h1 {
    font-size: 3rem;
  }
  .title p {
    font-size: 1rem;
  }
  .nav-links {
    position: absolute;
    top: 0;
    right: 0px;
    background-color: #020a55;
    height: 100vh;
    text-align: left;
    z-index: 2;
    width: -200px;
  }
  .nav-links ul {
    padding: 25px;
  }
  .nav--close {
    filter: invert(50%) sepia(78%) saturate(1968%) hue-rotate(21deg)
      brightness(96%) contrast(97%);
    padding: 10px;
    display: block;
    width: 20px;
    cursor: pointer;
    height: 20px;
  }
  .nav--open {
    filter: invert(50%) sepia(78%) saturate(1968%) hue-rotate(21deg)
      brightness(96%) contrast(97%);
  }
}
</style>
