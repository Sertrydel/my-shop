 <template>
  <footer class="footer">
    <div class="footer-section">
      <h3>Контакти</h3>
      <p>Email: sertrydel@gmail.com</p>
      <p>Телефон: +380 52 42 14 88</p>
    </div>

    <div class="footer-section">
      <h3>Посилання</h3>
      <a href="#">Про нас</a>
      <a href="#">Доставка</a>
      <a href="#">Оплата</a>
    </div>

    <div class="footer-section">
      <h3>Я завжди на зв'язку</h3>
      <p>Дякую, що обираєте наш магазин!</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
};
</script>

<style scoped>
.footer {
  margin-top: 40px;
  padding: 30px;
  background-color: #f0f4ff;
  border-top: 2px solid #007bff;
  display: flex;
  justify-content: space-around;
  gap: 30px;
  text-align: center;
}

.footer-section {
  flex: 1;
}

.footer-section h3 {
  color: #007bff;
  margin-bottom: 15px;
}

.footer-section p {
  margin: 8px 0;
}

.footer-section a {
  display: block;
  color: #333;
  text-decoration: none;
  margin: 8px 0;
}

.footer-section a:hover {
  color: #007bff;
}
</style>