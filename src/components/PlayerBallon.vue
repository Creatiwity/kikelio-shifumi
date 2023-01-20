<script lang="ts" setup>
import type { Player } from "@/types/Players";
import { computed } from "vue";

const props = defineProps<{ player: Player }>();

const width = computed(() => (150 * props.player.life) / 100);
const src = computed(
  () =>
    new URL(`/src/assets/images/boss/${props.player.img}.png`, import.meta.url)
      .href
);
</script>
<template>
  <div class="player-ballon">
    <img class="player-ballon-img" :src="src" :style="`width: ${width}px`" />
  </div>
</template>
<style class="scss">
.player-ballon-img {
  object-fit: contain;
}
</style>
