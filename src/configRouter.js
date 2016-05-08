export function configRouter(router) {
  router.map({
    '/page': {
      component: require('./components/Page.vue'),
    },
  });
}
