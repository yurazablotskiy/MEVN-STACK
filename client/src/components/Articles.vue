<template>
  <div class="article-block">
    <Article v-if="!showValue" v-for="(article, index) in articles" :key="index" :articleData="article"
      v-on:show-full-article="showFullArticle" />
    <ArticleFull v-for="(article, index) in articleOne" :key="index" :articleData="article" v-on:hide-full-article="hideFullArticle" v-if="showValue"/>
  </div>
</template>

<script>
import axios from "axios";

import Article from './Article.vue';
import ArticleFull from './ArticleFull.vue';

export default {
  components: {
    Article,
    ArticleFull,
  },
  data() {
    return {
      showValue: false,
      articles: [],
      articleOne: [],
    }
  },
  async mounted() {
    const loadArticles = await axios.get("https://article-site-server.vercel.app/get-articles");
    this.articles = loadArticles.data; 
  },
  methods: {
    showFullArticle(showValue, id) {
      this.showValue = showValue;
      this.articleOne = this.articles.filter(article => article.id == id);
    },
    hideFullArticle(showValue) {
      this.showValue = showValue;
    }
  }
}
</script>

<style>
.article-block {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
