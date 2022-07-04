<template>
  <div class="left">
    <div class="left-header">
      <h5>Redberry Knight Cup</h5>
    </div>
    <div class="cover">
      <img src="@/assets/pictures/first.png" />
    </div>
  </div>
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
export default { name: "Welcome-Page" };
</script>
<style>
* {
  padding: 5px;
}
</style>
