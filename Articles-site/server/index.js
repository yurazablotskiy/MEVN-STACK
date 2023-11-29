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

// Використання змінної середовища для MongoDB URI
const mongoUri = process.env.MONGODB_URI || 'mongodb+srv://dbYura:x90KglAoIfTKjW1x@cluster0.wq8ibv3.mongodb.net/blog?retryWrites=true&w=majority';

connect(mongoUri)
  .then(() => {
    console.log('Підключено до БД');
  })
  .catch((err) => {
    throw err;
  });

app.use('/api/', cors()); // CORS для шляхів, починаючи з /api/
app.use('/api/', articleRouter, commentRouter);

app.get('/', (req, res) => {
  res.send('Сервер працює...');
});

app.listen(process.env.PORT || 3000, () =>
  console.log('Сервер запущено...')
);

