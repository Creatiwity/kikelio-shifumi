<template>
  <div class="lifeBar">
    <div
      class="level"
      :class="`${type}`"
      :style="{ width: lifeLevel + '%' }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  lifeLevel: number;
}>();

const type = computed(() => {
  if (props.lifeLevel <= 0) {
    return "zero";
  } else if (props.lifeLevel <= 30) {
    return "low";
  } else if (props.lifeLevel <= 70) {
    return "medium";
  } else {
    return "high";
  }
});
</script>

<style lang="scss">
.lifeBar {
  width: 120px;
  height: 16px;
  background-image: url("@/assets/images/battle/bar.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;

  .level {
    width: 104px;
    height: 8px;
    margin: 0 8px;
    border-radius: 10px;

    &.zero {
      display: none;
    }
    &.low {
      background-color: #ec0402;
    }
    &.medium {
      background-color: #f68a27;
    }
    &.high {
      background-color: #3cf527;
    }
  }
}
</style>
