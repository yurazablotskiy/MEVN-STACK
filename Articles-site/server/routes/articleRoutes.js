import express from 'express';
import { Articles } from '../models/article.js';

const articleRouter = express.Router();

articleRouter.get('/api/get-articles', async (req, res) => {
  try {
    const getArticles = await Articles.find().sort({ _id: 1 });
    if (!getArticles) throw new Error('Статьи не найдены');
    res.status(200).send(getArticles);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

export default articleRouter;
