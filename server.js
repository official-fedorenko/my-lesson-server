const express = require("express"); // Подключаем библиотеку express
const app = express(); // Создаём приложение (сервер)
const port = process.env.PORT || 3000; // Берём порт из окружения или 3000

app.use(express.static("public")); // Разрешаем серверу отдавать все файлы из папки public

app.get("/", (req, res) => {
  // Если пользователь заходит на корень сайта (/)
  res.send("Сервер работает!"); // Отправляем текст: "Сервер работает!"
});

app.listen(port, () => {
  // Запускаем сервер на нужном порту
  console.log(`Сервер запущен на порту ${port}`);
});
