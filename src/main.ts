import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./route/index";
// import './index.css'
//引入vant css样式
import 'vant/lib/index.css';
//引入全局less文件
import './assets/css/style.less'
//引入登录注册页css样式
import "./styles/theme.less"
//引入postcss相关文件
import "amfe-flexible"

//引入复选框
import {
  Checkbox,
  CheckboxGroup,
  NavBar,
  Icon,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Tabbar,
  TabbarItem,
  Button,
  Search,
  Toast,
  Field,
  Lazyload,  //图片懒加载
  Image as VanImage,   //圆形图片
  ActionBar, //商品导航
  ActionBarIcon, //商品导航
  ActionBarButton  //商品导航
} from 'vant';


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
//引入轮播图
app.use(Swipe);
app.use(SwipeItem);
//引入宫格
app.use(Grid);
app.use(GridItem);
//引入底部标签栏
app.use(Tabbar);
app.use(TabbarItem);
//引入搜索框
app.use(Search);
//引入轻提示
app.use(Toast);
//引入搜索框
app.use(Search);
//自定义图片
app.use(Grid);
app.use(GridItem);
// 引入轮播懒加载
app.use(Lazyload);
// 引入圆形图片
app.use(VanImage);
// 引入购物车购买的商品导航
app.use(ActionBar);
app.use(ActionBarIcon);
app.use(ActionBarButton);

app.use(router);
app.mount('#app');
