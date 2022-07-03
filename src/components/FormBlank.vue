<template>
  <h3>{{ title }}</h3>
  <h3>{{ text }}</h3>
  <router-link to="/info">{{ btnTxt }}</router-link>
</template>
<script>
export default {
  name: "FormBlank",
  props: {
    title: { type: String, default: "Redberry Knight Cup" },
    text: String,
    btnTxt: String,
  },
};
</script>
