<template>
  <div class="page">
    <bank-header />
    <bank-form />
    <bank-footer />
  </div>
</template>

<script>
import bankHeader from '@/components/bankHeader.vue';
import bankForm from '@/components/bankForm.vue';
import bankFooter from '@/components/bankFooter.vue';

export default {
  name: 'Home',
  components: {
    bankHeader,
    bankForm,
    bankFooter,
  },
};
</script>
<style>
:root {
  --blue: #0d1a34;
  --gold: #bb8a04;
  --font-gray-color: #e7e1d9;
}
.page {
  font-family: 'Inter', sans-serif;
  max-width: 1600px;
  min-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
</style>
