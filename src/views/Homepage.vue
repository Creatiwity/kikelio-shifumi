<script lang="ts" setup></script>

<template>
  <div class="home-page">
    <img src="@/assets/images/home/splashscreenLogo.png" class="image" />
    <router-link to="/game">
      <img src="@/assets/images/button/play.png" />
    </router-link>
  </div>
</template>

<style lang="scss">
body {
  background-image: url("@/assets/images/home/homeBg.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .image {
    transform: scale(0.8);
  }
}
</style>
