<template>
  <div class="product-list">
    <ProductCard
      v-for="product in products"
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
  components: {
    ProductCard
  },

  data() {
    return {
      products: [
        {
          id: 1,
          name: "Смартфон Samsung Galaxy S23",
          description: "Сучасний смартфон Samsung",
          price: 35000,
          image: "https://img.freepik.com/free-photo/white-cell-phone-box-background_58702-4721.jpg"
        },
        {
          id: 2,
          name: "Ноутбук Apple MacBook Air M2",
          description: "Потужний ноутбук для роботи та навчання",
          price: 58000,
          image: "https://files.foxtrot.com.ua/PhotoNew/img_0_58_22150_0_1_638012706724501157.jpg"
        },
        {
          id: 3,
          name: "Бездротові навушники Sony",
          description: "Якісний звук без дротів",
          price: 7800,
          image: "https://cdn.comfy.ua//media/catalog/product/w/h/wh-ch520_blue01_m.jpg"
        },
        {
          id: 4,
          name: "Механічна клавіатура HyperX",
          description: "Зручна клавіатура для роботи та ігор",
          price: 4500,
          image: "https://img.freepik.com/free-photo/top-view-keyboard-mouse-arrangement_23-2149386333.jpg"
        },
        {
          id: 5,
          name: "Смарт-годинник Apple Watch Series 9",
          description: "Сучасний розумний годинник",
          price: 17000,
          image: "https://img.freepik.com/free-photo/modern-sport-adult-hand-lifestyle_1127-2745.jpg"
        },
        {
          id: 6,
          name: "Портативна колонка JBL Series 1",
          description: "Компактна колонка з якісним звуком",
          price: 5200,
          image: "https://img.freepik.com/free-photo/still-life-tech-device_23-2150722602.jpg"
        },
        {
          id: 7,
          name: "Телевізор Samsung 4K QLED",
          description: "Великий телевізор з якісним зображенням",
          price: 28000,
          image: "https://img.freepik.com/free-photo/landscape-nature-scene-tv-appliance-generate-ai_188544-12122.jpg"
        },
        {
          id: 8,
          name: "Фітнес-браслет Xiaomi Mi Band 7",
          description: "Зручний браслет для відстеження активності",
          price: 1800,
          image: "https://img.freepik.com/free-photo/futuristic-virtual-reality-headset-illuminates-dark-studio-shot-generated-by-ai_188544-13298.jpg"
        }
      ]
    };
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