<template>
  <div class="modal-container">
    <div class="modal-body">
      <p class="modal-title">
        El usuario {{ $route.params.id }} no existe, por favor introduce otro
        usuario.
      </p>
    </div>

    <div class="modal-footer"></div>
  </div>
</template>

<script>
export default {
  name: 'userNotFound',
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
