<template>
    <div class="w-full flex flex-wrap gap-4 justify-center items-center">
      <button 
      class="border border-gray-900 px-2 py-1 rounded-md pointer bg-[#5CE1E6] text-2xl text-center flex justify-center "
      v-for="(button, index) in buttons" :key="index" @click="filterItems(index)">
        {{ button }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      buttons: {
        type: Array,
        required: true
      }
    },
    methods: {
      filterItems(index) {
        this.$emit('filter', index);
      }
    }
  };
  </script>
  