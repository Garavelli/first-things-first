<template>
  <button @click="handleClick()" :style="{background: color}">{{ text }}</button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      text: String,
      color: String
    },
    methods: {
      handleClick() {
        console.log("click")
      }
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
  }

  button:hover {
    filter: sepia();
  }
</style>