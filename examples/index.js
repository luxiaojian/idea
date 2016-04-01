import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './app.vue';
import 'normalize.css/normalize.css';
import './css/index.css';

import tag from '../src/components/tag.vue';
import pagination from '../src/components/pagination.vue';
import typehead from '../src/components/typehead.vue';
import menu from '../src/components/menu/menu.vue';
import menuItem from '../src/components/menu/menu-item.vue';

Vue.config.debug = true;
Vue.use(VueRouter);

var router = new VueRouter({
  hashbang: false,
  history: true
});

router.map({
  '/': {
    component: App
  }
});

Vue.component('tag', tag);
Vue.component('pagination', pagination);
Vue.component('typehead', typehead);
Vue.component('menu', menu);
Vue.component('menu-item', menuItem);

router.start(Vue.component('app',App), 'body');
