<template>
  <div class="orderContainer">
    <Button text="order by Date" color="whitesmoke" textColor="black" @btn-click="$emit('change-order', 'day')"/>
    <Button text="order by Task" color="whitesmoke" textColor="black" @btn-click="$emit('change-order', 'text')"/>
    <Button text="order by Reminder" color="whitesmoke" textColor="black" @btn-click="$emit('change-order', 'reminder')"/>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from './Button.vue';


export default defineComponent({
  name: 'Ordering',
  components: {
    Button
  },
  setup() {
    
  },
  emits: ['change-order']
})
</script>

<style scoped>

  .orderContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 20px;

  }
</style>