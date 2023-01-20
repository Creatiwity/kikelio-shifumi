<template>
  <div class="result">
    <WinLoose :player="player1" for-player="p1" :win="true" />
    <WinLoose :player="player2" for-player="p2" :win="false" />
  </div>
</template>

<script lang="ts" setup>
import PlayerSide from "@/components/PlayerSide.vue";
import WinLoose from "@/components/WinLoose.vue";

const player1 = {
  name: "Player 1",
  img: "snowBoss",
  background: "snowBg",
  life: 100,
};

const player2 = {
  name: "Player 2",
  img: "jungleBoss",
  background: "jungleBg",
  life: 100,
};
</script>

<style lang="scss">
.result {
  width: 100%;
  height: 100%;
}
</style>
