import { Schema, model } from "mongoose";

const ArticlesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  pageId: {
    type: Number,
    required: true
  }
})

export const Comments = model('comments', ArticlesSchema);