<template>
  <div class="comment-item">
    <div class="comment-name">{{ postData.name }}</div>
    <div class="comment-dscription">{{ postData.text }}</div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {

    }
  },
  props: {
    postData: {
      type: Object,
    },
  }
}
</script>

<style>
.comment-item {
  margin-top: 20px;
  width: 100%;
  min-height: 60px;
  padding: 20px;
  background-color: rgba(144, 210, 79, 0.819);
  border-radius: 5px;
}

.comment-name {
  color: red;
  font-weight: bold;
}

.comment-dscription {
  margin-top: 10px;
}
</style>