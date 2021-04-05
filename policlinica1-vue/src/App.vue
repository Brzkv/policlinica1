<template>
  <Navbar />
  <div id="main">
  <transition name="fade-in" >
    <router-view id="view" class="container" />
  </transition>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: { 
    Navbar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap');

html {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  line-height: 1.5;
}

body {
  margin: 0;
  background: rgba(239, 243, 245, 1.000)
}

#app {
  margin: 0 auto;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #111;
}

#main {
  margin: 0 auto;
  max-width: 1600px;
  position: relative;
  z-index: 0;
}

.container {
  height: 200vh;
  padding: 24px;
}

button {
  padding: 12px 24px;
  background: rgba(39, 166, 98, 1);
  border: none;
  border-radius: 99px;
  color: white;
  font-size: 22px;
  font-weight: 700;
  font-family: 'Nunito', sans-serif;
  transition: all 300ms;
  transition-timing-function: cubic-bezier();
}
button:hover {
  cursor: pointer;
  background: rgb(46, 187, 112);
}

/* view transition */
.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.5s ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
