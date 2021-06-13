<template>
  <button @click="this.$emit('btn-click')" :style="{background: color}">{{ text }}</button>
</template>

<script lang="ts">
  export default {
    name: 'Button',
    props: {
      text: String,
      color: String
    }
  } 
  
</script>

<style scoped>
  button {
    width: 100px;
    height: 30px;
    border: none;
    background: rgb(15, 15, 15);
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: all 200ms ease-in-out;
  }

  button:hover {
    filter: brightness(1.2);
  }
</style>