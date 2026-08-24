<template>
  
  <div class="product-list">
    <ProductCard
      v-for="product in filteredProducts"
      :key="product.id"
      :name="product.name"
      :description="product.description"
      :price="product.price"
      :image="product.image"
    />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  name: "ProductList",

  components: {
    ProductCard
  },

  data() {
    return {
      searchQuery: ""
    };
  },

  props: {
    products: {
      type: Array,
      required: true
    }
  },

  computed: {
    filteredProducts() {
      const query = this.searchQuery.trim().toLowerCase();

      if (!query) {
        return this.products;
      }

      return this.products.filter(product =>
        product.name.toLowerCase().includes(query)
      );
    }
  }
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>