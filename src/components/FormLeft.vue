<template>
  <div class="left">
    <div class="left-header">
      <h5>{{ header }}</h5>
    </div>
    <div class="cover">
      <img :src="require(`@/assets/pictures/${coverImg}`)" />
      <div v-if="quote === ''" class="quote">
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
    quote: String,
    author: String,
    coverImg: String,
  },
};
</script>
