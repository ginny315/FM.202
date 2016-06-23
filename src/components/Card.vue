<style lang="scss" scoped >
$vueColor: #42b983;
$fontS12: 1.2rem;
@mixin border($width:1px,$color:#000){
  border: $width solid $color;
}

.card-container {
  padding: 10% ;
  //@include border;
  font-size: 0;
  position: relative;
  z-index:10;
}
figure {
  position: relative;
  z-index: 9;
  img{
    width:100%;
  }
}
.word-wrap {
  font-size:$fontS12;
  color:$vueColor;
  padding-top:$fontS12;
  span:nth-child(2) {
    float:right;
  }
}
.word-desc {
  padding-top:2*$fontS12;
  font-size: $fontS12;
  line-height: $fontS12*1.2;
  color: #ccc;
}
</style>

<template>

  <div class="card-container"> 
  <figure class="img-wrap">
    <img :src="imgSrc" />
  </figure>
  <div class="word-wrap">
    <span>{{tag}}</span>
    <span>{{nickname}}</span>
  </div>
  <div class="word-desc">
    <span>{{desc}}</span>
  </div>
  </div>

</template>

<script>
const ginny = require('../assets/image/ginny.jpg');
export default {
  data() {
    return {
      imgSrc: ginny,
      tag: 'FM.202-2',
      nickname: '过胖',
      desc: '过胖，202体重佼佼者，减肥4年未成功，生性乐观，随口一说就是段子。',
    };
  },
};
</script>