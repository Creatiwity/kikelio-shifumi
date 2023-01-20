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
  width: 312px;
  height: 42px;
  background-image: url("@/assets/images/battle/bar.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;

  .level {
    width: 273px;
    height: 21px;
    margin: 0 8px;
    border-radius: 10px;

    &.zero {
      display: none;
    }
    &.low {
      background-color: red;
    }
    &.medium {
      background-color: orange;
    }
    &.high {
      background-color: green;
    }
  }
}
</style>
