<template>
  <div>
    <div v-for="task in tasks" :key="task.id">    
      <Task @delete-task="$emit('delete-task', task.id)" @toggle-reminder="$emit('toggle-reminder', task.id)" :task="task"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Task from './Task.vue';
  import {TaskProps} from '../utils/types'
  import { PropType } from 'vue';
  export default {
    name: 'Tasks',
    components: {
      Task
    },
    props: {
      tasks: Array as PropType<TaskProps[]>
    },
    emits: ['delete-task', 'toggle-reminder']
  }
</script>