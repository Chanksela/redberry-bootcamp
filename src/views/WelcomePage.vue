<template>
  <FormLeft :coverImg="'first.png'" />

  <div class="right">
    <div class="content">
      <h1>CHESS SAYS A LOT ABOUT WHO WE ARE</h1>
    </div>
    <div class="page-navigation">
      <router-link class="btn nxt-btn" to="/info">Get Started</router-link>
    </div>
  </div>
</template>
<script>
import FormLeft from "../components/FormLeft.vue";
export default {
  name: "WelcomePage",
  components: { FormLeft },
};
</script>
<style>
* {
  padding: 5px;
}
</style>
