<template>
  <div class="container">
    <Header title="Task Tracker" @toggle-add-task="toggleAddTask" :showAddTask="showAddTask" />
    <div v-show="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks @delete-task="deleteTask" @toggle-reminder="toggleReminder" :tasks="tasks"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
import AddTask from './components/AddTask.vue'
import {TaskProps} from './utils/types';


export default defineComponent({
  name: 'App',
  components: { // bind them components
    Header,
    Tasks,
    AddTask
  },
  setup() {
    const tasks = ref<TaskProps[]>([]);
    const showAddTask = ref(false);
    return { tasks, showAddTask };
  },
  methods: {
    deleteTask(id: number)  { 
      this.tasks = this.tasks.filter((task: TaskProps) => task.id != id)    
    },
    toggleReminder(id: number) { 
      this.tasks = this.tasks.map((task: TaskProps)=> task.id === id ? {...task, reminder: !task.reminder} : task)    
    },
    addTask(task: TaskProps) {
      this.tasks = [...this.tasks, task]
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
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
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap');

*, *:after, *:before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Karla', sans-serif;
  transition: all 200ms ease-in-out;
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
  justify-content: flex-start;
}

#app {  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
