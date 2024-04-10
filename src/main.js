import { createApp } from "vue";
//import Home from "@/views/Home/Home.vue";
import App from './App.vue';
import "./index.css";
import router from "./routes/index.js";

createApp(App).use(router).mount("#app");
