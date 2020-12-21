import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./route/index";
import './index.css'
//引入vant的button组件
import { Button } from 'vant';
import 'vant/lib/index.css';

//引入复选框
import { Checkbox, CheckboxGroup } from 'vant';



const app = createApp(App);
//注意顺序
app.use(Button);
app.use(Checkbox);
app.use(CheckboxGroup);

app.use(router);
app.mount('#app');
