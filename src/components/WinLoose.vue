<script setup lang="ts">
import type { Player, PlayerType } from "@/types/Players";
import { computed } from "vue";
import PlayerBallon from "./PlayerBallon.vue";

const props = defineProps<{
  player: Player;
  forPlayer: PlayerType;
  win: boolean;
}>();
const bg = computed(
  () =>
    new URL(
      `/src/assets/images/boss/${props.player.background}.png`,
      import.meta.url
    ).href
);
</script>
<template>
  <div
    class="win-loose"
    :style="`background-image: url(${bg})`"
    :class="forPlayer"
  >
    <div class="win-loose-player">
      <img :src="`/src/assets/images/text/logoWon.png`" v-if="win" />
      <img :src="`/src/assets/images/text/logoLost.png`" v-if="!win" />
      <PlayerBallon :player="props.player" />
    </div>
  </div>
</template>
<style lang="scss">
.win-loose {
  width: 100%;
  height: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column-reverse;
  position: relative;

  &.p1 {
    transform: rotate(180deg);
  }

  .win-loose-player {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    transform: translate(-50%, -50%) rotate(180deg);
  }
}
</style>
