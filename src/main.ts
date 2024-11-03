import { createApp } from 'vue'
import './style.css'
import './global.scss'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./util/router.ts";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/iconfont/iconfont.js'
import mitt, {Emitter } from 'mitt'
import SvgIcon from "./components/SvgIcon.vue"
import { RenderEvents } from './lib/inspiration/common/event.ts'
import { Inspiration } from './lib/inspiration/inspiration.ts'
import { RenderContext } from './lib/inspiration/context.ts'
import store from "./store/index.ts";

interface Window {
      gifler: any
      PF: any
}

const app = createApp(App);

app.use(ElementPlus, { size: 'default' });
app.use(router);
app.use(store);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
}
app.component('el-icon-svg', SvgIcon);
app.config.globalProperties.$eventbus =  mitt();
app.config.globalProperties.$context= {} as RenderContext;

app.mount('#app')
