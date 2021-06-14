<template>
  <transition-group name="tasksList" tag="div">
    <div v-for="task in orderedTasks" :key="task.id">    
      <Task 
        @delete-task="$emit('delete-task', task.id)" 
        @toggle-reminder="$emit('toggle-reminder', task.id)" 
        :task="task"
      />
    </div>
  </transition-group>
</template>

<script lang="ts">
  import Task from './Task.vue';
  import {TaskProps, Order} from '../utils/types'
  import { computed, PropType } from '@vue/runtime-core';
  import { defineComponent } from 'vue';
  export default defineComponent ({
    name: 'Tasks',
    components: {
      Task
    },
    props: {
      tasks: {
        required: true,
        type: Array as PropType<TaskProps[]>
      },
      order: {
        required: true,
        type: String as PropType<Order>
      }
    },
    setup(props) {
      const orderedTasks = computed(() => {
        return [...props.tasks].sort((a, b) => {
          return a[props.order] > b[props.order] ? 1 : -1;
        })
      });

      return { orderedTasks }
    },
    emits: ['delete-task', 'toggle-reminder']
  })
</script>

<style scoped>
.tasksList{
  width: 100%;
}
  .tasksList-move {
    transition: all 400ms;
  }
</style>