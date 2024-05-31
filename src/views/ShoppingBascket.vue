<template>
  <div>
    <ItemDisplay :variable="newValue" :variable2="secondValue" :variable3="thirdValue" :icon_type="icon_type"></ItemDisplay>
  </div>
</template>

<script>
import { ref } from 'vue';
import ItemDisplay from '@/components/ItemDisplay.vue';

export default {
  name: 'shopping_basket',
  components: {
    ItemDisplay
  },
  setup() {
    const newValue = ref('SHOPPING BASKET');
    const secondValue = ref('Discover Dhouha and add items to your cart');
    const thirdValue = ref('CONTINUE SHOPPING');
    const icon_type = ref('fas fa-shopping-basket');

    const changeValue = () => {
      newValue.value = 'newValue';
    };

    return {
      newValue,
      secondValue,
      thirdValue,
      changeValue,
      icon_type
    };
  }
};
</script>
