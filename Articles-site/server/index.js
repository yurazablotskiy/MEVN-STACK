import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import articleRouter from './routes/articleRoutes.js';
import commentRouter from './routes/commentRoutes.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connect('mongodb+srv://dbYura:x90KglAoIfTKjW1x@cluster0.wq8ibv3.mongodb.net/blog?retryWrites=true&w=majority')
  .then(() => {
    console.log('Вы подключились к БД');
  })
  .catch((err) => {
    throw err;
  });

app.use('/', articleRouter, commentRouter);

app.get('/', (req, res) => {
  res.send('Сервер працює...');
});

app.listen(3000, () =>
  console.log('Сервер запущен по адресу http://localhost:3000')
);
