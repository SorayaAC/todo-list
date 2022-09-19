<template>
  <div>
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
* {
  background-color: #bdbdbd;
}
</style>
