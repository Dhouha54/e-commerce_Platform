<template>
  <div>
    <ItemDisplay :variable="var1" :variable2="var2" :variable3="var3" :icon_type="icon_type"></ItemDisplay>
  </div>
</template>

<script>
import { ref } from 'vue';
import ItemDisplay from '@/components/ItemDisplay.vue';

export default {
  name: 'wishesItems',
  components: {
    ItemDisplay
  },
  setup() {
    const var1 = ref('WISH LIST');
    const var2 = ref('Log in to see your saved articles');
    const var3 = ref('Log In and register');
    const icon_type = ref('fas fa-heart');

    return {
      var1,
      var2,
      var3,
      icon_type
    };
  }
};
</script>
