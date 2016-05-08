<template>
  <div class="card"> {{msg}} 
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'ginny!',
    };
  },
};
</script>

<style lang="scss" scoped >
$vueColor: #42b983;
h1 { color: $vueColor;}.card {width:70%;}
</style>
