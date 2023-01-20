<template>
    <div class="tool-bar">
        <Item type="rock" :for-player="props.forPlayer"/>
        <Item type="paper" :for-player="props.forPlayer"/>
        <Item type="scissor" :for-player="props.forPlayer"/>
    </div>
</template>

<script setup lang="ts">
import Item from '../components/Item.vue';

const props = defineProps<{
    forPlayer: '1' | '2',
}>()
</script>

<style scoped lang="scss">
.tool-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 24px 64px;
}
</style>