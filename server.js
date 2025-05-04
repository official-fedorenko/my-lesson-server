const express = require("express"); // Подключаем библиотеку express
const cors = require("cors"); // Подключаем библиотеку cors
const app = express(); // Создаём приложение (сервер)
const port = process.env.PORT || 3000; // Берём порт из окружения или 3000

app.use(cors()); // Подключаем библиотеку cors
app.use(express.static("public")); // Разрешаем серверу отдавать все файлы из папки public

app.get("/", (req, res) => {
  // Если пользователь заходит на корень сайта (/)
  res.send("Сервер работает!"); // Отправляем текст: "Сервер работает!"
});

const products = [
  {
    id: 1,
    name: "Кофейная кружка",
    price: 9.99,
    description: "Керамическая кружка объёмом 350 мл.",
  },
  {
    id: 2,
    name: 'Футболка "webShop"',
    price: 19.99,
    description: "Мягкая хлопковая футболка с логотипом проекта.",
  },
  {
    id: 3,
    name: "Эко-сумка",
    price: 7.5,
    description: "Многоразовая тканевая сумка для покупок.",
  },
  {
    id: 4,
    name: "Блокнот",
    price: 4.99,
    description: "Блокнот в клетку на 100 страниц.",
  },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  // Запускаем сервер на нужном порту
  console.log(`Сервер запущен на порту ${port}`);
});
