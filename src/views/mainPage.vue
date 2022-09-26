<template>
  <main-header />
  <div class="form-content">
    <form v-if="user" class="form">
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
        <input
          type="phone"
          id="phone"
          name="phone"
          v-model="user.data.phone"
          required
        />
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
          v-model="user.data.loan_amount"
          min="11"
          max="1000"
          required
        />
        <label for="loan_date">Fecha solicitud</label>
        <input type="date" id="loan_date" name="loan_date" :min="today()" />
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
        <input type="checkbox" id="terms" name="terms" required />
        <label for="terms" class="check-label">
          He leído y acepto los
          <a
            href="https://cloudframework.io/terminos-y-condiciones/"
            target="_blank"
          >
            términos y condiciones
          </a>
        </label>

        <button @click="postUser">Enviar</button>
      </div>
    </form>
  </div>
  <main-footer />
  <request-modal v-if="showRequestModal" />
</template>

<script>
import axios from 'axios';
import mainHeader from '@/components/mainHeader.vue';
import mainFooter from '@/components/mainFooter.vue';
import RequestModal from '@/views/requestModal.vue';

export default {
  name: 'formPage',
  components: {
    mainHeader,
    mainFooter,
    RequestModal,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      showRequestModal: false,
      user: null,
      // editedUser: {
      //   id: this.id,
      //   name: this.name,
      //   surname: this.surname,
      //   email: this.email,
      //   phone: this.phone,
      //   age: parseInt(this.age),
      //   loan_amount: parseInt(this.loan_amount),
      //   loan_weeks: parseInt(this.loan_weeks),
      // },
    };
  },
  created() {
    this.getUsers();
    // console.log('heeelloooo', this.$route.params.id);
  },
  computed: {},
  methods: {
    openRequestModal() {
      this.showRequestModal = true;
    },
    closeRequestModal() {
      this.showRequestModal = false;
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
        this.closeRequestModal();
        console.log('todook', this.user);
      } catch (error) {
        if (error.response.status === 400) {
          console.log('esto es error', error.response.data);
          this.openRequestModal();
        }
      }
    },

    // async postUser() {
    //   try {
    //     console.log('heeeey');
    //     const response = await axios.post(
    //       `https://api7.cloudframework.io/recruitment/fullstack/users${this.id} `,
    //       this.user.data,
    //       {
    //         headers: {
    //           'X-WEB-KEY': 'Development',
    //         },
    //       }
    //     );
    //     console.log('todo ok', response);
    //   } catch(error) {
    //     console.log('esto es error', error.response.data);
    //   }
    // },

    postUser() {
      return console.log('holis');
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
