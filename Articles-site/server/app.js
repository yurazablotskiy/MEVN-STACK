import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import articleRouter from './routes/articleRoutes.js';
import commentRouter from './routes/commentRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connect('mongodb+srv://dbYura:x90KglAoIfTKjW1x@cluster0.wq8ibv3.mongodb.net/blog?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
  .catch((err) => {
    throw err;
  });

app.use('/', articleRouter);
app.use('/', commentRouter);

app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);
