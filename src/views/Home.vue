<template lang="pug">
.home
  img(alt="Vue logo" src="../assets/logo.png")
  HelloWorld(msg="Welcome to Your Vue.js + TypeScript App")
  Button(kind="primary") Testing this
  ArrowButton Testing this
  GradientSvg(iconName="facebook")
  GradientSvg(iconName="youtube")
  GradientSvg(iconName="twitter")
  GradientSvg(iconName="pinterest")
  GradientSvg(iconName="instagram")
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Button from "@atoms/Button.vue";
import ArrowButton from "@atoms/ArrowButton.vue";
import GradientSvg from "@atoms/GradientSvg.vue";

@Options({
  components: {
    HelloWorld,
    Button,
    ArrowButton,
    GradientSvg,
  },
})
export default class Home extends Vue {}
</script>
