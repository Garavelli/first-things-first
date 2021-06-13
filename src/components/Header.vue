<template>
  <header>
    <h1>{{ title }}</h1>
    <Button 
      :text="!showAddTask ? 'New Task' : 'Close'" 
      :color="!showAddTask ? 'green' : 'rgb(250, 52, 52)'" 
      @btn-click="$emit('toggle-add-task');"
    />
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Button from './Button.vue';
  export default defineComponent({
    name: 'Header',
    props: {
      title: {
        type: String,
        default: 'Hadouken'
      },
      showAddTask: Boolean
    },
    components: {
      Button
    }   
  })
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