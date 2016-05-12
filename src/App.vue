<style>
@import 'assets/lib/normalize.css';
* {
  margin:0;
  padding:0;
  border:0;
  outline:0;
  box-sizing:border-box;
}

figure {
  margin: 0; 
}

html {
    font-size:10px;
}
body {
  width:100%;
  height:100%;
  position: relative;
}

/*PC css*/
@media screen and(min-width:765px){
  html {
    max-width:640px;
    margin:0 auto;
  }
}
/*mobile css*/
@media screen and(min-width:320px) and (max-width:765px){
  html {
    max-width:640px;
    width:100%;
  } 
}
a {
  display: none;
}
.pagechange-transition {
  display: none;
  transition: all .5s ease;
  background-color:red;
}
.pagechange-enter, .pagechange-leave {
  display: none;
  opacity: 0;
}
.card-wrap {
  width:25rem;
  padding-top:8rem;
}
ul {
  width: 600%;
  transform:translateX(2%);
}
li {
  width: 14%;
  height:100%;
  margin-left:2%;  
  box-shadow:inset -1px -1px 3px 1px #eee;
  display: inline-block;
}
.card-focus {
  transform: scale(1.2,1.2);
}
.myheader-wrap {
  position: fixed;
  width:100%;
  max-width:640px;
  z-index: 12;
}
</style>

<template>
  <div id="app">
    <a v-link="{ path: '/foo' }">Go to Foo</a>
    <a v-link="{ path: '/bar' }">Go to Bar</a>
    <router-view transition="pagechange" transition-mode="out-in" keep-alive>
    </router-view>
    <div class="myheader-wrap">
    <Myheader></Myheader>
    </div>
    <div class="card-wrap">
    <ul v-touch:swipeleft="onSwipeLeft" v-touch:swiperight="onSwipeRight" :style="styleObj">
      <li :class="{ 'card-focus': item.isCF , 'card-nf' : !item.isCF}" v-for="item in cardlist" track-by="_id"><card></card></li>
    </ul>
    </div>
  </div>
</template>

<script>
import Card from './components/Card';
import Myheader from './components/Myheader';

let cnt = 0;
export default {
  components: {
    Card,
    Myheader,
  },
  data() {
    return {
      cardlist: [{ _id: 1, isCF: true }, { _id: 2, isCF: false }, { _id: 3, isCF: false },
       { _id: 4, isCF: false }, { _id: 5, isCF: false }, { _id: 6, isCF: false }],
      styleObj: {
        transition: 'transform .3s',
        transform: 'translate3d(2%, 0, 0)',
      },
    };
  },
  methods: {
    onSwipeLeft() {
      if (cnt !== 5) {
        this.cardlist[cnt].isCF = false;
        cnt++;
        this.cardlist[cnt].isCF = true;
        const transTemp = 2 - cnt * 16;
        this.styleObj.transform = `translate3d(${transTemp}%, 0, 0)`;
      }
    },
    onSwipeRight() {
      if (cnt !== 0) {
        this.cardlist[cnt].isCF = false;
        cnt--;
        this.cardlist[cnt].isCF = true;
        const transTemp = 2 - cnt * 16;
        this.styleObj.transform = `translate3d(${transTemp}%, 0, 0)`;
      }
    },
  },
};
</script>