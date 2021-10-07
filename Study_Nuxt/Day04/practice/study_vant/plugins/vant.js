import Vue from 'vue';
import 'vant/lib/index.css';

// 方式一 ：一次性导入所有组件
// import Vant from "vant";
// Vue.use(Vant)



// 方式二：手动引入需要的组件
import  {Button} from "vant";
Vue.use(Button)
