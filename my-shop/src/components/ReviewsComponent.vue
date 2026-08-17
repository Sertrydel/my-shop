<template>
    <div class="reviews">
        <h2>Відгуки</h2>

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
            reviews: []
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
            }
        });
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