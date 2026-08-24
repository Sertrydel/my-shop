<template>
  <div class="manage-products">
    <h1>Керування товарами</h1>

    <input
      v-model="searchQuery"
      type="text"
      placeholder="Пошук товарів..."
      class="search-input"
    />

    <ProductList :products="filteredProducts" />
  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue";

export default {
  name: "ManageProducts",

  components: {
    ProductList
  },

  data() {
    return {
      searchQuery: "",

      products: [
        {
          id: 1,
          name: "Ноутбук",
          description: "Потужний ноутбук для роботи та навчання",
          price: 25000,
          image: "https://files.foxtrot.com.ua/PhotoNew/img_0_58_22150_0_1_638012706724501157.jpg"
        },
        {
          id: 2,
          name: "Смартфон",
          description: "Сучасний смартфон з якісною камерою",
          price: 15000,
          image: "https://img.freepik.com/free-photo/white-cell-phone-box-background_58702-4721.jpg"
        },
        {
          id: 3,
          name: "Навушники",
          description: "Бездротові навушники з гарним звуком",
          price: 3000,
          image: "https://cdn.comfy.ua//media/catalog/product/w/h/wh-ch520_blue01_m.jpg"
        },
        {
          id: 4,
          name: "Клавіатура",
          description: "Зручна клавіатура для комп'ютера",
          price: 2000,
          image: "https://img.freepik.com/free-photo/top-view-keyboard-mouse-arrangement_23-2149386333.jpg"
        }
      ]
    };
  },

  computed: {
    filteredProducts: function () {
      return this.products.filter(function (product) {
        return product.name
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      }.bind(this));
    }
  }
};
</script>

<style scoped>
.manage-products {
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.search-input {
  display: block;
  width: 100%;
  max-width: 500px;
  margin: 0 auto 30px;
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
}

.search-input:focus {
  outline: none;
  border-color: #007bff;
}
</style>