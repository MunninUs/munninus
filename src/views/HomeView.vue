<template>
  <div class="welcome">
    <header class="flex space-between align-center">
      <img :src="require('../assets/logo-'+theme+'.svg')" />
      <label class="switch">
        <input v-model="darkMode" type="checkbox">
        <span class="slider" :theme="theme"></span>
      </label>
    </header>
    <main class="align-center flex-column">
      <WelcomeSlide v-show="currentSlide === 0" :slide="slides[0]" :theme="theme" />
      <WelcomeSlide v-show="currentSlide === 1" :slide="slides[1]" :theme="theme" />
      <div class="flex gap-1 margin-top-2">
        <div :class="`circle ${currentSlide === 0 ? 'selected' : ''}`"></div>
        <div :class="`circle ${currentSlide === 1 ? 'selected' : ''}`"></div>
      </div>
    </main>
    <footer v-show="currentSlide === 0">
      <button @click="currentSlide = 1">Next</button>
    </footer>
    <footer v-show="currentSlide === 1">
      <button>Get Started</button>
      <a class="flex padding-1-2 space-between align-center">
        <span class="small-text subtext-color">Already have an account?</span>
        <span class="action-text">Login</span>
      </a>
    </footer>
  </div>
</template>

<script>
import WelcomeSlide from '@/components/WelcomeSlide.vue';
// @ is an alias to /src

export default {
  components: { WelcomeSlide },
  name: 'HomeView', 
  data(){
    return {
      darkMode:false,
      slides: [
        {
          title: 'Plan your day',
          image: 'plan',
          text: 'Plan your day and save your incredible ideas in the fastest away and format possible.'
        },
        {
          title: 'Organize your tasks',
          image: 'organize',
          text: 'Here you can organize your tasks easily, customizing, and sorting the way the fits you better.'
        },
      ],
      currentSlide:0,
      theme:document.body.getAttribute('theme') ? document.body.getAttribute('theme') : 'light',
    }
  },
  methods: {
    changeTheme() {
      this.darkMode = !this.darkMode;
    },
  },
  watch:{
    darkMode(newData) {
      if (newData) {
        document.body.setAttribute("theme", "dark");
        this.theme = 'dark';
      } else {
        document.body.setAttribute("theme", "light");
        this.theme = 'light';
      } 
    }
  },
}
</script>
<style>
</style>
