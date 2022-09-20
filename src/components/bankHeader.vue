<template>
  <header class="header">
    <nav>
      <a href=""> <img src="../assets/img/header-logo.png" alt="" /></a>
      <div class="nav-links">
        <img
          class="nav--close"
          src="../assets/img/close.png"
          alt="Cerrar"
          @click="close"
        />
        <img
          class="nav--open"
          src="../assets/img/burger-bar.png"
          alt="Open"
          @click="Open"
        />
        <ul>
          <li><a href=""></a> Home</li>
          <li><a href=""></a> Home</li>
          <li><a href=""></a> Home</li>
          <li><a href=""></a> Home</li>
        </ul>
      </div>
    </nav>
    <div class="title">
      <h1>Bank</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus animi
        labore cum veritatis ut omnis quae laborum quaerat, sed numquam dolore
        commodi, totam dolores porro, nam repellendus temporibus earum ipsum?
      </p>
      <button>Solicita un préstamo</button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>
.header {
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
  justify-content: space-between;
  align-items: center;
  padding: 2% 6%;
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
}
.nav-links ul li::after {
  content: '';
  width: 0%;
  height: 2px;
  background-color: #bb8a04;
  display: block;
  margin: auto;
  transition: 0.5s;
}
.nav-links ul li:hover::after {
  width: 100%;
}
.title {
  width: 90%;
  color: #fff;
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
  border: 1px solid #fff;
  padding: 12px 34px;
  background-color: transparent;
  color: #fff;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  transition: 0.5s;
}
button:hover {
  background-color: #fff;
  color: #f44336;
}
.nav--open {
  display: none;
}
.nav--close {
  display: none;
}
@media screen and (max-width: 700px) {
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
    background-color: aqua;
    height: 100vh;
    text-align: left;
    z-index: 2;
    width: -200px;
  }
  .nav-links ul {
    padding: 25px;
  }
  .nav--close {
    padding: 10px;
    display: block;
    width: 20px;
    cursor: pointer;
    height: 20px;
  }
  .nav--open {
    display: block;
    width: 20px;
    cursor: pointer;
    height: 20px;
  }
}
</style>
