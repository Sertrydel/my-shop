<template>
  <div class="cart">
    <h2>Кошик покупок</h2>

    <p v-if="cartItems.length === 0">
      Кошик порожній
    </p>

    <ul v-else>
      <li
        v-for="(item, index) in cartItems"
        :key="index"
      >
        <img
          :src="item.image"
          :alt="item.name"
          width="50"
        />

        <span>
          {{ item.name }} - {{ item.price }} грн
        </span>

        <button @click="removeItem(index)">
          Видалити
        </button>
      </li>
    </ul>

    <p v-if="cartItems.length > 0">
      Загальна сума: {{ totalPrice }} грн
    </p>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "ManageCart",

  setup() {
    const cartItems = inject("cartItems");
    const totalPrice = inject("totalPrice");
    const removeItem = inject("removeItem");

    return {
      cartItems,
      totalPrice,
      removeItem
    };
  }
};
</script>

<style scoped>
.cart {
  padding: 20px;
}

.cart h2 {
  text-align: center;
  margin-bottom: 20px;
}

.cart ul {
  list-style: none;
  padding: 0;
}

.cart li {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.cart img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
}

.cart button {
  margin-left: auto;
  padding: 8px 15px;
  border: none;
  border-radius: 6px;
  background-color: #dc3545;
  color: white;
  cursor: pointer;
}

.cart button:hover {
  background-color: #b02a37;
}
</style>