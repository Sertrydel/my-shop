<template>
  <main class="about-page">
    <h1>Про нас</h1>
    <p>Ми допомагаємо обирати якісні товари для роботи, навчання та відпочинку.</p>
    <p>Дякуємо, що обираєте наш магазин!</p>
  </main>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 24px;
  text-align: center;
}

.about-page h1 {
  color: #007bff;
}

.about-page p {
  line-height: 1.6;
}
</style>
