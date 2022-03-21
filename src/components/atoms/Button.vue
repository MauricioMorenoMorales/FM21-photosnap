<template lang="pug">
div.secondary(v-if="secondary") secondary
button.primary(v-else) primary
</template>

<style lang="stylus" scoped>
.primary
	background-color blue
.secondary
	background-color red
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    secondary: {
      default: false,
      type: Boolean,
    },
  },
});
</script>
