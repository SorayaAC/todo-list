<template>
  <div name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <!-- <user-not-found /> -->
        <user-correct-data />
        <!-- <user-error-data />  -->
      </div>
    </div>
  </div>
</template>

<script>
import userNotFound from '../components/modalComponents/userNotFound.vue';
import userCorrectData from '../components/modalComponents/userCorrectData.vue';
import userErrorData from '../components/modalComponents/userErrorData.vue';
export default {
  name: 'requestModal',
  components: {
    userNotFound,
    userCorrectData,
    userErrorData,
  },
  created() {
    console.log('ver error:', this.$route.params);
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/img/hero.png');
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

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
