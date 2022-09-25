<template>
  <bank-header />
  <!-- <bank-form :user="user" /> -->
  <div class="form-content">
    <form v-if="user" class="form">
      <!-- user details column -->
      <div class="form-column">
        <label for="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          v-model="user.data.name"
          disabled
        />
        <label for="surname">Apellidos</label>
        <input
          type="text"
          id="surname"
          name="surname"
          v-model="user.data.surname"
          disabled
        />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          v-model="user.data.email"
          disabled
        />
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
          required
        />
      </div>
      <!-- loan details column -->
      <div class="form-column">
        <label for="loan_amount">Importe préstamo</label>
        <input type="number" id="loan_amount" name="loan_amount" required />
        <label for="last_name">Fecha a conseguir el préstamo</label>
        <input type="date" id="loan_date" name="loan_date" />
        <label for="loan_weeks">Tiempo a devolver</label>
        <select
          name="loan_weeks"
          id="loan_weeks"
          placeholder="Choose a talent"
          required
        >
          <option v-for="i in 20" :key="i" :value="{ i }">
            {{ i }} semana(s)
          </option>
        </select>
      </div>

      <div class="form-submit">
        <label for="terms">Aceptar términos y condiciones</label>
        <input type="checkbox" id="terms" name="terms" required />
        <input
          class="submit"
          type="submit"
          value="Send your data"
          method="post"
          @submit.prevent="postUser"
        />
      </div>
    </form>
  </div>
  <bank-footer />
  <request-modal v-if="showRequestModal" />
</template>

<script>
import axios from 'axios';
import bankHeader from '@/components/bankHeader.vue';
import bankForm from '@/components/bankForm.vue';
import bankFooter from '@/components/bankFooter.vue';
import RequestModal from '@/views/requestModal.vue';

export default {
  name: 'formPage',
  components: {
    bankHeader,
    bankForm,
    bankFooter,
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
    };
  },
  created() {
    this.getUsers();
    // console.log('heeelloooo', this.$route.params.id);
  },
  computed: {
    // user() {
    //   return this.$store.state.user;
    // },
  },
  methods: {
    // si data no existe, devolver ''
    returnName() {
      if (this.user.data.name) {
        return this.user.data.name;
      }
      return '';
    },
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
  },
  watch: {
    id() {
      this.getUsers();
    },
  },
};
</script>

<style></style>
