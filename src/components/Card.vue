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
const ginny = import('../assets/image/ginny.jpg');
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
.card {
  width:100%;
  background-color:#000;
  height:100%;
}
.card-container {
  width:70%;
}
figure {
  img{
    width:100%;
  }
}
</style>
