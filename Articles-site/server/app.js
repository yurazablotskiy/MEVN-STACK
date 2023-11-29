import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import articleRouter from './routes/articleRoutes.js';
import commentRouter from './routes/commentRoutes.js';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connect('mongodb://127.0.0.1:27017/blog')
  .then(() => {
    console.log('Вы подключились к БД');
  })
  .catch((err) => {
    throw err;
  });

app.use('/', articleRouter);
app.use('/', commentRouter);

app.listen(3000, () =>
  console.log('Сервер запущен по адресу http://localhost:3000')
);
