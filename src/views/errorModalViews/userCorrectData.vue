<template>
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
</template>

<script>
export default {
  name: 'o',
};
</script>

<style scoped>
.modal-container {
  width: 600px;
  height: 300px;
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
