<template>
<div class="card">
  <div class="card-container"> 
  <figure>
    <img :src="imgSrc" />
    <img class="logo" src="../assets/image/ginny.jpg">
  </figure>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: '../assets/image/ginny.jpg',
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
</style>
