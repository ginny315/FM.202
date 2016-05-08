<template>
  <!--router-view transition="pagechange" transition-mode="out-in" keep-alive>
  </router-view-->
  <div id="app">
    <card></card>   
  </div>
</template>
<style>
@import 'assets/lib/normalize.css';

/*PC css*/
@media screen and(min-width:765px){
  html{
    width:640px;
    margin:0 auto;
  }
}
/*mobile css*/
@media screen and(min-width:320px) and (max-width:765px){
  html{
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