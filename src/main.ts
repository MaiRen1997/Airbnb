import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./route/index";
import './index.css'
//引入移动端适配
import "amfe-flexible";
//引入vant的button组件
import { Button } from 'vant';
//引入vant模块的自定义css样式
import 'vant/lib/index.css';
//引入复选框
import { Checkbox, CheckboxGroup, Icon, Search, NavBar, Field,  Grid, GridItem } from 'vant';

const app = createApp(App);
//注意顺序
//使用按钮
app.use(Button);
//使用复选框
app.use(Checkbox);
app.use(CheckboxGroup);
//引入导航栏
app.use(NavBar);
//引入输入框
app.use(Field);
app.use(Icon);
//引入搜索框
app.use(Search);
//自定义图片
app.use(Grid)
app.use(GridItem)
app.use(router);
app.mount('#app');
