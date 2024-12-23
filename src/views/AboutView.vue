<template>
  <div style="text-align: left;color: red">
    <h1>This is an about page</h1>
  </div>
  <div class="about">
    <WelcomeItem> <h1>This is an about page</h1></WelcomeItem>

  </div>
</template>

<script setup>
  import WelcomeItem from '../components/WelcomeItem.vue'
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-image: url("../assets/img/3ef249213869025.674e318826832.jpg");
    background-size: cover; /* 背景图片覆盖整个容器 */
    background-position: center; /* 图片居中显示 */
    background-repeat: no-repeat; /* 防止图片重复 */
  }
}
</style>
