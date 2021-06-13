

<template>
  <div @dblclick="handleDblClick(task.id)" :class="[task.reminder ? 'reminder':'', 'task']">
    <h4> 
      {{ task.text }} 
    </h4>
    <div class="close">
      <i @click="handleDelete(task.id)" class="fas fa-times"></i>
    </div>
    <p> {{task.day}} </p>
  </div>
</template>

<script lang="ts">
  import { PropType } from "vue"
  import { defineComponent } from "vue"
  import { TaskProps } from "../utils/types"
  export default defineComponent({
    name: 'Task',
    props: {
      task: {
        required: true,
        type: Object as PropType<TaskProps>
      }
    },
    methods: {
      handleDelete(id: number) {
        this.$emit('delete-task', id)
      },
      handleDblClick(id: number) {
        this.$emit('toggle-reminder', id)
      }
    }
  })
</script>

<style scoped>
  .fas {
    color: rgb(252, 75, 44);
  }

  .close{
    position: absolute;
    right: 3px;
    top: 3px;
    border: 1px solid gainsboro;
    border-radius: 5px;
    height: 20px;
    width: 20px;
    display: grid;
    place-content: center;
  }

  .close:hover {
    transform: scale(1.1);
  }

  .task {
    background: whitesmoke;
    margin: 4px;
    padding: 5px 10px;
    min-height: 70px;
    cursor: pointer;
    border-radius: 5px;
    border-right: 5px solid transparent;
    position: relative;
  }

  .task h4 {
    display: inline-block;
    max-width: 95%;
  }

  .task.reminder {
    border-right-color: green;
  }
</style>