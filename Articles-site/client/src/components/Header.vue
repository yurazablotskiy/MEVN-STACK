<template>
  <header>
    <div class="overlay">
      <nav>
        <div class="logo">Web Blog</div>
      </nav>
      <div class="heading-block">
        <h1>Новостной сайт</h1>
        <p>Полезные статьи на разные темы</p>
      </div>
    </div>
  </header>
</template>

<script>

</script>

<style>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.379);
}

header {
  position: relative;
  height: 100vh;
  background: url('../img/sky.jpg');
  padding-top: 20px;
  padding-left: 40px;
}

header nav .logo {
  margin-top: 20px;
  margin-left: 20px;
  font-size: 32px;
  color: white;
}

.heading-block {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.heading-block h1 {
  color: white;
  font-size: 38px;
  font-weight: 300;
}

.heading-block p {
  margin-top: 10px;
  color: white;
  font-size: 16px;
  font-weight: 300;
}
</style>