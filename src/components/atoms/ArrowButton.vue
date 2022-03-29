<template lang="pug">
button(
	@click.prevent="action()"
	:class="[kind, {'full-width': fullWidth}]")
	slot
</template>

<style lang="stylus" scoped>
@import '~@/_tokens.styl'
button
	background-image url('~@assets/BlackArrow.svg')
	display block
	background-color transparent
	border none
	background-repeat no-repeat
	background-position-x 100%
	background-position-y center
	text-align start
	padding 15px 0
	padding-right 50px
	font-weight fontWeightBold
	transition 1s
	cursor pointer
	text-transform uppercase
	&.secondary
		background-image url('~@assets/WhiteArrow.svg')
		color fontColorSecondary
	&:hover
		padding-right 65px
		text-decoration underline
	&.full-width
		width 100%
</style>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  emits: ["click-event"],
  props: {
    kind: {
      type: String as PropType<"primary" | "secondary">,
      default: "primary",
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    action(): void {
      this.$emit("click-event");
    },
  },
});
</script>
