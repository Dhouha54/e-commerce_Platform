<template>
  <div>
    <!-- For debugging purpose, displaying the value of 'love' -->
     love.value
  </div>
  <div v-if="love" class="wish-list-container">
    <div class="empty-wish-list">
      <p :class="icon_type"></p>
      <h5>YOUR {{ variable }} IS EMPTY</h5>
      <p>{{ variable2 }}</p>
      <button>{{ variable3 }}</button>
    </div>
  </div>
  <div v-else>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h3 class="pt-3">Our Categories</h3>
        </div>
      </div>
      <div class="row">
        <div
          v-for="category in categories"
          :key="category.id"
          class="col-xl-4 col-md-6 col-12 pt-3 d-flex"
        >
          <CategoryBox :category="category"></CategoryBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import CategoryBox from './Category/CategoryBox.vue';

export default {
  props: ['variable', 'variable2', 'variable3', 'icon_type'],
  components: { CategoryBox },
  setup(props) {
    const categories = ref([]);
    const love = ref(true); // Initialize as true

    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/categories');
        if (!response.ok) throw new Error('Failed to fetch categories');
        categories.value = await response.json();
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    watch(() => props.variable, (newVal) => {
      console.log('variable changed:', newVal);
    });

    onMounted(() => {
      fetchCategories();
    });

    return {
      categories,
      love,
      ...props
    };
  }
};
</script>

<style scoped>
.wish-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full viewport height */
  text-align: center;
}

.empty-wish-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
}

h5 {
  font-size: 1.5em;
  margin-bottom: 0.5em;
}

button {
  margin-top: 1em;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border: none;
  background-color: #ff9900;
  color: white;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}
</style>
