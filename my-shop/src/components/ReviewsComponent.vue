<template>
    <div class="reviews">
        <h2>Відгуки</h2>

        <form @submit.prevent="addReview" class="review-form">
            <input v-model="newReview.Name" type="text" placeholder="Ваше ім'я" required />

            <select v-model="newReview.Rating" required>
                <option value="" disabled>Оберіть рейтинг</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="2">⭐⭐</option>
                <option value="1">⭐</option>
            </select>

            <textarea v-model="newReview.Comment" placeholder="Ваш коментар" required></textarea>

            <button type="submit">Додати відгук</button>
        </form>

        <table>
            <thead>
                <tr>
                    <th>Ім'я</th>
                    <th>Рейтинг</th>
                    <th>Коментар</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(review, index) in reviews" :key="index">
                    <td>{{ review.Name }}</td>
                    <td>{{ review.Rating }}</td>
                    <td>{{ review.Comment }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Papa from "papaparse";

export default {
    name: "ReviewsComponent",

    data() {
        return {
            reviews: [],

            newReview: {
                Name: "",
                Rating: "",
                Comment: ""
            }
        };
    },

    created() {
        const csvContent = `Name,Rating,Comment
Ілля,5,Дуже хороший товар!
Андрій,4,Мені сподобалося.
Вікторія,5,Все чудово!
Ростислав,3,Нормальний товар.`;

        Papa.parse(csvContent.trim(), {
            header: true,
            complete: (result) => {
                this.reviews = result.data;

                const savedReviews = localStorage.getItem("reviews");

                if (savedReviews) {
                    this.reviews.push(...JSON.parse(savedReviews));
                }
            }
        });
    },

    methods: {
        addReview() {
            const review = {
                Name: this.newReview.Name,
                Rating: this.newReview.Rating,
                Comment: this.newReview.Comment
            };

            this.reviews.push(review);

            const savedReviews =
                JSON.parse(localStorage.getItem("reviews")) || [];

            savedReviews.push(review);

            localStorage.setItem(
                "reviews",
                JSON.stringify(savedReviews)
            );

            this.newReview = {
                Name: "",
                Rating: "",
                Comment: ""
            };
        }
    }
};
</script>

<style scoped>
.reviews {
    width: 100%;
    margin: 30px auto;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

.review-form {
    width: 90%;
    margin: 0 auto 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.review-form input,
.review-form select,
.review-form textarea {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
}

.review-form textarea {
    min-height: 100px;
    resize: vertical;
}

.review-form button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: white;
    font-size: 16px;
    cursor: pointer;
}

.review-form button:hover {
    background-color: #555;
}

table {
    width: 90%;
    margin: 0 auto;
    border-collapse: collapse;
}

th,
td {
    background-color: #f8f9fa;
    padding: 4px;
    border: 1px solid #ddd;
    text-align: left;
}

th {
    font-weight: bold;
}
</style>