<template>
  <div id="app">
    <ProductList />

    <ReviewsComponent />

    <FooterComponent />
  </div>
</template>

<script>
import ReviewsComponent from "./components/ReviewsComponent.vue";
import ProductList from "./components/ProductList.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  components: {
    ProductList,
    FooterComponent,
    ReviewsComponent
  }
};
</script>
