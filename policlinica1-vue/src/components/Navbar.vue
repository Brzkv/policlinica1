<template>
  <div id="nav">
    <div class="topbar">
      <router-link class="topbar_logo" to="/"><span>Поликлиника</span><img src="@/assets/sign.svg"></router-link>
      <div class="topbar_menu">
        <router-link to="/services">Медцентр</router-link>
        <router-link to="/services">Врачи</router-link>
        <router-link to="/covid19">Вакансии</router-link>
        <router-link to="/analizi">Полезное</router-link>
      </div>
      <router-link class="topbar_phone" to="/">+7 (495) 119-76-75</router-link>
    </div>
    
    <div class="servicesMenu">
      <router-link to="/services">Медицинские услуги</router-link>
      <router-link to="/covid19">COVID-19</router-link>
      <router-link to="/analizi">Анализы</router-link>
      <router-link to="/diagnostika">Диагностика</router-link>
      <router-link to="/kosmetologiya">Косметология</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar', 
}
</script>

<style lang='scss' scoped>

#nav {
  display: flex;
  flex-direction: column;
  background: white;
}

.topbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
}
.topbar_menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
@media (max-width: 800px) {
  .topbar_menu {
  display: none;
}
}

.topbar_menu > a {
  text-decoration: none;
  color: inherit;
  font-weight: normal;
  font-size: 0.8rem;
  margin: 0 8px;
}

.topbar_phone {
  text-decoration: none;
  color: inherit;
}

.servicesMenu {
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 32px;
  overflow-x: auto;
  white-space: nowrap;
  background: rgba(23, 166, 99, 1.000);
}
  @media (max-width: 800px) {
    .servicesMenu { justify-content: space-between; }
  }

.servicesMenu > a {
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  margin-right: 16px;
  transition: all 300ms;
  transition-timing-function: cubic-bezier();
  &.router-link-exact-active {
      border-bottom: 1px solid white;
    }
}
.servicesMenu > a:last-child { margin-right: 0px }
.servicesMenu > a:hover {
  transform: translateY(-4px);
}

.topbar_logo > img { width: 48px; margin-left: 6px;}
.topbar_logo {
  font-family: 'Nunito', sans-serif;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgba(39, 166, 98, 1);
  font-size: 24px;
  font-weight: 900;
}

</style>
