import express from 'express';
import { Comments } from '../models/comment.js';

const commentRouter = express.Router();

commentRouter.post('/api/add-post', async (req, res) => {
  try {
    const newAddPost = new Comments(req.query);
    const result = await newAddPost.save();
    if (!result) throw new Error('Мы не можем добваить комментарий');
    res.status(200).send('Ok');
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

commentRouter.get('/api/get-posts', async (req, res) => {
  try {
    const getPosts = await Comments.find().sort({ _id: -1 });
    if (!getPosts) throw new Error('Статьи не найдены');
    res.status(200).send(getPosts);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

export default commentRouter;
