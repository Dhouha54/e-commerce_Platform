<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Our Categories</h3>
        <router-link :to="{ name: 'AddCategory' }">
          <button class="btn" style="float:right">Add Category</button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div
        v-for="category of categories"
        :key="category.id"
        class="col-xl-4 col-md-6 col-12 pt-3 d-flex"
      >
        <CategoryBox :category="category"> </CategoryBox>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryBox from "../../components/Category/CategoryBox.vue";
export default {
  name: "CategoryDiplay",
  components: { CategoryBox },
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    fetchCategories() {
      fetch('http://localhost:3000/api/categories') 
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch categories');
          }
          return response.json();
        })
        .then(data => {
          // Store the retrieved categories in the data property
          this.categories = data;
          console.log(this.categories)
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
    }
       
  },
  mounted() {
    this.fetchCategories();
  },
};
</script>
<style scoped></style>