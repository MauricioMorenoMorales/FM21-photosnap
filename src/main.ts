import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./normalize.css";
import "./globals.styl";
import "./reset.styl";

createApp(App).use(router).mount("#app");
