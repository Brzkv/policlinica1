<template>
  <div class="form">
    {{ msg }}
    <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Ваше имя: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Телефон: <input type="phone" name="phone" /></label>
  </p>
  <p>
    <button type="submit">Записаться</button>
  </p>
</form>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.form {
  background: #fff;
  padding: 24px;
  border: 4px solid rgba(39, 166, 98, 1.000);
  border-radius: 24px;
}
</style>
