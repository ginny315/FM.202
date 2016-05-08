// require('css-loader!normalize.css');
// require('normalize');
import Vue from 'vue';
// import VueRouter from 'vue-router';
// import VueResource from 'vue-resource';
// import { configRouter } from './configRouter';
import App from './App';

// Vue.use(VueRouter);
// Vue.use(VueResource);

// const router = new VueRouter({
//   history: true,
//   saveScrollPosition: true,
// });

// configRouter(router);
const v = new Vue({
  el: 'body',
  components: { App },
});

export default v;

// const app = Vue.extend(App);
// router.start(app, '#app');
