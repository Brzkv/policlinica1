<template>
  <div id="breadcrumbs">
    <ul>
      <li>Главная</li>
      <li>Услуги</li>
      <li>{{ title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  name: 'Breadcrumbs'
}
</script>

<style scoped>
#breadcrumbs {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#breadcrumbs > ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
}
#breadcrumbs > ul > li {
  margin-right: 8px;
  font-size: 1.4rem;
  opacity: 0.64;
}
#breadcrumbs > ul > li::after {
  content: ' / ';
  opacity: 0.33;
}
#breadcrumbs > ul > li:last-child::after {
  content: '';
}
</style>