<template>
  <Header/>

  <article>
    <Articles/>
  </article>

  <Footer/>
</template>

<script>
import Header from './components/Header.vue';
import Articles from './components/Articles.vue';
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Articles,
    Footer,
  },
  data() {
    return {

    }
  },
}
</script>

<style>
* {
  font-family: sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

article {
  min-height: 100vh;
  background-color: rgb(202, 197, 191);
  padding-left: 150px;
  padding-right: 150px;
  padding-bottom: 100px;
}
</style>

