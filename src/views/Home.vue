<template lang="pug">
.home
  img(alt="Vue logo" src="../assets/logo.png")
  HelloWorld(msg="Welcome to Your Vue.js + TypeScript App")
  Button(kind="primary") Testing this
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Button from "@atoms/Button.vue";

@Options({
  components: {
    HelloWorld,
    Button,
  },
})
export default class Home extends Vue {}
</script>
