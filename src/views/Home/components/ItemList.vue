<template>
    <ul class="list-none flex flex-wrap gap-4 p-0 m-0 px-3 justify-center">
      <li 
        class="p-4 mb-4 rounded-lg shadow-xl shadow-gray-400 sm:w-[420px] w-[300px]  bg-[#EDEDED]"
        v-for="item in items" :key="item.id"
      >
        <div class="h-[90px] w-[90px]">
            <img class="mb-4 w-full h-full rounded-md" :src="item.image" :alt="item.alt">
        </div>
        <div class="flex text-lg font-ninja"><h3>Nome do item: <span class="text-lg font-sans">  {{ item.name }}</span> </h3></div>
        <div class="flex text-lg font-ninja"><h3>Status do item: <span class="text-lg font-sans">  {{ item.status }}</span> </h3></div>
        <div class="flex text-lg font-ninja"><h3>Peso do item: <span class="text-lg font-sans">  {{ item.weighs }}</span> </h3></div>
        <div class="flex text-lg font-ninja"><h3>Atributos: <span class="text-lg font-sans">  {{ item.attributes }}</span> </h3></div>
        <div class="flex text-lg font-ninja"><h3>Dropa do: <span class="text-lg font-sans">  {{ item.drop }}</span> </h3> </div>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  