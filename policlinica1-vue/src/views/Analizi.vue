<template>
  <div id="analizi">
    <h1>Сдать анализы в Южном Домодедово</h1>
    <div>{{ $route }}</div>
  <Form msg="Записаться на сдачу анализов" />
  </div>
</template>

<script>
import Form from "@/components/Form.vue";

export default {
  components: {
    Form
  }
}
</script>

<style scoped>

</style>