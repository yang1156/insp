<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/views/inspiro/Header.vue";
import Footer from "@/views/inspiro/Footer.vue";
</script>

<template>
  <Header></Header>
  <RouterView></RouterView>
  <Footer></Footer>


  <!--  <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="分享、透明" />

        <nav>
          <RouterLink to="/home">浏览灵感</RouterLink>
          <RouterLink to="/about">分享灵感</RouterLink>
          <RouterLink to="/welcome">主页</RouterLink>
        </nav>
      </div>
    </header>
    <body>
    <RouterView></RouterView>
    </body>-->
</template>

<style scoped>
</style>
