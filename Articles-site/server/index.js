import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import articleRouter from './routes/articleRoutes.js';
import commentRouter from './routes/commentRoutes.js';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://dbYura:x90KglAoIfTKjW1x@cluster0.wq8ibv3.mongodb.net/blog?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Підключено до БД');
  } catch (err) {
    console.error('Помилка підключення до БД:', err.message);
  }
};
connectToDatabase();

app.use('/', cors(
   origin: ["https://article-site-server.vercel.app
"],
  methods: ["POST","GET"],
  credentials: true
));
app.use('/', articleRouter, commentRouter);

app.get('/', (req, res) => {
  res.send('Сервер працює...');
});

app.listen(3000, () =>
  console.log('Сервер запущено...')
);

