<template>
  <main-header />
  <div class="form-content">
    <form v-if="user" class="form" @submit="postUser">
      <!-- user details column -->
      <div class="form-column">
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name" v-model="user.data.name" />
        <label for="surname">Apellidos</label>
        <input
          type="text"
          id="surname"
          name="surname"
          v-model="user.data.surname"
        />
        <label for="email">Email</label>
        <input type="email" id="email" name="email" v-model="user.data.email" />
        <label for="phone">Teléfono</label>
        <input type="tel" id="phone" name="phone" v-model="user.data.phone" />
        <label for="age">Edad</label>
        <input
          type="number"
          id="age"
          name="age"
          v-model="user.data.age"
          min="18"
          max="140"
          required
        />
      </div>
      <!-- loan details column -->
      <div class="form-column">
        <label for="loan_amount">Importe</label>
        <input
          type="number"
          id="loan_amount"
          name="loan_amount"
          v-model.number="user.data.loan_amount"
          min="11"
          max="1000"
          required
        />
        <label for="loan_date">Fecha solicitud</label>
        <input
          type="date"
          id="loan_date"
          name="loan_date"
          :min="today()"
          v-model="user.data.loan_date"
        />
        <label for="loan_weeks">Duración</label>
        <select
          name="loan_weeks"
          id="loan_weeks"
          placeholder="Selecciona"
          v-model="user.data.loan_weeks"
          required
        >
          <option v-for="i in 20" :key="i" :value="{ i }">
            {{ i }} año(s)
          </option>
        </select>
      </div>

      <div class="form-submit">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          v-model="user.data.check"
          required
        />
        <label for="terms" class="check-label">
          He leído y acepto los
          <a
            href="https://cloudframework.io/terminos-y-condiciones/"
            target="_blank"
          >
            términos y condiciones
          </a>
        </label>

        <input type="submit" value="Enviar" class="submit" />
      </div>
    </form>
  </div>
  <main-footer />
  <user-not-found v-if="showUserNotFound" />
  <user-error-data v-if="showUserErrorData" />
</template>

<script>
import axios from 'axios';
import mainHeader from '@/components/mainHeader.vue';
import mainFooter from '@/components/mainFooter.vue';
import userNotFound from '@/views/errorModalViews/userNotFound.vue';
import userErrorData from '@/views/errorModalViews/userErrorData.vue';

export default {
  name: 'mainPage',
  components: {
    mainHeader,
    mainFooter,
    userNotFound,
    userErrorData,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      showUserNotFound: false,
      showUserErrorData: false,
      closeErrorModal: '',
      user: null,
    };
  },
  created() {
    this.getUsers();
    // console.log('heeelloooo', this.$route.params.id);
  },
  computed: {},
  methods: {
    openUserNotFound() {
      this.showUserNotFound = true;
    },
    closeUserNotFound() {
      this.showUserNotFound = false;
    },
    openUserErrorData() {
      this.showUserErrorData = true;
    },
    closeUserErrorData() {
      this.showUserErrorData = false;
    },
    async getUsers() {
      try {
        const response = await axios.get(
          `https://api7.cloudframework.io/recruitment/fullstack/users?id=${this.id}`,
          {
            headers: {
              'X-WEB-KEY': 'Development',
            },
          }
        );
        this.user = response.data;
        this.closeUserNotFound();
      } catch (error) {
        if (error.response.status === 400) {
          this.openUserNotFound();
        }
      }
    },
    async postUser(e) {
      e.preventDefault();
      const data = {
        name: this.user.data.name,
        surname: this.user.data.surname,
        email: this.user.data.email,
        phone: this.user.data.phone,
        age: parseInt(this.user.data.age),
        loan_amount: parseInt(this.user.data.loan_amount),
        loan_date: this.user.data.loan_date,
        loan_weeks: this.user.data.loan_weeks.i,
        check: this.user.data.check,
      };
      try {
        const response = await axios.post(
          `https://api7.cloudframework.io/recruitment/fullstack/users/${this.id}`,
          data,
          {
            headers: {
              'X-WEB-KEY': 'Development',
            },
          }
        );
        this.user = response.data;
        this.closeUserErrorData();
      } catch (error) {
        if (error.response.status === 400) {
          console.log('esto es error post', error.response.data);
        }
      }
    },
    today() {
      const dtToday = new Date();
      let month = dtToday.getMonth() + 1;
      let day = dtToday.getDate();
      const year = dtToday.getFullYear();

      if (month < 10) month = `0${month.toString()}`;
      if (day < 10) day = `0${day.toString()}`;
      return `${year}-${month}-${day}`;
    },
  },
  watch: {
    id() {
      this.getUsers();
    },
  },
};
</script>

<style scoped>
.form-content {
  display: flex;
  justify-content: center;
}
.form-column {
  width: 33%;
  padding: 10px 55px;
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

input {
  line-height: 1.5;
  font-size: 1.4em;
  padding: 5px 10px;
  border-radius: 15px;
  display: block;
  width: 100%;
  background: transparent;
  border: solid 2px var(--gold);
}
select {
  line-height: 1.5;
  font-size: 1.4em;
  padding: 5px 10px;
  border-radius: 15px;
  display: block;
  width: 110%;
  border: solid 2px var(--gold);
  background: transparent;
}
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  appearance: none;
  margin: 0;
}

.form-submit {
  text-align: center;
  padding: 40px;
  clear: both;
}
.check-label {
  font-size: 1.1em;
  letter-spacing: 1px;
  cursor: pointer;
  color: black;
  padding: 0 0 30px 10px;
}
a {
  text-decoration: none;
}
a:link {
  color: var(--gold);
}

a:visited {
  color: var(--gold);
}

a:hover {
  text-decoration: underline;
}
.submit {
  height: 50px;
  width: 230px;
  display: inline-block;
  border: 1px solid var(--font-gray-color);
  padding: 12px 34px;
  background-color: transparent;
  color: var(--gold);
  font-size: 1.1em;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  transition: 0.5s;
}
.submit:hover {
  background-color: var(--font-gray-color);
  border: 1px solid var(--gold);
}
@media screen and (max-width: 850px) {
  .form-column {
    width: 50%;
    clear: both;
  }
}
</style>
