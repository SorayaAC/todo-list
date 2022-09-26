<template>
  <div name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <p class="modal-title">
              Algo ha fallado, por favor vuelve a intentarlo.
            </p>
          </div>

          <div class="modal-footer">
            <button @click="returnForm">Volver al formulario</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userErrorData',
  data() {
    return {
      closeErrorModal: false,
    };
  },
  created() {
    console.log('ver error:');
  },
  methods: {
    returnForm() {
      console.log('volver al formulario');
      this.$emit((closeErrorModal = true));
    },
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
  background-image: url('../../assets/img/hero.png');
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
  /* background-image: url('@/assets/img/hero.png'); */
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
.modal-container {
  width: 600px;
  height: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  padding-bottom: 40px;
  background-color: #fff;
  border: 3px solid var(--gold);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
.modal-title {
  width: 90%;
  color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.modal-title p {
  margin: 10px 0px 40px;
  font-size: 14px;
}
@media screen and (max-width: 850px) {
  .modal-container {
    width: 290px;
  }
  .modal-title {
    width: 40%;
  }
  .modal-title p {
    font-size: 12rem;
  }
}

@media screen and (max-width: 400px) {
  .modal-container {
    width: 150px;
  }
  .modal-title {
    width: 50%;
  }
  .modal-title p {
    font-size: 12rem;
  }
}
</style>
