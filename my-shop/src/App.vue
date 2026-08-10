<template>
  <div id="app">
    <ProductCard
      name="Українська вишиванка"
      description="Стильна вишиванка з традиційними орнаментами."
      :price="1500"
      image="https://images.prom.ua/2656644983_vishita-cholovicha-futbolka.jpg"
    />
  </div>
</template>

<script>
import ProductCard from "./components/ProductCard.vue";

export default {
  components: {
    ProductCard
  }
};
</script>