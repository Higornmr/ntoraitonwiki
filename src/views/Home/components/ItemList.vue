<template>
    <ul class="list-none p-0 m-0 max-w-[800px]">
      <li 
        class="border border-gray-300 p-4 mb-4 rounded-lg"
        v-for="item in items" :key="item.id"
      >
        <div class="h-[90px] w-[90px]">
            <img class="mb-4 w-full h-full rounded-md" :src="item.image" :alt="item.alt">
        </div>
        <div class="flex text-2xl"><h3>Nome do item: <span class="text-lg">  {{ item.name }}</span> </h3></div>
        <div class="flex text-2xl"><h3>Status do item: <span class="text-lg">  {{ item.status }}</span> </h3></div>
        <div class="flex text-2xl"><h3>Peso do item: <span class="text-lg">  {{ item.weighs }}</span> </h3></div>
        <div class="flex text-2xl"><h3>Atributos: <span class="text-lg">  {{ item.attributes }}</span> </h3></div>
        <div class="flex text-2xl"><h3>Dropa do: <span class="text-lg">  {{ item.drop }}</span> </h3> </div>
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
  