<template>
  <form class="comments-form" @submit.prevent="addComment">
    <h3>Оставьте комментарий</h3>
    <input v-model="userName" type="text" placeholder="Введите имя">
    <textarea v-model="userText" placeholder="Введите сообщение"></textarea>
    <button>Добавить</button>
  </form>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      userName: '',
      userText: '',
      id: null
    }
  },
  props: {
    pageId: {},
  },
  mounted() {
    this.id = this.pageId
  },
  methods: {
    addComment() {
      this.$emit('add-post', this.userName, this.userText, this.id)
      this.userName = '';
      this.userText = '';
    }
  }
}
</script>

<style>
.comments-form button {
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

.comments-form h3 {
  margin-top: 20px;
  font-size: 22px;
  margin-bottom: 10px;
}

.comments-form input,
textarea {
  margin-top: 10px;
  width: 650px;
  height: 50px;
  border-radius: 5px;
  border: none;
  box-shadow: 1px 2px rgba(138, 24, 24, 0.229);
  resize: none;
  font-size: 16px;
  padding: 10px;
  outline: none;
}

.comments-form textarea {
  height: 100px;
  resize: none;
  display: block;
}
</style>