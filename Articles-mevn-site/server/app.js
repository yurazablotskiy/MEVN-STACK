import express from 'express';
import { connect } from 'mongoose';
const app = express();
import cors from 'cors';
import bodyParser from 'body-parser';

import { Articles } from './models/article.js';
import { Comments } from './models/comment.js';

app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connect('mongodb://127.0.0.1:27017/blog?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2')
.then(() => {
  console.log('Вы подключились к БД')
})
.catch(err => {
  throw err;
})

app.get('/articles', async (req, res) => {
  try {
    const getArticles = await Articles.find().sort({ _id: 1 });
    if (!getArticles) throw new Error('Статьи не найдены');
    res.status(200).send(getArticles);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
})

app.post('/add-post', async (req, res) => {
  try {
    const newAddPost = new Comments(req.query);
    const result = await newAddPost.save();
    if (!result) throw new Error('Мы не можем добваить комментарий');
    res.status(200).send('Ok');
  } catch (err) {
    console.log(err);
    res.status(500);
  }
})

app.get('/get-posts', async (req, res) => {
  try {
    const getPosts = await Comments.find().sort({ _id: -1 });
    if (!getPosts) throw new Error('Статьи не найдены');
    res.status(200).send(getPosts);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
})

app.listen(3000, () => console.log('Сервер запущен по адресу http://localhost:3000'))