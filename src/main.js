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
Vue.http.options.root = 'static/data';
Vue.http.options.emulateJSON = true;
// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';
// Vue.http.options.xhr = { 'http://localhost:8000': true };

router.start(App, '#app');

// export default v;
