import { createApp } from "vue";
//import Home from "@/views/Home/Home.vue";
import App from './App.vue';
import "./index.css";
import router from "./routes/index.js";
import VueCookies from "vue-cookies";
import { createPinia } from 'pinia'
// import the package
import VueAwesomePaginate from "vue-awesome-paginate";
import { ValidationDirective } from './directive/ValidationDirective.js'
// import the necessary css file
import "vue-awesome-paginate/dist/style.css";
//import baseMixin from "@/utils/baseMixin.js";
//.mixin(baseMixin)

const pinia = createPinia()
const app = createApp(App);
app.use(router)
app.use(VueCookies)
app.use(pinia)
app.use(VueAwesomePaginate)
app.mount("#app");
app.directive("valid", ValidationDirective);

