<template>
  <div class="login">
    <header class="flex space-between align-center">
      <img :src="require('../assets/logo-'+theme+'.svg')" />
      <label class="switch">
        <input v-model="darkMode" type="checkbox">
        <span class="slider" :theme="theme"></span>
      </label>
    </header>
    <main>
      <h1>Hey<span>!</span></h1>
      <h2>Login to your account</h2>
      <p>We are happy to have you back!</p>
      <div class="flex-column gap-2">
        <input placeholder="example@gmail.com"> 
        <input placeholder="Password" type="password">
        <a>Forgot password?</a>
      </div>
    </main>
    <footer>
      <button>Login</button>
      <div>
        Or
      </div>
      <div id="google-login">
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false, 
    };
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
};
</script>

<style>
</style>