import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./route/index";
import './index.css'
//引入vant的button组件
import { Button } from 'vant';
import 'vant/lib/index.css';
import './libs/rem.ts';

//引入复选框
import { Checkbox, CheckboxGroup, NavBar, Icon } from 'vant';



const app = createApp(App);
//注意顺序
//使用按钮
app.use(Button);
//使用复选框
app.use(Checkbox);
app.use(CheckboxGroup);
//使用导航栏
app.use(NavBar);
//使用icon
app.use(Icon);

app.use(router);
app.mount('#app');
