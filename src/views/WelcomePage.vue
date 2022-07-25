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
          <router-link class="btn nxt-btn" to="/info"
            >Get Started
            <img
              id="down-arrow"
              src="../assets/pictures/arrow-right-circle.png"
          /></router-link>
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
  color: white;
}
.content > .quote {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10%;
  margin-bottom: 200px;
}

.first-line {
  display: flex;
  align-items: center;
}
.header {
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 4rem;
}
.page-navigation {
  display: flex;
  justify-content: flex-start;
}
.page-navigation > a {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#down-arrow {
  height: 30px;
  width: auto;
  margin-left: 20px;
}
.p {
  margin-left: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #212529;
}
</style>
