<template>
  <bank-header />
  <bank-form />
  <bank-footer />
</template>

<script>
import bankHeader from '@/components/bankHeader.vue';
import bankFooter from '@/components/bankFooter.vue';
import bankForm from '@/components/bankForm.vue';
export default {
  name: 'FormPage',
  components: {
    bankHeader,
    bankForm,
    bankFooter,
  },
};
</script>

<style></style>
