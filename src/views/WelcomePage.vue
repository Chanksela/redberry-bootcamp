<template>
  <div class="left">
    <FormLeft :coverImg="'first.png'" />
  </div>
  <div class="right">
    <div class="content">
      <div class="quote">
        <div class="first-line">
          <p class="header">CHESS SAYS</p>
          <p class="p">A LOT ABOUT</p>
        </div>
        <p class="header">WHO WE ARE</p>
        <div class="page-navigation">
          <router-link class="btn nxt-btn" to="/info">Get Started</router-link>
        </div>
      </div>
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
<style scoped>
.right {
  background-color: #fd5334;
}
.nxt-btn {
  border-radius: 8px;
  background-color: #212529;
}
.content {
  height: 100%;
  width: 100%;
  color: white;
}
.content > .quote {
  margin-top: 250px;
  margin-left: 100px;
}

.first-line {
  display: flex;
  align-items: center;
}
.header {
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 80px;
}
.p {
  margin-left: 10px;
  font-size: 20px;
  font-weight: 700;
  color: black;
}
</style>
