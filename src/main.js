import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueTouch from 'vue-touch';
// import { configRouter } from './configRouter';
import App from './App';

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueTouch);

const Foo = Vue.extend({
  template: '<p>This is foo!</p>',
});
const Bar = Vue.extend({
  template: '<p>This is bar!</p>',
});

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
});

// configRouter(router);
// const v = new Vue({
//   el: 'body',
//   components: { App },
// });

router.map({
  '/': {
    component: App,
  },
  '/foo': {
    component: Foo,
  },
  '/bar': {
    component: Bar,
  },
});

// VueResource config
Vue.http.options.root = '/data/';
Vue.http.options.emulateJSON = true;

router.start(App, '#app');

// export default v;
