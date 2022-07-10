<template>
  <div class="left-header">
    <img src="../assets/pictures/chessLogo.png" alt="logo" />
    <h5>{{ header }}</h5>
  </div>
  <div class="cover">
    <img :src="require(`@/assets/pictures/${coverImg}`)" />
    <div class="quote">
      <p id="quote">{{ quote }}</p>
      <p id="author">{{ author }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormLeft",
  props: {
    header: { type: String, default: "Redberry Knight Cup" },
    quote: { type: String, default: "" },
    author: { type: String, default: "" },
    coverImg: { type: String, default: "" },
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
.cover {
  position: relative;
  text-align: left;
  color: black;
}

.quote > #quote {
  position: absolute;
  width: 423px;
  height: 83px;
  left: 132px;
  top: 295px;
  font-family: "Nunito", sans-serif;
  font-style: italic;
  font-weight: 800;
  font-size: 26px;
  line-height: 35px;
  text-transform: uppercase;
  color: #212529;
}
.quote > #author {
  font-family: "Nunito";
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  text-transform: uppercase;
  position: absolute;
  width: 222px;
  height: 33px;
  left: 132px;
  top: 402px;
  color: #e5e6e8;
}
</style>
