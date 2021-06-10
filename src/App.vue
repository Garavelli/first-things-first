<template>
  <div class="container">
    <Header  title="Task Tracker" />
    <Tasks @delete-task="deleteTask" @toggle-reminder="toggleReminder" :tasks="tasks"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'

export default defineComponent({
  name: 'App',
  components: { // bind them components
    Header,
    Tasks
  },
  data() { // states
    return {
      tasks: []
    }
  },
  methods: {
    deleteTask(id: number) { 
      this.tasks = this.tasks.filter(task => task.id != id)    
    },
    toggleReminder(id: number) { 
      this.tasks = this.tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task)    
    }
  },
  created() { //useEffect
    this.tasks = [
      {
        id: 70,
        text: 'account fair instance action fight plastic means contain',
        day: '7/9/2067',
        reminder: true,
      },
      {
        id: 11,
        text: 'food fastened trunk determine aloud character flame world',
        day: '2/28/2068',
        reminder: false,
      },
      {
        id: 99,
        text: 'bread drop plus among faster cloud blank bee definition',
        day: '11/21/2076',
        reminder: false,
      },
      {
        id: 2,
        text: 'discussion experiment smoke leave occur alike desk song',
        day: '4/12/2023',
        reminder: true,
      },
      {
        id: 35,
        text: 'statement prepare constantly worse obtain dozen tax',
        day: '1/14/2067',
        reminder: true,
      }
    ]
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@400;500;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Baloo Tammudu 2', cursive;
}

.container {
  width: 90%;
  max-width: 1024px;
  margin: auto auto;
  height: 90vh;
  border: 2px solid lightgray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: center;
  justify-content: center;
}

#app {  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
