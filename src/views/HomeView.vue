<template>
  <div class="welcome">
    <button @click="changeTheme()">Change theme</button>
    <header>
      <img :src="require('../assets/logo-'+theme+'.svg')" />
    </header>
    <main class="align-center flex-column">
      <div class="flex-column space-between align-center gap-2">
        <h1>Plan your day</h1>
        <img :src="require('../assets/plan-'+theme+'.svg')" />
        <p>
          Plan your day and save your incredible ideas in the fastest away and
          format possible.
        </p>
      </div>
      <div class="flex gap-1 margin-top-2">
        <div class="circle selected"></div>
        <div class="circle"></div>
      </div>
    </main>
    <footer>
      <button>Next</button>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
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
      ],
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
