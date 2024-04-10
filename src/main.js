import { createApp } from "vue";
//import Home from "@/views/Home/Home.vue";
import App from './App.vue';
import "./index.css";
import router from "./routes/index.js";
//import router from '@/router'
import vueCookies from "vue-cookies";
import { createPinia } from 'pinia'

createApp(App)
.use(router)
.use(vueCookies)
.use(createPinia)
.mount("#app");
