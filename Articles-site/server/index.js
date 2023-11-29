import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import articleRouter from './routes/articleRoutes.js';
import commentRouter from './routes/commentRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoUri = process.env.MONGODB_URI || 'mongodb+srv://dbYura:x90KglAoIfTKjW1x@cluster0.wq8ibv3.mongodb.net/blog?retryWrites=true&w=majority';

connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Підключено до БД');
  })
  .catch((err) => {
    console.error('Помилка підключення до БД:', err.message);
    process.exit(1);
  });

app.use(cors({
  origin: ['https://article-site-server.vercel.app'],
  methods: ['POST', 'GET'],
  credentials: true,
}));

app.use('/', articleRouter, commentRouter);

app.get('/', (req, res) => {
  res.send('Сервер працює...');
});

app.listen(PORT, () =>
  console.log(`Сервер запущено на порту ${PORT}`)
);

