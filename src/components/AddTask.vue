<template>
  <form @submit="handleSubmit" class="add-form" method="post">
    <div class="form-control">
      <input type="text" name="text" v-model="text" placeholder="Task" />
    </div>
    <div class="form-control">
      <input type="text" name="day" v-model="day" placeholder="Day & Time"/>
    </div>
    <div class="form-control">
      <label>Set reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block">
  </form>
</template>

<script lang="ts">
import {TaskProps} from '../utils/types';

export default {
  name: 'AddTask',
  data() {
    return {
      text: '',
      day: '',
      reminder: false
    }
  },
  methods: {
    handleSubmit(e: Event): void {
      console.log(e)
      e.preventDefault();
      console.log('hi')

      if (!this.text) {
        alert('Please add a task');
        return;
      }

      const newTask: TaskProps = {
        id: Math.floor(Math.random() * 100000),
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      }
      console.log(newTask)
      this.$emit('add-task', newTask);

      this.text = '';
      this.day = '';
      this.reminder = false;
    }
  }

}
</script>

<style scoped>
  .add-form {
    width: 100%;
  }

  .form-control {
    margin: 10px;
    align-items: center;
    position: relative;
    display: flex;
    justify-content: center;
  }
  
  .form-control label {
    padding: 0px;
    margin: 0 10px;
  }

  .form-control input[type=text] {
    margin: 0 5px;
    padding: 8px;
    border-radius: 5px;
    border: none;
    border-bottom: 1px solid olivedrab;
    width: 100%;
    position: relative;
  }

  .form-control input[type=text]:after {
    content: 'Task';
    position: absolute;
    width: 100px;
    right: 5px;
    top: 0px;
    color: black;
    z-index: 89;
  }

  .form-control input[type=text]:focus {
    outline: none;
    border-left: 5px solid olivedrab;
  }

  input[type=submit] {
    width: 100%;
    color: white;
    background-color: rgb(73, 71, 71);
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  
</style>