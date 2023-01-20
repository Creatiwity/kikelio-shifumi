<template>
    <div class="item" @touchstart="test">
        <div class="item-icon">
            <img v-if="props.type === 'rock'" src="~@/assets/images/weapons/weaponRock.png"/>
            <img v-if="props.type === 'paper'" src="~@/assets/images/weapons/weaponPaper.png"/>
            <img v-if="props.type === 'scissor'" src="~@/assets/images/weapons/weaponScissor.png"/>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    type: 'rock' | 'paper' | 'scissor',
    forPlayer: '1' | '2',
}>()

function test() {
    console.log(props.type);
}
</script>

<style lang="scss">
.item {
    width: 226px;
    height: 226px;
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