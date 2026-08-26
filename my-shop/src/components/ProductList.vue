<template>
  <div class="product-list">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :name="product.name"
      :description="product.description"
      :price="product.price"
      :image="product.image"
      @add-to-cart="$emit('add-to-cart', product)"
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

  props: {
    products: {
      type: Array,
      required: true
    }
  },

  emits: ["add-to-cart"]
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