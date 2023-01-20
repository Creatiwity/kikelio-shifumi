<template>
  <div class="item" @touchstart="test">
    <div class="item-icon">
      <img
        v-if="props.type === 'rock'"
        src="~@/assets/images/weapons/weaponRock.png"
      />
      <img
        v-if="props.type === 'paper'"
        src="~@/assets/images/weapons/weaponPaper.png"
      />
      <img
        v-if="props.type === 'scissor'"
        src="~@/assets/images/weapons/weaponScissor.png"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PlayerType } from "@/types/Players";
import type { Weapon } from "@/types/Weapon";

const props = defineProps<{
  type: Weapon;
  forPlayer: PlayerType;
}>();

function test() {
  console.log(props.type);
}
</script>

<style lang="scss">
.item {
    width: 100px;
    height: 100px;
    background: url('@/assets/images/weapons/weaponBackground.png');
    background-repeat: no-repeat;
    background-size: cover;

  .item-icon {
    img {
      width: 100%;
    }
  }
}
</style>
