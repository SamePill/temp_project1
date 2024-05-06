import { createApp } from "vue";
//import Home from "@/views/Home/Home.vue";
import App from './App.vue';
import "./index.css";
import router from "./routes/index.js";
import VueCookies from "vue-cookies";
import { createPinia } from 'pinia'
// import the package
import VueAwesomePaginate from "vue-awesome-paginate";
// import the necessary css file
import "vue-awesome-paginate/dist/style.css";
//import baseMixin from "@/utils/baseMixin.js";
//.mixin(baseMixin)

const pinia = createPinia()

createApp(App).use(router).use(VueCookies).use(pinia).user(VueAwesomePaginate).mount("#app");

