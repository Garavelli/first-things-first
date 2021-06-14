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
import { ref } from '@vue/reactivity';
import {TaskProps} from '../utils/types';
import { EmitsOptions, SetupContext } from 'vue';

export default {
  name: 'AddTask',
  setup(props: Object, context:SetupContext<EmitsOptions>) {
    const text = ref('');
    const day = ref('');
    const reminder = ref(false);
    console.log(typeof props)
    const handleSubmit = (e: Event): void  => {
      console.log(e)
      e.preventDefault();
      console.log('hi')

      if (!text) {
        alert('Please add a task');
        return;
      }

      const newTask: TaskProps = {
        id: Math.floor(Math.random() * 100000),
        text: text.value,
        day: day.value,
        reminder: reminder.value,
      }     

      context.emit('add-task', newTask);

      text.value = '';
      day.value = '';
      reminder.value = false;     
    } // end handleSubmit

    return { text, day, reminder, handleSubmit }
  }

}
</script>

<style scoped>
  .add-form {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    margin: 10px auto;
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
    width: 60%;
    color: white;
    background-color: rgb(73, 71, 71);
    padding: 10px;
    border: none;
    cursor: pointer;
    align-self: center;
    border-radius: 10px;
  }
  
</style>