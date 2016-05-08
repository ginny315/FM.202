import Vue from 'vue';
import VueRouter from 'vue-router';
// import VueResource from 'vue-resource';
// import { configRouter } from './configRouter';
import App from './App';

Vue.use(VueRouter);
// Vue.use(VueResource);

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
  '/foo': {
    component: Foo,
  },
  '/bar': {
    component: Bar,
  },
});
router.start(App, '#app');

// export default v;
