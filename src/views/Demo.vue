<template>
    <div>
        <ToolBar for-player="p1"></ToolBar>
    </div>
</template>

<script setup lang="ts">
import ToolBar from '../components/ToolBar.vue'
</script>

<style scoped lang="scss">
    .tool-bar {
        transform-origin: center;
        transform: rotate(180deg);
    }
</style>
