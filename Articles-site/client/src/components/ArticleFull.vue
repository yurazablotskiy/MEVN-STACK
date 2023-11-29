<template>
  <div class="item-full">
    <button @click="hideFullArticle"> Назад ко всем статьям </button>
    <img :src="articleData.img">
    <h2>{{ articleData.title }}</h2>
    <p>
      {{ articleData.full_text }}
    </p>
  </div>

  <div class="comments-block">
    <h3>Комментарии ({{ postData.length }})</h3>
    <CommentItem v-for="(comment, index) in postData" :key="index" :postData="comment" />
    <CommentsForm :pageId="articleData.id" v-on:add-post="addComment" />
  </div>
</template>

<script>
import axios from "axios";

import CommentItem from './CommentItem.vue';
import CommentsForm from './CommentsForm.vue';

export default {

  components: {
    CommentItem,
    CommentsForm
  },
  emits: ['hide-full-article'],
  data() {
    return {
      postData: [],
      showValue: true,
    }
  },
  props: {
    articleData: {},

  },
  async mounted() {
    const getPosts = await axios.get("http://localhost:3000/get-posts");
    this.postData = getPosts.data.filter(post => post.pageId == this.articleData.id);
  },
  methods: {
    hideFullArticle() {
      this.fullArticle = false
      this.$emit('hide-full-article', this.fullArticle);
    },
    async addComment(name, text, id) {
      await axios.post(`http://localhost:3000/add-post/?name=${name}&text=${text}&pageId=${id}`);
      this.postData.unshift({ name, text, pageId: id })
    }
  }
}
</script>

<style>
.item-full {
  height: 600px;
}

.item-full button {
  margin-top: 30px;
  background-color: rgba(181, 28, 28, 0.903);
  height: 40px;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: all 500ms ease;
}

button:hover {
  background-color: rgba(138, 24, 24, 0.903);
}

.item-full img {
  display: block;
  margin-top: 35px;
  width: 1200px;
  height: 40%;
  object-fit: cover;
  border-radius: 10px;
}

.item-full h2 {
  margin-top: 20px;
  font-size: 32px;
}

.item-full p {
  line-height: 35px;
  margin-top: 20px;
  font-size: 20px;
}

.comments-block {
  width: 50%;
  margin-top: 70px;
}
</style>