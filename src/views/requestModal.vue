<template>
  <div name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
            <slot name="body"> </slot>
          </div>
          usuario incorrecto elige otro
          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button">OK</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <header class="landing">
    <nav>
      <img src="../assets/img/header-logo.png" alt="CreditFast Bank Logo" />
    </nav>
    <div class="title">
      <h1>Tu banco digital</h1>
      <p>
        Consulta nuestra oferta de préstamos personales y créditos, tenemos la
        financiación que necesitas.
      </p>
    </div>
  </header> -->
</template>

<script>
export default {
  name: 'requestModal',

  methods: {
    //send request to father component
    // closeRequestModal() {
    //   console.log('close modal');
    //   this.$emit('closeRequestModal');
    // },
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
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  padding-bottom: 40px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
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
