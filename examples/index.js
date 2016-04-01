import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './app.vue';
import 'normalize.css/normalize.css';
import './css/index.css';

import tag from '../src/components/tag.vue';
import pagination from '../src/components/pagination.vue';
import typehead from '../src/components/typehead.vue';

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

router.start(Vue.component('app',App), 'body');
