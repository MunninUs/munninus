<template>
  <div class="login">
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
      if (this.darkMode) {
        document.body.setAttribute("theme", "light");
        this.darkMode = false;
      } else {
        document.body.setAttribute("theme", "dark");
        this.darkMode = true;
      }
    },
  },
};
</script>

<style>
</style>