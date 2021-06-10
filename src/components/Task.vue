<template>
  <div @dblclick="handleDblClick(task.id)" :class="[task.reminder ? 'reminder':'', 'task']">
    <h4> 
      {{ task.text }} 
      <i @click="handleDelete(task.id)" class="fas fa-times"></i>
    </h4>
    <p> {{task.day}} </p>
  </div>
</template>

<script>
  export default {
    name: 'Task',
    props: {
      task: Object
    },
    methods: {
      handleDelete(id) {
        this.$emit('delete-task', id)
      },
      handleDblClick(id) {
        this.$emit('toggle-reminder', id)
      }
    }
  }
</script>

<style scoped>
  .fas {
    color: rgb(252, 75, 44);
  }
  .task {
    background: whitesmoke;
    margin: 4px;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 5px;
  }

  .task.reminder {
    border-right: 5px solid steelblue;
  }
</style>