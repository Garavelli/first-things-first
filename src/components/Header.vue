<template>
  <header>
    <h1>{{ title }}</h1>
    <Button text='Add task' color="green" />
  </header>
</template>

<script>
  import Button from './Button.vue';
  export default {
    name: 'Header',
    props: {
      title: {
        type: String,
        default: 'Hadouken'
      }
    },
    components: {
      Button
    }
  }
</script>

<style scoped>
  header {
    width: 100%;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
  }
</style>