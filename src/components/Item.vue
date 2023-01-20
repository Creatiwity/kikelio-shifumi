<template>
  <div class="item" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
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
import { ref } from "vue";

const props = defineProps<{
  type: Weapon;
  forPlayer: PlayerType;
}>();

const clientYStart = ref(0);

function onTouchStart(e: TouchEvent) {
    clientYStart.value = e.touches[0].clientY;
}

function onTouchMove(e: TouchEvent) {
    e.preventDefault()
}

function onTouchEnd(e: TouchEvent) {
    const clientYEnd = e.changedTouches[0].clientY;
    if (props.forPlayer === 'p1') {
        if (clientYEnd > clientYStart.value + 30) {
            console.log('swipe')
        }
    } else {
        if (clientYEnd < clientYStart.value + 30) {
            console.log('swipe')
        }
    }
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
