import { createApp } from "vue";
//import Home from "@/views/Home/Home.vue";
import App from './App.vue';
import "./index.css";
import router from "./routes/index.js";
import VueCookies from "vue-cookies";
import { createPinia } from 'pinia'
import baseMixin from "@/utils/baseMixin.js";

createApp(App).mixin(baseMixin).use(router).use(VueCookies).use(createPinia).mount("#app");

