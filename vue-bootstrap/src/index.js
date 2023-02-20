import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router"
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import our custom CSS
// import './scss/styles.scss'

// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

const store = createStore({
    state(){
        return {
            logged: false,
            username: "zhuqi",
        }
    },
    mutations: {
        setLogged(res){
            state.logged = res;
        },
        setUsername(username){
            state.username = username;
        }
    }
})

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");