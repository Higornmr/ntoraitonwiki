<template>
    <div class="w-full flex flex-wrap gap-3 justify-center items-center">
      <button 
      class="px-4 py-1 rounded-md pointer bg-[#DCE0E0] text-[#008b8b] text-lg text-center flex justify-center font-ninja transition-transform duration-200 ease-in-out hover:shadow-custom-color hover:text-base"
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
  