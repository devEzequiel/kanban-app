import { createApp } from 'vue';
import './tailwind.css';
import './style.css';
import './scroolbar.css'
import './fonts.css'
import App from './App.vue';
import Router from "./routes";

createApp(App).use(Router).mount('#app')
