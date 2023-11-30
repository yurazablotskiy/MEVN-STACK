import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import articleRouter from './routes/articleRoutes.js';
import commentRouter from './routes/commentRoutes.js';

const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(cors(
     origin: ["https://article-site-server.vercel.app
"],
  methods: ["POST","GET"],
  credentials: true
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Підключення до бази даних
const urlMongoDB = process.env.MONGODB_URI || 'mongodb+srv://dbYura:x90KglAoIfTKjW1x@cluster0.wq8ibv3.mongodb.net/blog?retryWrites=true&w=majority';
connect(urlMongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Ви підключились до бази даних');
  })
  .catch((err) => {
    console.error('Помилка підключення до бази даних:', err.message);
    process.exit(1); // Завершення процесу у випадку помилки підключення
  });

// Роутери
app.use('/', articleRouter);
app.use('/', commentRouter);

// Головний маршрут
app.get('/', (req, res) => {
  res.send('Сервер працює...');
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});
