import { Schema, model } from "mongoose";

const ArticlesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  anons: {
    type: String,
    required: true
  },
  full_text: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
})

export const Articles = model('articles', ArticlesSchema);