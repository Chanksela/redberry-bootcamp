<template>
  <div class="left">
    <h3>{{ title }}</h3>
    <h3>{{ text }}</h3>
    <img :src="require(`@/assets/${cover}`)" class="cover" />
  </div>
  <div class="right">SOME INFO</div>
</template>
<script>
export default {
  name: "FormBlank",
  props: {
    title: { type: String, default: "Redberry Knight Cup" },
    text: String,
    btnTxt: String,
    cover: String,
  },
};
</script>
<style scoped>
.cover {
  width: 300px;
}
</style>
