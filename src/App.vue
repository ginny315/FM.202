<template>
  <div id="app">
       <a v-link="{ path: '/foo' }">Go to Foo</a>
    <a v-link="{ path: '/bar' }">Go to Bar</a>
  <router-view transition="pagechange" transition-mode="out-in" keep-alive>
  </router-view>
    <card></card>   
  </div>
</template>

<style>
@import 'assets/lib/normalize.css';

* {
  margin:0;
  padding:0;
  border:0;
  outline:0;
  box-sizing:border-box;
}

/*PC css*/
@media screen and(min-width:765px){
  html {
    max-width:640px;
    margin:0 auto;
  }
  body {
    width:100%; 
  }
}
/*mobile css*/
@media screen and(min-width:320px) and (max-width:765px){
  html {
    width:100%;
  }
  body {
    width:100%;
  }
}
</style>

<script>
import Card from './components/Card';

export default {
  components: {
    Card,
  },
};
</script>