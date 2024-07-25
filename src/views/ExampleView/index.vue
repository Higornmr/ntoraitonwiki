<template>
  <div class="flex-1 flex flex-col gap-14 py-10 items-center bg-white">
    <FilterButtons :buttons="buttons" @filter="fetchItems" />
    <div class="w-full max-w-7xl border border-gray-800"></div>
    <ItemList :items="items" />
  </div>
</template>

<script>
import FilterButtons from './components/FilterButtons.vue';
import ItemList from './components/ItemList.vue';

import helmetList from '../../mock/helmet';
import armorList from '../../mock/armor';

export default {
  components: {
    FilterButtons,
    ItemList
  },
  data() {
    return {
      buttons: ['Helmet', 'Armor'],
      items: []
    };
  },
  methods: {
    fetchItems(index) {
      switch (index) {
        case 0:
          this.items = helmetList;
          break;
        case 1:
          this.items = armorList;
          break;
        // Adicione cases para as outras listas...
        default:
          this.items = [];
      }
    }
  }
};
</script>
