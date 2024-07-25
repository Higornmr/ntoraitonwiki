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

import helmetList from '../../mock/helmets';
import armorList from '../../mock/armors';
import legsList from '../../mock/legs';
import bootsList from '../../mock/boots';
import necklacesList from '../../mock/necklaces';
import ringsList from '../../mock/rings';
import swordsList from '../../mock/swords';
import clubsList from '../../mock/clubs';
import distancesList from '../../mock/distances';
import shieldsList from '../../mock/shields';

export default {
  components: {
    FilterButtons,
    ItemList
  },
  data() {
    return {
      buttons: ['Helmet', 'Armor', 'Legs', 'Boots', 'Necklaces', 'Rings', 'Swords', 'Clubs', 'Distances', 'Shields'],
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
        case 2:
          this.items = legsList;
          break;
        case 3:
          this.items = bootsList;
          break;
        case 4:
          this.items = necklacesList;
          break;
        case 5:
          this.items = ringsList;
          break;
        case 6:
          this.items = swordsList;
          break;
        case 7:
          this.items = clubsList;
          break;
        case 8:
          this.items = distancesList;
          break;
        case 9:
          this.items = shieldsList;
          break;
        // Adicione cases para as outras listas...
        default:
          this.items = [];
      }
    }
  }
};
</script>
