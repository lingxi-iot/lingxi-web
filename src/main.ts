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
import i18n from './i18n/i18n.ts'; // i18n的配置文件路径，也就是 createI18n 的文件地址

//createApp(App).use(i18n).mount('#app')


interface Window {
      gifler: any
      PF: any
}

const app = createApp(App);

app.use(ElementPlus, { size: 'default' });
app.use(router);
app.use(store);
app.use(i18n);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
}
app.component('el-icon-svg', SvgIcon);
app.config.globalProperties.$eventbus =  mitt();
app.config.globalProperties.$context= {} as RenderContext;

app.mount('#app')
