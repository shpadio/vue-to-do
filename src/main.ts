import App from './App.vue'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from "@/router";
import 'ant-design-vue/dist/antd.css';
import {Input, Button} from 'ant-design-vue'

const app = createApp(App)
app.use(router)
app.use(Input,Button)
app.use(createPinia())





app.mount('#app')
