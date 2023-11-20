<template>
    <div class="article-item">
      <img :src="articleData.img">
      <h2>{{ articleData.title }}</h2>
      <p>{{ articleData.anons }}</p>
      <button @click="showFullArticle(articleData.id)">Читать детальнее</button>
    </div>
</template>

<script>
export default {
  components: {

  },
  emits: ['show-full-article'],
  data() {
    return {
      fullArticle: false,
    }
  },
  props: {
    articleData: {},
  },
  methods: {
    showFullArticle(id) {
      this.fullArticle = true
      this.$emit('show-full-article', this.fullArticle, id);
    }
  }
}
</script>

<style>
.article-item {
  width: 30%;
  min-height: 500px;
  background-color: rgb(162, 158, 153);
  margin-top: 100px;
  border-radius: 10px;
}

.article-item img {
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.article-item h2 {
  margin-top: 10px;
  margin-left: 10px;
}

.article-item p {
  margin-top: 20px;
  margin-left: 10px;
}

.article-item button {
  margin-top: 30px;
  margin-left: 10px;
  background-color: rgba(181, 28, 28, 0.903);
  height: 40px;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: all 500ms ease;
}

.article-item button:hover {
  background-color: rgba(138, 24, 24, 0.903);
}
</style>