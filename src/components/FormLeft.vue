<template>
  <div class="left">
    <div class="left-header">
      <!-- <img src="../assets/pictures/chessLogo.png" alt="logo" /> -->
      <h5>{{ header }}</h5>
    </div>
    <div class="cover">
      <img :src="require(`@/assets/pictures/${coverImg}`)" />
      <div class="quote">
        <h3>{{ quote }}</h3>
        <p>{{ author }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormLeft",
  props: {
    header: { type: String, default: "Redberry Knight Cup" },
    quote: { type: String, default: "SSS" },
    author: { type: String, default: "SSS" },
    coverImg: { type: String, default: "SSS" },
  },
  created() {
    console.log(this.quote);
  },
};
</script>
<style scoped>
h3 {
  color: black;
}
</style>
