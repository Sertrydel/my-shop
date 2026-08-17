<template>
    <div class="reviews">
        <h2>Відгуки</h2>

        <!-- Форма додавання відгуку -->
        <form @submit.prevent="addReview" class="review-form">
            <input v-model="newReview.name" type="text" placeholder="Ваше ім'я" required />

            <select v-model="newReview.rating" required>
                <option value="" disabled>Оберіть рейтинг</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="2">⭐⭐</option>
                <option value="1">⭐</option>
            </select>

            <textarea v-model="newReview.comment" placeholder="Ваш коментар" required></textarea>

            <button type="submit">Додати відгук</button>
        </form>

        <!-- Відображення відгуків -->
        <div class="reviews-list">
            <div v-for="(review, index) in reviews" :key="index" class="review">
                <h3>{{ review.name }}</h3>

                <div class="rating">
                    {{ "⭐".repeat(Number(review.rating)) }}
                </div>

                <p>{{ review.comment }}</p>
            </div>

            <p v-if="reviews.length === 0" class="empty">
                Поки що відгуків немає. Будьте першим!
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ReviewsComponent",

    data() {
        return {
            reviews: [],

            newReview: {
                name: "",
                rating: "",
                comment: ""
            }
        };
    },

    created() {
        const savedReviews = localStorage.getItem("reviews");

        if (savedReviews) {
            this.reviews = JSON.parse(savedReviews);
        }
    },

    methods: {
        addReview() {
            const review = {
                name: this.newReview.name,
                rating: this.newReview.rating,
                comment: this.newReview.comment
            };

            this.reviews.push(review);

            localStorage.setItem("reviews", JSON.stringify(this.reviews));

            this.newReview = {
                name: "",
                rating: "",
                comment: ""
            };
        }
    }
};
</script>

<style scoped>
.reviews {
    width: 90%;
    max-width: 900px;
    margin: 40px auto;
}

h2 {
    text-align: center;
    margin-bottom: 25px;
}

.review-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 35px;
}

.review-form input,
.review-form select,
.review-form textarea {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 6px;
}

.review-form textarea {
    min-height: 100px;
    resize: vertical;
}

.review-form button {
    padding: 10px;
    border: none;
    border-radius: 6px;
    background-color: #333;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

.review-form button:hover {
    background-color: #555;
}

.reviews-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.review {
    padding: 15px;
    background-color: #f8f9fa;
    border-radius: 8px;
    border: 1px solid #ddd;
}

.review h3 {
    margin: 0 0 5px;
}

.rating {
    margin-bottom: 8px;
}

.review p {
    margin: 0;
}

.empty {
    text-align: center;
    color: #777;
}
</style>