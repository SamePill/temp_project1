import { createApp } from "vue";
//import Home from "@/views/Home/Home.vue";
import App from './App.vue';
import "./index.css";
import router from "./routes/index.js";
import VueCookies from "vue-cookies";

createApp(App).use(router).use(VueCookies).mount("#app");
