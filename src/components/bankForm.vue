<template>
  <div class="form-content">
    <form class="form">
      <!-- user details column -->
      <div class="form-column">
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name" placeholder="Jonathan" />
        <label for="surname">Apellidos</label>
        <input type="text" id="surname" name="surname" placeholder="Doe" />
        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="jon@doe.com" />
        <label for="phone">Teléfono</label>
        <input
          type="phone"
          id="phone"
          name="phone"
          placeholder="+613 999 9999"
        />
        <label for="last_name">Edad</label>
        <input type="text" id="last_name" name="last_name" placeholder="Doe" />
      </div>
      <!-- loan details column -->
      <div class="form-column">
        <label for="last_name">Importe préstamo</label>
        <input type="text" id="last_name" name="last_name" placeholder="Doe" />
        <label for="last_name">Fecha a conseguir el préstamo</label>
        <input type="date" id="last_name" name="last_name" />
        <label for="talent">Tiempo a devolver</label>
        <input
          name="talent"
          type="text"
          list="talents"
          placeholder="Choose a talent"
        />
        <datalist id="talents">
          <option value="HTML"></option>
          <option value="CSS"></option>
          <option value="Both"></option>
        </datalist>
      </div>

      <div class="form-submit">
        <label for="last_name">Aceptar términos y condiciones</label>
        <input type="checkbox" id="terms" name="terms" />
        <input class="submit" type="submit" value="Send your data" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
};
</script>

<style>
.form-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: var(--white);
}
.form-column {
  width: 33%;
  padding: 10px 30px;
  float: left;
}

label {
  display: block;
  padding: 40px 5px 5px 2px;
  font-size: 1.1em;
  letter-spacing: 1px;
  cursor: pointer;
  color: black;
}

input,
select {
  border-color: var(--gold);
  line-height: 1.5;
  font-size: 1.4em;
  padding: 5px 10px;
  border-radius: 15px;
  display: block;
  width: 100%;
  background: transparent;
}

.form-submit {
  text-align: center;
  padding-top: 40px;
  clear: both;
}

@media screen and (max-width: 700px) {
  .form-column {
    width: 50%;
  }
  .form-column:nth-child(3) {
    width: 100%;
  }
}
</style>
