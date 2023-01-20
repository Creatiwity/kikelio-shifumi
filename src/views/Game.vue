<script lang="ts" setup>
import PlayerSide from "@/components/PlayerSide.vue";
import { PlayerType } from "@/types/Players";

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
<template>
  <div class="game">
    <PlayerSide :player="player1" :for-player="PlayerType.Player1" />
    <PlayerSide :player="player2" :for-player="PlayerType.Player2" />
  </div>
</template>
<style lang="scss">
.game {
  width: 100%;
  height: 100%;
}
</style>
