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
      <WelcomeSlide v-for="(data, index) in slides" v-show="currentSlide === index" :key="index" :slide="slides[index]" />
      <div class="flex gap-1 margin-top-2">
        <div v-for="(data, index) in slides" :key="index" @click="currentSlide = index" :class="`circle ${currentSlide === index ? 'selected' : ''}`"></div>
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
        {
          title: 'Share with friends',
          image: 'share',
          text: 'Share with your friends or family tasks and daily schedules, so you both can do it together!'
        },
      ],
      currentSlide:0,
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
        this.$store.commit('SET_THEME', 'dark');
      } else {
        document.body.setAttribute("theme", "light");
        this.$store.commit('SET_THEME', 'light');
      } 
    }
  },
  computed:{
    theme(){
      return this.$store.getters['GET_THEME'];
    }
  }
}
</script>
<style>
</style>
