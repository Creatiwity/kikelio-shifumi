<script lang="ts" setup>
import type { Player } from '@/types/Players';
import { ref } from 'vue';

const players = ref<Player[]>([{
    name: "Player 1",
    img: "snowBoss",
    backgound: "snowBg",
    life: 0,
},
{
    name: "Player 2",
    img: "vulcanBoss",
    backgound: "vulcanBg",
    life: 0,
}]) 
</script>
<template>
<div class="game">
</div>
</template>