<template>
<div class="card">
  <div class="card-container"> 
  <figure>
    <img :src="imgSrc" />
  </figure>
  </div>
</div>
</template>

<script>
const ginny = require('../assets/image/ginny.jpg');
export default {
  data() {
    return {
      imgSrc: ginny,
    };
  },
};
</script>

<style lang="scss" scoped >
$vueColor: #42b983;
@mixin border($width:1px,$color:#000){
  border: $width solid $color;
}

figure {
  //margin: 0;
}
.card {
  width:100%;
  //background-color:#000;
  height:100%;
}
.card-container {
  //width:70%;
  padding: 0 15%;
  @include border;
}
figure {
  img{
    width:100%;
  }
}
</style>
