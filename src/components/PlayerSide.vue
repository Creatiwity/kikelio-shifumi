<script setup lang="ts">
import type { Player, PlayerType } from "@/types/Players";
import { computed } from "vue";
import LifeBar from "./LifeBar.vue";
import PlayerBallon from "./PlayerBallon.vue";
import ToolBar from "./ToolBar.vue";

const props = defineProps<{ player: Player; forPlayer: PlayerType }>();
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
    class="player-side"
    :style="`background-image: url(${bg})`"
    :class="forPlayer"
  >
    <div class="player-side-player">
      <LifeBar :life-level="props.player.life" />
      <PlayerBallon :player="props.player" />
    </div>
    <ToolBar class="player-side-toolbar" :for-player="forPlayer" />
  </div>
</template>
<style lang="scss">
.player-side {
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

  .player-side-player {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    transform: translate(-50%, -50%) rotate(180deg);
  }

  .player-side-toolbar {
  }
}
</style>
