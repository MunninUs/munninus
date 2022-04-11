<template>
  <div class="flex-column space-between align-center gap-2">
    <h1>{{ slide.title }}</h1>
    <img :src="require(`../assets/${slide.image}-${theme}.svg`)" />
    <p>
      {{ slide.text }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["slide"],
  computed:{
    theme(){
      return this.$store.getters['GET_THEME']
    }
  }
};
</script>

<style>
</style>