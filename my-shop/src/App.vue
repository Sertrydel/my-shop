<template>
  <div id="app">
    <ProductList />

    <FooterComponent />
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  components: {
    ProductList,
    FooterComponent
  }
};
</script>