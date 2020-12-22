import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./route/index";
import './index.css'
//引入移动端适配
import "amfe-flexible";
//引入vant的button组件
import { Button } from 'vant';
import 'vant/lib/index.css';
//引入复选框
import { Checkbox, CheckboxGroup } from 'vant';
//引入导航栏
import { NavBar } from 'vant';
//引入输入框
import { Field } from 'vant';


const app = createApp(App);
//注意顺序
app.use(Button);
app.use(Checkbox);
app.use(CheckboxGroup);
app.use(NavBar);
app.use(Field);
app.use(router);
app.mount('#app');
